import React from 'react';
import Image from 'next/image';
import { getBlogContent, BlogContentSection } from '@/utils/blogContent';

interface BlogContentRendererProps {
  slug: string;
}

export default function BlogContentRenderer({ slug }: BlogContentRendererProps) {
  const content = getBlogContent(slug);

  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Content not found for this blog post.</p>
        <p className="text-sm text-gray-500 mt-2">
          The content for <code className="bg-zinc-800 px-2 py-1 rounded">{slug}</code> is not yet available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {content.sections.map((section, index) => (
        <ContentSection key={index} section={section} />
      ))}
    </div>
  );
}

interface ContentSectionProps {
  section: BlogContentSection;
}

// Helper function to detect URLs and render them as clickable links
function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a 
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

function ContentSection({ section }: ContentSectionProps) {
  switch (section.type) {
    case 'paragraph':
      return (
        <p className="text-gray-300 leading-relaxed">
          {renderTextWithLinks(section.content || '')}
        </p>
      );
    
    case 'heading':
      const level = section.level || 2;
      const headingClasses = {
        1: 'text-4xl font-bold mb-6 mt-12',
        2: 'text-3xl font-bold mb-4 mt-10',
        3: 'text-2xl font-semibold mb-3 mt-8',
        4: 'text-xl font-semibold mb-2 mt-6',
        5: 'text-lg font-semibold mb-2 mt-4',
        6: 'text-base font-semibold mb-2 mt-4'
      };
      
      const className = headingClasses[level as keyof typeof headingClasses] || headingClasses[2];
      
      if (level === 1) {
        return <h1 className={className}>{section.content}</h1>;
      } else if (level === 2) {
        return <h2 className={className}>{section.content}</h2>;
      } else if (level === 3) {
        return <h3 className={className}>{section.content}</h3>;
      } else if (level === 4) {
        return <h4 className={className}>{section.content}</h4>;
      } else if (level === 5) {
        return <h5 className={className}>{section.content}</h5>;
      } else {
        return <h6 className={className}>{section.content}</h6>;
      }
    
    case 'code':
      return (
        <div className="relative">
          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
            <code className={`language-${section.language || 'text'} text-sm`}>
              {section.content}
            </code>
          </pre>
          {section.language && (
            <span className="absolute top-2 right-2 text-xs text-gray-500 bg-zinc-800 px-2 py-1 rounded">
              {section.language}
            </span>
          )}
        </div>
      );
    
    case 'list':
      return (
        <ul className="space-y-2 pl-6">
          {section.items?.map((item, index) => (
            <li key={index} className="text-gray-300 relative">
              <span className="absolute -left-6 text-cyan-400">•</span>
              {renderTextWithLinks(item)}
            </li>
          ))}
        </ul>
      );
    
    case 'quote':
      return (
        <blockquote className="border-l-4 border-cyan-400 pl-6 py-4 bg-zinc-900/30 rounded-r-lg">
          <p className="text-gray-300 italic text-lg leading-relaxed">
            &quot;{section.content}&quot;
          </p>
        </blockquote>
      );
    
    case 'image':
      return (
        <figure className="my-8">
          <Image
            src={section.content || ''}
            alt={section.alt || ''}
            width={800}
            height={400}
            className="w-full rounded-lg border border-zinc-800"
          />
          {section.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    
    default:
      return null;
  }
}

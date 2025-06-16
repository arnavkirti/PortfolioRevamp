import Link from "next/link";

export interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
}

export default function BlogPost({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  slug, 
  tags = [] 
}: BlogPostProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </time>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </div>
          
          {/* Arrow Icon */}
          <div className="ml-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-zinc-800/50 text-xs text-gray-400 rounded-md border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 text-xs text-gray-500">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </article>
    </Link>
  );
}

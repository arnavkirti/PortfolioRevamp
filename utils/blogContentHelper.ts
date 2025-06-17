/**
 * Blog Content Management Utilities
 * Use these helper functions to easily add new blog content
 */

import { BlogContent, BlogContentSection, addBlogContent } from './blogContent';

export interface BlogContentBuilder {
  slug: string;
  sections: BlogContentSection[];
}

export class BlogContentHelper {
  private content: BlogContentBuilder;

  constructor(slug: string) {
    this.content = {
      slug,
      sections: []
    };
  }

  paragraph(text: string): BlogContentHelper {
    this.content.sections.push({
      type: 'paragraph',
      content: text
    });
    return this;
  }

  heading(text: string, level: number = 2): BlogContentHelper {
    this.content.sections.push({
      type: 'heading',
      content: text,
      level
    });
    return this;
  }

  code(code: string, language: string = 'javascript'): BlogContentHelper {
    this.content.sections.push({
      type: 'code',
      content: code,
      language
    });
    return this;
  }

  list(items: string[]): BlogContentHelper {
    this.content.sections.push({
      type: 'list',
      items
    });
    return this;
  }

  quote(text: string): BlogContentHelper {
    this.content.sections.push({
      type: 'quote',
      content: text
    });
    return this;
  }

  image(src: string, alt: string, caption?: string): BlogContentHelper {
    this.content.sections.push({
      type: 'image',
      content: src,
      alt,
      caption
    });
    return this;
  }

  build(): BlogContent {
    return this.content;
  }

  save(): void {
    addBlogContent(this.content);
  }
}

// Helper function to create new blog content easily
export function createBlogContent(slug: string): BlogContentHelper {
  return new BlogContentHelper(slug);
}

// Example usage:
/*
const newPost = createBlogContent("my-new-blog-post")
  .heading("Introduction to Web3", 1)
  .paragraph("Web3 represents the next evolution of the internet...")
  .heading("Key Concepts")
  .list([
    "Decentralization",
    "Blockchain technology", 
    "Smart contracts"
  ])
  .code(`
const web3 = new Web3(window.ethereum);
const accounts = await web3.eth.getAccounts();
  `, "javascript")
  .quote("The future of the internet is decentralized")
  .paragraph("In conclusion...")
  .save();
*/

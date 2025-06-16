import Link from "next/link";
import BlogPost, { BlogPostProps } from "./BlogPost";

interface RecentPostsProps {
  posts: BlogPostProps[];
  showViewAll?: boolean;
  maxPosts?: number;
}

export default function RecentPosts({ 
  posts, 
  showViewAll = true, 
  maxPosts = 3 
}: RecentPostsProps) {
  const displayPosts = posts.slice(0, maxPosts);

  return (
    <section className="mt-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-left">
          Recent Posts
        </h2>
        {showViewAll && posts.length > maxPosts && (
          <Link 
            href="/blog"
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>

      {/* Posts Grid */}
      {displayPosts.length > 0 ? (
        <div className="grid gap-6">
          {displayPosts.map((post, index) => (
            <BlogPost key={post.slug || index} {...post} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-600">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-400 mb-2">No posts yet</h3>
          <p className="text-gray-500 text-sm">
            Check back later for new blog posts and insights.
          </p>
        </div>
      )}
    </section>
  );
}

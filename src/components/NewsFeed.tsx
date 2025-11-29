import React from 'react';
import { Post } from '@/data/posts';

const NewsFeed: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="group cursor-pointer">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
            <time className="text-sm text-slate-500 dark:text-slate-400 shrink-0 w-32">
              {post.date}
            </time>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {post.excerpt}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsFeed;

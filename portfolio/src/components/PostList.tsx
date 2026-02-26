import React from 'react';
import Post from './Post';
import type { PostProps } from './Post';

const samplePosts: PostProps[] = [
  { id: '1', title: 'Minecraft Trailer', videoId: 'LpZ0O_h6M0U', isShort: false },
  { id: '2', title: '1.21 Update', videoId: '8p_O5Y8f04k', isShort: false },
  { id: '3', title: 'Epic Build Timelapse', videoId: 'dQw4w9WgXcQ', isShort: false },
];

const PostList: React.FC = () => {
  return (
    <div className="w-full max-w-7xl px-6">
      <div className="flex flex-col items-center mb-16">
        <h2 className="minecraft-font text-4xl md:text-6xl text-white mb-4 uppercase tracking-tighter">My Posts</h2>
        <div className="h-2 w-48 bg-gradient-to-r from-brand-red via-white to-brand-blue" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {samplePosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;

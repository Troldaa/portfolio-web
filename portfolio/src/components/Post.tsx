import React from 'react';

export interface PostProps {
  id: string;
  title: string;
  videoId: string;
  isShort?: boolean;
}

const Post: React.FC<PostProps> = ({ title, videoId, isShort }) => {
  return (
    <div className="bg-neutral-900 border-4 border-brand-red p-4 shadow-[12px_12px_0px_0px_rgba(255,0,51,1)] transition-all hover:-translate-y-2 group">
      <h3 className="minecraft-font text-brand-red text-sm mb-4 group-hover:text-white transition-colors truncate">{title}</h3>
      <div className="relative w-full overflow-hidden border-2 border-brand-blue" style={{ aspectRatio: isShort ? '9/16' : '16/9' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default Post;

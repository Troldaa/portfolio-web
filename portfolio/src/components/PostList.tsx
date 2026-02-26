import { Calendar, ExternalLink } from 'lucide-react';

const PostList = () => {
  const posts = [
    {
      id: '1',
      title: 'Amazing Minecraft Base Build 🏰',
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      date: '2 days ago',
    },
    {
      id: '2',
      title: 'Redstone Tutorial: Auto Farm 🚜',
      type: 'short',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      date: '5 days ago',
    },
    {
      id: '3',
      title: 'Diamond Speedrun Challenge 💎',
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      date: '1 week ago',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 shadow-2xl">

          {/* Header */}
          <div className="p-5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{post.type}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
               <Calendar size={12} />
               <span>{post.date}</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="aspect-video relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
             <iframe
                className="w-full h-full"
                src={post.url}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h3 className="font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="https://minotar.net/helm/MiniOmega_69/32.png" alt="MiniOmega_69" className="w-6 h-6 rounded-full border border-white/20" />
                    <span className="text-sm font-medium text-gray-300">MiniOmega_69</span>
                </div>
                <button className="flex items-center gap-1 text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors">
                    Watch Full <ExternalLink size={12} />
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

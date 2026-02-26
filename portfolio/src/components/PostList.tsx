import { Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PostList = () => {
  const { t } = useLanguage();

  const videoIds = [
    'FUItZjbzykg',
    'K251QO8iono',
    'lis-F0Wp0Eo'
  ];

  const clicks = ['412', '856', '231'];

  const posts = t.sections.posts.items.map((item, idx) => ({
    ...item,
    id: String(idx + 1),
    type: 'short',
    url: `https://www.youtube.com/embed/${videoIds[idx]}`,
    clicks: clicks[idx]
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-[#12121e]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-red-500/30 transition-all duration-500 shadow-2xl flex flex-col">

          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{post.type}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ExternalLink size={10} className="text-gray-500" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.clicks} {t.sections.posts.clicks}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
               <Calendar size={12} className="text-blue-500" />
               <span>{post.date}</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="aspect-[9/16] relative overflow-hidden bg-black/40">
             <iframe
                className="w-full h-full"
                src={post.url}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-black text-xl leading-tight group-hover:text-red-500 transition-colors uppercase tracking-tight">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {post.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3">
                    <img src="https://minotar.net/helm/MiniOmega_69/32.png" alt="MiniOmega_69" className="w-8 h-8 rounded-full border-2 border-white/10 shadow-lg" />
                    <span className="text-xs font-bold text-gray-300 tracking-wider">MiniOmega_69</span>
                </div>
                {post.link ? (
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black text-blue-500 hover:text-red-500 transition-all uppercase tracking-widest">
                      {t.sections.posts.visit} <ExternalLink size={14} />
                  </a>
                ) : (
                  <a href={`https://youtu.be/${post.url.split('/').pop()}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black text-blue-500 hover:text-red-500 transition-all uppercase tracking-widest">
                      {t.sections.posts.watch} <ExternalLink size={14} />
                  </a>
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import articles from '../article-content.js';

///lolol
import NotFoundPage from './NotFoundPage.jsx';

function ArticlePage() {
  const { name } = useParams();

  const article = articles.find(a => a.name === name);


 if (!article) {
    return (
      <div className="relative flex flex-col w-full min-h-screen bg-[#f0f2f5]">
        
        <div className="flex justify-start pt-8 px-8 bg-[#f0f2f5]">
          <Button 
            to="/articles" 
            className="z-20 bg-[#3b4cca] text-black px-6 py-2.5 border-b-4 border-black text-xs font-black uppercase italic active:border-b-0 active:translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            ← Back to Social
          </Button>
        </div>

        <div className="-mt-16 flex-1 flex flex-col justify-center">
          <NotFoundPage />
        </div>
        
      </div>
    );
  }

  return (
    <div className="font-sans selection:bg-yellow-400">
      <main className="mx-auto max-w-5xl px-4 py-8"> {/* Added py-8 for breathing room below Nav */}
        
        {/* Secondary Back Action */}
        <div className="mb-8">
           <Button to="/articles" className="bg-white text-[10px] font-black uppercase tracking-tighter hover:bg-zinc-200 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-4 py-2">
            ← Return to Social Feed
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Article Meta & Image */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-zinc-900 bg-white shadow-[12px_12px_0px_0px_rgba(24,24,27,1)]">
              <div className="relative aspect-video border-b-4 border-zinc-900 bg-zinc-200">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="h-full w-full object-cover" 
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg border-2 border-zinc-900 bg-black/80 px-3 py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
    
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                     Live Feed
                </span>
               </div>
               <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
               <div className="absolute top-0 right-0 p-4">
                <div className="h-4 w-4 border-t-2 border-r-2 border-white/30"></div>
              </div>
               <div className="absolute bottom-0 left-0 p-4">
               <div className="h-4 w-4 border-b-2 border-l-2 border-white/30"></div>
              </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`rounded-md border-2 border-zinc-900 ${article.color} px-3 py-0.5 text-[10px] font-black uppercase text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                    {article.type}
                  </span>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Log Entry #{article.id}</span>
                </div>
                <h1 className="text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-zinc-900 sm:text-6xl">
                  {article.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Author */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div className="rounded-3xl border-4 border-zinc-900 bg-[#ffcb05] p-6 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-zinc-900 bg-white text-xl font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-zinc-700 opacity-70">Published By</p>
                    <p className="text-xl font-black uppercase italic tracking-tighter text-zinc-900">{article.author}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border-4 border-zinc-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
                <div className="prose prose-zinc max-w-none">
                  {article.content.map((paragraph, index) => (
                    <p    key={index} 
                     className="mb-6 text-xl leading-relaxed text-zinc-800 last:mb-0 font-['Times_New_Roman',_serif] text-justify"  >
                  {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Button to="/articles" className="w-full bg-white text-zinc-900 border-2 border-zinc-900 py-4 font-black uppercase italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none">
                CLose Report
              </Button>
    </div>
  );
}

export default ArticlePage;
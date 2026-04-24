import Button from '../components/Button';
// Import report images
import mountMoonImg from '../res/mount-moon.webp';
import magikarpImg from '../res/magikarp.jpg';
import electricImg from '../res/electric.jpg';
import ceruleanImg from '../res/ceruleancave.jpg';

const ArticlePage = () => {
  const reports = [
    { 
      id: '402', 
      title: 'Mount Moon Sightings', 
      desc: 'Clefairy migration patterns are peaking this week. Bring Moon Stones and plenty of Repels!', 
      type: 'Fairy', 
      author: 'Trainer Red',
      image: mountMoonImg,
      color: 'bg-pink-500'
    },
    { 
      id: '129', 
      title: 'Magikarp: Hidden Power?', 
      desc: 'Is it possible for a splash to eventually break mountains? My research says yes. Evolution is key.', 
      type: 'Water', 
      author: 'Prof. Coel',
      image: magikarpImg,
      color: 'bg-blue-500'
    },
    { 
      id: '025', 
      title: 'Static Electricity Tips', 
      desc: 'How to groom your Electric types without getting paralyzed in the process. Safety first!', 
      type: 'Electric', 
      author: 'Sparky 99',
      image: electricImg,
      color: 'bg-yellow-400'
    },
    { 
      id: '150', 
      title: 'Cerulean Cave Myths', 
      desc: 'Deep-dive into the psychic resonance felt near the restricted cave zone. Investigation ongoing.', 
      type: 'Psychic', 
      author: 'Mystic_Oak',
      image: ceruleanImg,
      color: 'bg-purple-600'
    },
  ];

  return (
    <div className="flex w-full flex-col gap-8 bg-[#f8fafc] pb-12 font-sans selection:bg-[#3b4cca] selection:text-white">
      {/* Header: PokeSocial Feed Branding */}
      <section className="border-b-8 border-[#2a3a9d] bg-[#3b4cca] px-4 py-10 text-white sm:px-6 lg:px-8 shadow-inner relative overflow-hidden">
        {/* Decorative Pokéball Background Element */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 border-[20px] border-white/10" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="mb-3 text-[12px] font-black uppercase tracking-[0.4em] text-yellow-400 drop-shadow-md">
            Global Trainer Network // Region: Kanto
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl drop-shadow-lg italic uppercase tracking-tighter">
            Poke<span className="text-yellow-400 underline decoration-white/20 underline-offset-4">Social</span> Feed
          </h1>
          <p className="mt-4 max-w-lg text-lg font-medium leading-7 text-blue-50 sm:text-xl border-l-4 border-yellow-400 pl-4">
            The #1 social hub for field reports, berry-gathering tips, and legendary sightings across all regions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/" className="bg-[#ff1c1c] hover:bg-[#cc0000] text-white border-white border-b-4 font-black px-8 italic shadow-lg active:translate-y-1 active:border-b-0">
              LOG OFF
            </Button>
            <Button className="bg-white text-[#3b4cca] border-[#3b4cca] border-b-4 font-black px-8 italic shadow-lg active:translate-y-1 active:border-b-0">
              POST UPDATE
            </Button>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between border-b-4 border-zinc-200 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffcb05] border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
              <span className="text-2xl">📡</span>
            </div>
            <h2 className="text-2xl font-black text-zinc-900 uppercase italic tracking-tighter">Trending Reports</h2>
          </div>
          <div className="flex gap-2">
             <button className="rounded-lg bg-zinc-200 px-4 py-2 text-[10px] font-black uppercase text-zinc-600 hover:bg-zinc-300 transition-colors">Latest</button>
             <button className="rounded-lg bg-[#3b4cca] px-4 py-2 text-[10px] font-black uppercase text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]">Top Rated</button>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {reports.map((article, i) => (
            <article key={i} className="group relative flex flex-col rounded-[2.5rem] border-4 border-zinc-900 bg-white p-5 shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-y-2">
              
              {/* Post Header */}
              <div className="mb-4 flex items-center gap-3 border-b-2 border-zinc-50 pb-3">
                <div className={`h-10 w-10 rounded-full border-2 border-zinc-900 ${article.color} shadow-inner flex items-center justify-center font-black text-white text-xs`}>
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase text-zinc-900 leading-none">{article.author}</p>
                  <p className="text-[9px] font-bold text-zinc-400 mt-1">LOG ENTRY #{article.id}</p>
                </div>
              </div>

              {/* Report Image */}
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.8rem] bg-zinc-100 overflow-hidden relative border-2 border-zinc-900 mb-4 shadow-inner">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
                <div className="absolute bottom-2 right-2 rounded-md bg-black/60 backdrop-blur-sm px-2 py-1 text-[8px] font-black text-white uppercase tracking-widest">
                  Live_Feed
                </div>
              </div>

              <div className="flex-grow">
                <span className={`inline-block rounded-md border-2 border-zinc-900 bg-white px-2 py-0.5 text-[9px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]`}>
                  {article.type}
                </span>
                <h3 className="mt-3 text-xl font-black text-zinc-900 leading-tight italic uppercase tracking-tighter">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-500 line-clamp-3">
                  {article.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-3">
                <Button className="flex-1 bg-[#ffcb05] hover:bg-[#ffde00] text-[#3b4cca] font-black rounded-xl border-zinc-900 border-b-4 uppercase italic text-[11px] py-3 transition-all active:border-b-0 active:translate-y-1">
                  VIEW REPORT
                </Button>
                <button className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-zinc-900 bg-red-50 transition-all hover:bg-red-500 hover:text-white hover:scale-110 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  ❤️
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tip Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-[2.5rem] border-4 border-zinc-900 bg-[#4dad5b] p-8 shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
          <div className="absolute -left-4 -bottom-4 h-24 w-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="h-20 w-20 flex-shrink-0 rounded-2xl bg-white border-4 border-zinc-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center text-4xl z-10">
            💡
          </div>
          <div className="z-10">
            <h4 className="text-2xl font-black text-zinc-900 uppercase italic tracking-tighter">Pro-Trainer Tip:</h4>
            <p className="mt-2 font-bold text-green-950 text-lg leading-snug">
              Sync your Pokégear at every Pokémon Center to stay updated with regional migrations and high-priority sightings!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
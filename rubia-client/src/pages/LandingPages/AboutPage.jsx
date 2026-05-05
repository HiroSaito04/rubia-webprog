import Button from '../../components/Button';
// Import badge assets 
import badgeA from '../../assets/res/A.png';
import badgeB from '../../assets/res/B.png';
import badgeC from '../../assets/res/C.png';
import badgeD from '../../assets/res/D.png';
// Import the Trainer Sprite
import trainerSprite from '../../assets/res/Mike.png';

const AboutPage = () => {
  const badges = [
    { img: badgeA, name: 'Zephyr Badge' },
    { img: badgeB, name: 'Hive Badge' },
    { img: badgeC, name: 'Rising Badge' },
    { img: badgeD, name: 'Plain Badge' },
  ];

  return (
    <div className="flex w-full flex-col gap-8 bg-[#f8fafc] pb-16 font-sans selection:bg-[#ff1c1c] selection:text-white">
      {/* Profile Hero: Immersive Pokédex Stage */}
      <section className="relative border-b-[12px] border-[#cc0000] bg-[#ff1c1c] px-4 py-12 text-white sm:px-6 lg:px-8 shadow-2xl overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center max-w-7xl mx-auto">
          
          {/* Full Body Sprite Stage */}
          <div className="relative group">
            <div className="relative rounded-[3rem] border-8 border-[#30a7d7] bg-[#1a1a1a] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[3/4] max-w-[320px] mx-auto overflow-hidden">
              {/* Internal Digital Screen */}
              <div className="h-full w-full rounded-[2.5rem] bg-gradient-to-b from-[#3b4cca] to-[#2a3a9d] relative flex items-end justify-center overflow-hidden">
                
                {/* The Sprite: Full Body Display */}
                <img 
                  src={trainerSprite} 
                  alt="Trainer" 
                  className="relative z-20 h-[100%] w-auto object-contain transition-transform duration-700 group-hover:scale-115"
                  style={{ imageRendering: 'pixelated' }}
                />

                {/* Digital Stage Shadow */}
                <div className="absolute bottom-6 h-8 w-40 rounded-[100%] bg-black/40 blur-md z-10"></div>
              </div>

              {/* Hardware Details (Pokedex lights) */}
              <div className="absolute top-8 left-8 flex gap-2 z-40">
                <div className="h-4 w-4 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#60a5fa]"></div>
                <div className="h-2 w-10 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>

          {/* Trainer Data Panel */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-lg bg-zinc-900/30 px-4 py-2 backdrop-blur-md border border-white/10">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-yellow-300">
                Trainer Profile: ID #2023-103514
              </p>
            </div>

            <h1 className="text-5xl font-black leading-none sm:text-5xl drop-shadow-lg italic uppercase tracking-tighter">
              TKHRST - MICKAEL <br />
              <span className="text-2xl sm:text-3xl font-black text-yellow-400 drop-shadow-md">
                Game Developer
              </span>
            </h1>

            <p className="max-w-lg text-xl font-bold leading-tight text-red-50 sm:text-2xl border-l-8 border-yellow-400 pl-6 italic">
              "Equipped with a diverse skill-set and a passion for clean UI, this trainer explores the wild frontiers of the web."
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <Button to="/" className="bg-[#ffcb05] hover:bg-[#ffde00] text-[#3b4cca] border-[#3b4cca] border-b-[6px] font-black px-10 py-4 text-lg transform hover:-translate-y-1 transition-all active:translate-y-0 active:border-b-0">
                OPEN POKÉDEX
              </Button>
              <Button to="/articles" className="bg-white hover:bg-zinc-100 text-zinc-900 border-zinc-900 border-b-[6px] font-black px-10 py-4 text-lg transform hover:-translate-y-1 transition-all active:translate-y-0 active:border-b-0">
                POKÉSOCIAL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Quests Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          
          <div className="space-y-8">
            {/* Horizontal Stats Strip */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
              {[
                { label: 'Active Yrs', val: '05', color: 'bg-orange-500' },
                { label: 'Projects', val: '16', color: 'bg-blue-500' },
                { label: 'Certificates', val: '09', color: 'bg-purple-500' },
                { label: 'Specialty', val: 'IT', color: 'bg-green-500' },
              ].map((stat, i) => (
                <div key={i} className="group rounded-2xl border-4 border-zinc-900 bg-white p-5 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  <div className={`mb-3 h-8 w-8 rounded-lg ${stat.color} border-2 border-zinc-900 shadow-sm transition-transform group-hover:rotate-12`} />
                  <p className="text-2xl font-black text-zinc-900 tracking-tighter">{stat.val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quest Log Area */}
            <div className="rounded-[2.5rem] border-4 border-zinc-900 bg-white p-8 shadow-[10px_10px_0px_0px_rgba(24,24,27,1)]">
              <h2 className="text-3xl font-black text-zinc-900 uppercase italic tracking-tighter mb-8 border-b-4 border-zinc-100 pb-2 flex items-center gap-3">
                <span className="h-4 w-4 bg-[#cc0000] rounded-sm rotate-45"></span>
                Active Quest Log
              </h2>
              <div className="space-y-4">
                <div className="rounded-2xl border-2 border-zinc-900 bg-sky-50 p-6 flex gap-6 items-start">
                  <span className="text-3xl">🛡️</span>
                  <div>
                    <h3 className="font-black text-sky-800 uppercase tracking-tight">The React Region</h3>
                    <p className="mt-1 text-sm font-medium text-zinc-600">Currently traversing through state management and component reusability architectures.</p>
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-zinc-900 bg-rose-50 p-6 flex gap-6 items-start">
                  <span className="text-3xl">⚔️</span>
                  <div>
                    <h3 className="font-black text-rose-800 uppercase tracking-tight">Experience Points (XP)</h3>
                    <p className="mt-1 text-sm font-medium text-zinc-600">Scaling complex deployments and hardening UI/UX logic across different IT environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge Showcase Sidebar */}
          <aside className="rounded-[3rem] border-4 border-zinc-900 bg-[#3b4cca] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] text-white">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-black uppercase italic tracking-tighter tracking-widest">Gym Badges</h2>
               <div className="h-10 w-10 rounded-full bg-[#ffcb05] border-4 border-zinc-900 shadow-md"></div>
            </div>
            
            <div className="grid gap-4 grid-cols-2">
              {badges.map((badge, i) => (
                <div key={i} className="group flex flex-col items-center justify-center aspect-square rounded-3xl bg-white/10 border-2 border-dashed border-white/20 hover:bg-white hover:border-white transition-all cursor-crosshair">
                  <img 
                    src={badge.img} 
                    alt={badge.name} 
                    className="h-16 w-16 object-contain drop-shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-12"
                    style={{ imageRendering: 'pixelated' }} 
                  />
                  <span className="mt-3 text-[9px] font-black uppercase text-white/50 group-hover:text-[#3b4cca] transition-colors">{badge.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-4 rounded-2xl bg-black/20 border border-white/10">
               <p className="text-[10px] font-bold text-yellow-300 uppercase tracking-widest text-center">Trainer Rank: ELITE</p>
               <div className="mt-2 h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-yellow-400"></div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
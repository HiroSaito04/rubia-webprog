import Button from '../../components/Button';
// Import assets (assuming Vite/standard React build tool)
// Adjusting the paths to go up one level from 'pages' to 'assets'
import bulbasaurImg from '../../assets/res/bulbasaur.png';
import charmanderImg from '../../assets/res/charmander.png';
import squirtleImg from '../../assets/res/squirtle.png';
import pikachuImg from '../../assets/res/partner-pikachu.png';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-10 bg-[#e5e7eb] pb-20 font-sans selection:bg-[#ff1c1c] selection:text-white">
      
      {/* Hero Section: The Master Unit */}
      <section className="relative overflow-hidden border-b-[12px] border-zinc-900 bg-[#ff1c1c] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-md bg-zinc-900 px-3 py-1 shadow-lg">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-400">
                System Version 8.0.2 // KANTO
              </p>
            </div>
            
            <h1 className="text-5xl font-black leading-[0.9] sm:text-7xl drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)] italic uppercase tracking-tighter">
              Gotta Catch <br />
              <span className="text-zinc-900 underline decoration-yellow-400 underline-offset-8">'Em All!</span>
            </h1>
            
            <p className="max-w-md text-lg font-bold leading-relaxed text-red-100 sm:text-xl border-l-4 border-yellow-400 pl-4">
              Access the most advanced Pokémon database ever created. Track your journey from Pallet Town to the Hall of Fame.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button to="/about" variant="primary" className="h-14 px-10 text-sm shadow-[6px_6px_0px_0px_rgba(59,76,202,1)]">
                SEE TRAINER ID
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Network Online</span>
              </div>
            </div>
          </div>

          {/* High-Tech Scanner Frame with Pikachu */}
          <div className="relative group mx-auto w-full max-w-md">
            <div className="relative aspect-square rounded-3xl border-[12px] border-zinc-900 bg-zinc-800 p-4 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)] transition-transform group-hover:rotate-1">
              <div className="relative h-full w-full overflow-hidden rounded-xl border-4 border-zinc-700 bg-[#3b4cca]">
                 <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
                 
                 <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-800 p-8">
                    <div className="relative h-48 w-48 rounded-full bg-white/10 border-4 border-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
                      <div className="absolute h-40 w-40 rounded-full border-4 border-dashed border-yellow-400/50 animate-[spin_20s_linear_infinite]" />
                      <img 
                        src={pikachuImg} 
                        alt="Partner Pikachu" 
                        className="relative z-10 w-32 h-32 object-contain animate-bounce [animation-duration:3s]" 
                        style={{ imageRendering: 'pixelated' }}
                      />
                      <span className="absolute bottom-2 text-white font-black italic text-[10px] tracking-widest drop-shadow-md">PIKACHU</span>
                    </div>
                    <div className="mt-6 w-full space-y-2 opacity-80">
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden"><div className="h-full w-[80%] bg-yellow-400" /></div>
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden"><div className="h-full w-[40%] bg-blue-300" /></div>
                    </div>
                 </div>
              </div>
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 space-y-2">
                <div className="h-4 w-4 rounded-full bg-zinc-900" />
                <div className="h-4 w-4 rounded-full bg-zinc-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="mx-auto -mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Gym Badges', val: '08', color: 'bg-blue-500', icon: '📛' },
            { label: 'Pokédex Entry', val: '151', color: 'bg-yellow-500', icon: '📖' },
            { label: 'Elite Four Wins', val: '04', color: 'bg-red-500', icon: '🏆' },
            { label: 'Rare Candies', val: '12', color: 'bg-green-500', icon: '🍬' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border-4 border-zinc-900 bg-white p-5 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-y-1">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-zinc-900 ${stat.color} text-2xl shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-black text-zinc-900 leading-none">{stat.val}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Starter Selection */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-black text-zinc-900 uppercase italic tracking-tighter">Starter Research Lab</h2>
          <div className="mt-2 h-1.5 w-24 rounded-full bg-[#ff1c1c]"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { 
              name: 'Charmander', 
              no: '004', 
              type: 'Fire', 
              bg: 'bg-orange-50', 
              image: charmanderImg,
              grad: 'from-orange-400 to-red-500',
              desc: 'The fire on the tip of its tail is a measure of its life force. If healthy, its tail burns intensely.'
            },
            { 
              name: 'Squirtle', 
              no: '007', 
              type: 'Water', 
              bg: 'bg-blue-50', 
              image: squirtleImg,
              grad: 'from-blue-400 to-blue-600',
              desc: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'
            },
            { 
              name: 'Bulbasaur', 
              no: '001', 
              type: 'Grass', 
              bg: 'bg-green-50', 
              image: bulbasaurImg,
              grad: 'from-green-400 to-green-600',
              desc: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.'
            }
          ].map((poke, i) => (
            <article key={i} className={`group relative rounded-[2.5rem] border-4 border-zinc-900 ${poke.bg} p-2 shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] transition-all hover:scale-[1.02]`}>
              <div className="rounded-[2rem] p-5">
                <div className={`relative flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-b ${poke.grad} border-4 border-zinc-900 shadow-inner overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_4px)]" />
                  <img 
                    src={poke.image} 
                    alt={poke.name} 
                    className="relative z-10 w-28 h-28 object-contain transition-transform group-hover:scale-110" 
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>

                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">NO. {poke.no}</span>
                    <h3 className="text-2xl font-black text-zinc-900 italic uppercase leading-none">{poke.name}</h3>
                  </div>
                  <span className={`rounded-lg border-2 border-zinc-900 bg-white px-2 py-1 text-[9px] font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                    {poke.type}
                  </span>
                </div>

                <p className="mt-4 text-sm font-bold leading-relaxed text-zinc-600">
                  {poke.desc}
                </p>

                <Button className={`mt-8 w-full border-zinc-900 border-b-4 font-black rounded-xl italic transition-all active:border-b-0 active:translate-y-1`}>
                  OPEN DATA LOG
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-2xl border-4 border-dashed border-zinc-400 p-8 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
             End of Current Database // Update via PokeSocial Terminal
           </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const PokemonPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [navigating, setNavigating] = useState(false); 

  const MAX_POKEMON_ID = 1025; 

  const getTypeStyles = (type) => {
    const styles = {
      fire: { bg: 'bg-orange-50', grad: 'from-orange-400 to-red-500', accent: 'bg-orange-400' },
      water: { bg: 'bg-blue-50', grad: 'from-blue-400 to-blue-600', accent: 'bg-blue-500' },
      grass: { bg: 'bg-green-50', grad: 'from-green-400 to-green-600', accent: 'bg-green-500' },
      electric: { bg: 'bg-yellow-50', grad: 'from-yellow-400 to-amber-500', accent: 'bg-yellow-400' },
      bug: { bg: 'bg-lime-50', grad: 'from-lime-400 to-lime-600', accent: 'bg-lime-500' },
      normal: { bg: 'bg-zinc-100', grad: 'from-zinc-300 to-zinc-400', accent: 'bg-zinc-400' },
      poison: { bg: 'bg-purple-50', grad: 'from-purple-400 to-purple-600', accent: 'bg-purple-500' },
      ground: { bg: 'bg-amber-50', grad: 'from-amber-600 to-amber-800', accent: 'bg-amber-600' },
      fairy: { bg: 'bg-pink-50', grad: 'from-pink-300 to-pink-500', accent: 'bg-pink-400' },
      psychic: { bg: 'bg-rose-50', grad: 'from-rose-400 to-pink-600', accent: 'bg-rose-500' },
      fighting: { bg: 'bg-red-50', grad: 'from-red-600 to-red-800', accent: 'bg-red-500' },
      rock: { bg: 'bg-stone-100', grad: 'from-stone-500 to-stone-700', accent: 'bg-stone-500' },
      ghost: { bg: 'bg-indigo-50', grad: 'from-indigo-500 to-purple-800', accent: 'bg-indigo-500' },
      ice: { bg: 'bg-cyan-50', grad: 'from-cyan-300 to-cyan-500', accent: 'bg-cyan-400' },
      dragon: { bg: 'bg-violet-50', grad: 'from-violet-500 to-indigo-700', accent: 'bg-violet-500' },
    };
    return styles[type?.toLowerCase()] || { bg: 'bg-zinc-50', grad: 'from-zinc-400 to-zinc-600', accent: 'bg-zinc-500' };
  };

  useEffect(() => {
    const fetchFullPokemonData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        if (!res.ok) throw new Error("Target matrix unresolvable");
        
        const detailData = await res.json();
        setPokemon(detailData);

        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${detailData.species.name}`);
        if (!speciesRes.ok) throw new Error("Species node unresolvable");
        
        const speciesData = await speciesRes.json();
        setSpecies(speciesData);
      } catch (err) {
        console.error("Failed target index query execution:", err);
        setPokemon(null);
        setSpecies(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFullPokemonData();
  }, [name]);

  const handleNavigation = async (direction) => {
    if (!pokemon || !species || navigating) return;
    let targetId = species.id;

    if (direction === 'prev') {
      targetId = targetId - 1;
      if (targetId < 1) targetId = MAX_POKEMON_ID;
    } else if (direction === 'next') {
      targetId = targetId + 1;
      if (targetId > MAX_POKEMON_ID) targetId = 1;
    }

    try {
      setNavigating(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${targetId}`);
      if (res.ok) {
        const targetData = await res.json();
        navigate(`/pokedex/${targetData.name}`);
      }
    } catch (err) {
      console.error("Failed to map navigation target name:", err);
    } finally {
      setNavigating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#18181b] font-sans relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="h-20 w-20 animate-spin rounded-full border-8 border-zinc-700 border-t-[#ff1c1c] shadow-[0_0_20px_rgba(255,28,28,0.4)]"></div>
        <p className="mt-6 text-xs font-black uppercase tracking-[0.4em] text-zinc-400 animate-pulse">Scanning Field Target Vector...</p>
      </div>
    );
  }

  if (!pokemon || !species) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center font-sans h-screen bg-[#18181b] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-black uppercase text-white tracking-widest border-4 border-zinc-950 bg-zinc-900 p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Target Signature Missing</h2>
        <Link to="/pokedex" className="mt-6 inline-block font-black text-xs uppercase tracking-widest bg-white border-4 border-zinc-950 text-zinc-950 px-6 py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100">
          Return to Dex Matrix
        </Link>
      </div>
    );
  }

  const primaryType = pokemon.types[0]?.type?.name || 'normal';
  const design = getTypeStyles(primaryType);

  const englishLog = species.flavor_text_entries?.find(entry => entry.language.name === 'en');
  const cleanDesc = englishLog ? englishLog.flavor_text.replace(/[\n\f]/g, ' ') : 'No data entry registered.';

  const categoryLog = species.genera?.find(g => g.language.name === 'en');
  const category = categoryLog ? categoryLog.genus : 'Unknown Species';

  const femalePercentage = species.gender_rate === -1 ? null : (species.gender_rate / 8) * 100;
  const malePercentage = femalePercentage !== null ? 100 - femalePercentage : null;

  // Calculates primary image setups and fallback references for base forms directly inside the component lifecycle
  const coreAnimatedImage = pokemon.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default;
  const primaryFallbackImage = pokemon.sprites.front_default;
  const originalSpeciesFallback = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.id}.png`;

  return (
    <div className="flex w-full flex-col gap-6 bg-[#18181b] min-h-screen pb-20 font-sans selection:bg-[#ff1c1c] selection:text-white relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#ff1c1c]/5 to-transparent pointer-events-none" />

      {/* Navigation Matrix Panel */}
      <div className="p-4 max-w-5xl mx-auto w-full mt-6 z-10 flex flex-wrap gap-4 items-center justify-between">
        <Link 
          to="/pokedex" 
          className="inline-flex items-center gap-2 border-4 border-zinc-950 bg-white text-zinc-950 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <span>⬅️</span> RotomDex Index
        </Link>

        <div className="flex gap-3">
          <button 
            onClick={() => handleNavigation('prev')}
            disabled={navigating}
            className="inline-flex items-center gap-2 border-4 border-zinc-950 bg-zinc-800 text-white hover:bg-zinc-700 disabled:opacity-50 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            ◀ PREV
          </button>
          <button 
            onClick={() => handleNavigation('next')}
            disabled={navigating}
            className="inline-flex items-center gap-2 border-4 border-zinc-950 bg-zinc-800 text-white hover:bg-zinc-700 disabled:opacity-50 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            NEXT ▶
          </button>
        </div>
      </div>

      <main className="mx-auto w-full max-w-5xl px-4 grid gap-8 md:grid-cols-2 items-start z-10">
        {/* Left Card */}
        <div className={`border-4 border-zinc-950 ${design.bg} rounded-[2.5rem] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center relative overflow-hidden transition-all`}>
          <div className="w-full flex justify-between items-center px-2">
            <span className="text-xs font-black text-zinc-500 tracking-widest">ID / NO. {String(species.id).padStart(4, '0')}</span>
            <span className="rounded-lg border-2 border-zinc-950 bg-white px-2.5 py-0.5 text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-zinc-950">
              {category}
            </span>
          </div>

          <div className={`w-full aspect-video bg-gradient-to-b ${design.grad} rounded-3xl border-4 border-zinc-950 flex items-center justify-center relative mt-4 shadow-inner overflow-hidden`}>
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
            <img 
              src={coreAnimatedImage || primaryFallbackImage || originalSpeciesFallback} 
              alt={pokemon.name}
              className="w-36 h-36 object-contain z-10 animate-bounce [animation-duration:5s]"
              onError={(e) => {
                // If animated asset crashes, apply special variant static image. If that fails, show standard original asset.
                if (e.target.src === coreAnimatedImage && primaryFallbackImage) {
                  e.target.src = primaryFallbackImage;
                } else if (e.target.src !== originalSpeciesFallback) {
                  e.target.src = originalSpeciesFallback;
                }
              }}
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          <p className="text-4xl font-black uppercase tracking-tighter text-zinc-950 mt-5 w-full text-left border-b-4 border-zinc-950 pb-1">
            {pokemon.name}
          </p>
          
          <p className="mt-4 text-sm font-bold leading-relaxed text-zinc-700 bg-white/60 p-4 rounded-2xl border-2 border-zinc-950/10 shadow-sm w-full">
            {cleanDesc}
          </p>

          <div className="flex gap-3 mt-5 w-full justify-start">
            {pokemon.types.map((t) => {
              const typeStyles = getTypeStyles(t.type.name);
              return (
                <span key={t.type.name} className={`px-4 py-1.5 text-xs font-black uppercase border-4 border-zinc-950 ${typeStyles.accent} text-zinc-950 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  {t.type.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right Card */}
        <div className="border-4 border-zinc-950 bg-zinc-900 text-white rounded-[2.5rem] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-xs font-black tracking-widest text-zinc-400 uppercase border-b-2 border-zinc-700 pb-2">Core Metrics</h3>
            
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="bg-zinc-950 border-2 border-zinc-800 p-3 rounded-2xl shadow-inner">
                <span className="text-[9px] font-black uppercase text-zinc-500 block tracking-wider">Physical Height</span>
                <span className="text-xl font-black text-yellow-400">{pokemon.height / 10} M</span>
              </div>
              <div className="bg-zinc-950 border-2 border-zinc-800 p-3 rounded-2xl shadow-inner">
                <span className="text-[9px] font-black uppercase text-zinc-500 block tracking-wider">Mass Metric</span>
                <span className="text-xl font-black text-emerald-400">{pokemon.weight / 10} KG</span>
              </div>
            </div>

            <div className="bg-zinc-950 border-2 border-zinc-800 p-4 rounded-2xl mb-6 space-y-2">
              <span className="text-[9px] font-black uppercase text-zinc-500 block tracking-wider">Gender Verification Profiles</span>
              {femalePercentage === null ? (
                <span className="text-sm font-black text-zinc-400 italic uppercase">Genderless Signal Lock</span>
              ) : (
                <div className="flex gap-4 text-sm font-black">
                  <div className="flex items-center gap-1.5 text-blue-400">
                    <span>♂</span> <span>{malePercentage}%</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-pink-400">
                    <span>♀</span> <span>{femalePercentage}%</span>
                  </div>
                </div>
              )}
            </div>

            <h3 className="text-xs font-black tracking-widest text-zinc-400 uppercase mb-3">Ability Modulators</h3>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {pokemon.abilities.map((a) => (
                <div 
                  key={a.ability.name} 
                  className={`px-3 py-1.5 rounded-xl border-2 text-xs font-black uppercase tracking-wide flex items-center gap-2 ${
                    a.is_hidden 
                      ? 'bg-purple-950/40 border-purple-500/50 text-purple-300' 
                      : 'bg-zinc-950 border-zinc-800 text-yellow-400'
                  }`}
                >
                  <span>{a.ability.name.replace('-', ' ')}</span>
                  {a.is_hidden && (
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-purple-500 text-zinc-950 font-extrabold tracking-tighter">
                      HIDDEN
                    </span>
                  )}
                </div>
              ))}
            </div>

            <h3 className="text-xs font-black tracking-widest text-zinc-400 uppercase mb-3">Performance Data Pools</h3>
            <div className="space-y-3.5">
              {pokemon.stats.map((s) => (
                <div key={s.stat.name} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-wider">
                    <span className="text-zinc-400">{s.stat.name.replace('-', ' ')}</span>
                    <span className="text-yellow-400 text-xs">{s.base_stat}</span>
                  </div>
                  <div className="h-3 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800 p-0.5 shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 to-yellow-400 rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${Math.min((s.base_stat / 160) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-[9px] font-black tracking-widest text-zinc-500 uppercase">
            <span>Rotom-Dex OS v8.0.2</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PokemonPage;
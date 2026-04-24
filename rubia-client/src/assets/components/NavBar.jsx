import { NavLink } from 'react-router-dom';

const links = [
  { label: 'PokeDex', to: '/' },
  { label: 'Trainer ID', to: '/about' },
  { label: 'PokeSocial', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'relative flex items-center justify-center rounded-lg px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] transition-all italic border-2 overflow-hidden',
    isActive
      ? 'bg-zinc-900 text-yellow-400 border-yellow-400 shadow-[inset_0px_0px_8px_rgba(250,204,21,0.4)]'
      : 'text-zinc-500 border-zinc-200 bg-zinc-50 hover:bg-white hover:text-[#3b4cca] hover:border-[#3b4cca]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[6px] border-zinc-900 bg-[#f3f4f6]">
      {/* Upper Hardware Strip: The "Status LEDs" */}
      <div className="flex h-6 w-full items-center gap-3 bg-[#cc0000] px-6 border-b-2 border-black/20">
        <div className="h-3 w-3 rounded-full border-2 border-white bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-pulse"></div>
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#ff1c1c] border border-black/20"></div>
          <div className="h-2 w-2 rounded-full bg-[#ffcb05] border border-black/20"></div>
          <div className="h-2 w-2 rounded-full bg-[#4dad5b] border border-black/20"></div>
        </div>
        <div className="ml-auto flex gap-4">
            <div className="h-1 w-12 rounded-full bg-black/20"></div>
        </div>
      </div>
      
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo: The Scanner Unit */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-zinc-900 bg-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] group-hover:rotate-12 transition-transform">
            <div className="h-8 w-8 rounded-full border-2 border-blue-300 bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center overflow-hidden">
                {/* Refraction Shine */}
                <div className="absolute top-1 left-2 h-4 w-4 rounded-full bg-white/30 blur-[1px]"></div>
                <div className="h-full w-1 bg-white/10 rotate-45"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.3em] leading-none">Scanning...</span>
            <p className="text-xl font-black uppercase italic tracking-tighter text-zinc-900">
              ROTOM<span className="text-[#ff1c1c]">PC</span>
            </p>
          </div>
        </NavLink>

        {/* Navigation: The "Selection Screen" */}
        <nav className="flex items-center gap-3 bg-zinc-200/50 p-1.5 rounded-xl border-2 border-zinc-900/5 shadow-inner">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {/* Little active indicator dot */}
              <span className="mr-2 hidden h-1.5 w-1.5 rounded-full bg-yellow-400 group-[.active]:block shadow-[0_0_4px_#facc15]"></span>
              {link.label}
              
              {/* Scanline overlay for active link */}
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.5)_50%)] bg-[length:100%_2px]"></div>
            </NavLink>
          ))}
        </nav>
      </div>

    </header>
  );
};

export default NavBar;
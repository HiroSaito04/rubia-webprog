import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    /* The <footer> tag spans the full width and handles the hardware-style border */
    <footer className="mt-auto w-full border-t-[6px] border-zinc-900 bg-[#f3f4f6]">
      
      {/* CENTRAL CONTENT BLOCK: 
          'max-w-7xl' and 'mx-auto' keep the text aligned with your 
          NavBar logo and links, even on ultra-wide monitors.
      */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Brand/System Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-zinc-900"></div>
              <span className="text-xl font-black uppercase italic tracking-tighter text-zinc-900">
                ROTOM<span className="text-[#ff1c1c]">PC</span>
              </span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Developed by Mike A. Rubia
            </p>
          </div>
          
          {/* Team Recognition */}
          <div className="flex flex-col gap-1">
             <p className="text-sm font-black uppercase italic text-zinc-700">Rotom Computer System </p>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 opacity-40">
              v3.0.4
            </h4>
           </div>

          {/* Hardware Serial / Utility */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="rounded border-2 border-zinc-300 bg-zinc-200 px-3 py-1 text-[9px] font-mono font-bold text-zinc-500 shadow-inner">
              S/N: 8008-5110-2026-MP
            </div>
            <p className="text-[9px] font-black uppercase text-zinc-400">
              © 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* RED HARDWARE STRIP: 
          This is full-width (w-full) by default to match the top bar LEDs.
      */}
      <div className="flex h-8 w-full items-center justify-between bg-[#cc0000] px-6 border-t-2 border-black/20">
        <div className="flex gap-4">
          <div className="h-2 w-16 rounded-full bg-black/20"></div>
          <div className="h-2 w-8 rounded-full bg-black/10"></div>
        </div>
        
        <div className="flex items-center gap-3">
           <span className="text-[8px] font-black text-white/50 uppercase tracking-widest">
             System Stable
           </span>
           <div className="h-2 w-2 rounded-full bg-[#4dad5b] shadow-[0_0_8px_#4dad5b]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="bg-canvas-white/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-surface-variant transition-all duration-300"
    >
      <div className="flex justify-between items-center max-w-[1400px] mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-roast-red rounded-xl flex items-center justify-center font-display-lg text-xl shadow-lg shadow-roast-red/20 text-white">M</div>
          <div>
            <h1 className="text-lg font-display-lg leading-none tracking-wide text-bean-charcoal mt-1">MORE COFFEE</h1>
            <p className="text-xs text-secondary font-label-caps tracking-widest leading-none">ROASTERS</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 bg-crema-white border border-surface-variant rounded-full py-1.5 px-6 shadow-[var(--shadow-soft)]">
          <a className="text-[10px] font-label-caps text-bean-charcoal hover:text-roast-red transition-colors uppercase tracking-widest" href="#home">Home</a>
          <a className="text-[10px] font-label-caps text-secondary hover:text-roast-red transition-colors uppercase tracking-widest" href="#about">Roastery</a>
          <a className="text-[10px] font-label-caps text-secondary hover:text-roast-red transition-colors uppercase tracking-widest" href="#menu">Menu</a>
          <a className="text-[10px] font-label-caps text-secondary hover:text-roast-red transition-colors uppercase tracking-widest" href="#locations">Locations</a>
        </div>
        
        <div className="hidden md:block">
          <button className="bg-roast-red text-white font-label-caps uppercase tracking-widest px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-[0_0_12px_rgba(230,57,70,0.3)]">
            Pesan Sekarang
          </button>
        </div>
        
        <button className="md:hidden text-bean-charcoal">
          <Menu size={32} />
        </button>
      </div>
    </motion.nav>
  );
}

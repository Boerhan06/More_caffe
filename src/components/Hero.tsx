import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-crema-white border border-surface-variant rounded-[var(--radius-xl)] relative overflow-hidden flex flex-col justify-center min-h-[60vh] group p-8 md:p-12 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300" id="home">
      <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-canvas-white/90 via-canvas-white/50 to-transparent z-10"></div>
        <img 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uiitBPOH1U8VMUopL5QhIHRDiyufs6h4CMEE2gDKDNvpEsrICc_P54YpD-M4k4hvt8dLfEHxNHThuWj8la54T1lPhH_1oNnauaSXbKAWRgGKg7w-sZxDrEhwtWcJ8Kbv2wL_HtXOzjGqtEyD3KBKLoXwxoXe2a0fMgwfAPcB43sRbONO3SzP_yAeKolKN2--zbHBNtzhgP0jMiRs5hRYMRJj7m2NK7Q8YxIT7AWYTTD_yf1GNY1uhJKTSeBpXBfTwFsJ-r90qrPFS8" 
        />
      </div>
      
      <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl md:text-9xl font-display-lg italic select-none z-0 text-bean-charcoal">
        EXP
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        className="relative z-10 w-full"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.4 }}
          className="px-4 py-1.5 bg-roast-red/10 text-roast-red border border-roast-red/20 rounded-full font-label-caps uppercase tracking-widest inline-block mb-6"
        >
          Premium Quality
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
          className="text-5xl md:text-7xl font-display-lg leading-tight mb-4 text-bean-charcoal"
        >
          #GETTHEMORE <br className="hidden md:block"/>EXPERIENCE
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-secondary mb-8 max-w-md font-label-caps uppercase text-sm"
        >
          CRAFTED WITH PASSION, ROASTED WITH PURPOSE
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-full sm:w-auto bg-roast-red text-white font-label-caps uppercase px-8 py-3.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(230,57,70,0.3)] cursor-pointer"
          >
            Pesan Sekarang
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "var(--color-bean-charcoal)", color: "var(--color-canvas-white)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-full sm:w-auto bg-transparent border-2 border-bean-charcoal text-bean-charcoal font-label-caps uppercase px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lihat Cabang Kami
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="text-secondary hover:text-roast-red transition-colors w-8 h-8" />
      </motion.div>
    </section>
  );
}

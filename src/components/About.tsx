import { motion } from 'motion/react';
import { Coffee, CupSoda, Package } from 'lucide-react';

export default function About() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-4" id="about">
      {/* 2x2 Bento Card for Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -6, scale: 1.005 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="lg:col-span-2 bg-crema-white border border-surface-variant rounded-[var(--radius-xl)] p-8 flex flex-col justify-between group shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] cursor-pointer"
      >
        <div>
          <h2 className="text-4xl lg:text-5xl font-display-lg text-bean-charcoal mb-2 leading-none">MORE COFFEE <br />ROASTERS</h2>
          <span className="font-label-caps text-secondary uppercase tracking-widest">Part of: @kopimo.re</span>
        </div>
        
        <div className="pl-4 border-l-2 border-roast-red mt-8 mb-8">
          <p className="font-body-lg text-secondary leading-relaxed">
            Bukan sekadar tempat nongkrong — kami adalah roastery. Menyediakan Roast Beans premium untuk Coffee Shop dan Home Brewers di seluruh Indonesia.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="px-4 py-1.5 bg-surface-container text-bean-charcoal border border-surface-variant rounded-full font-label-caps uppercase tracking-widest flex items-center gap-1.5">
            <Coffee className="w-3 h-3 text-roast-red" />
            Specialty Roastery
          </span>
          <span className="px-4 py-1.5 bg-surface-container text-bean-charcoal border border-surface-variant rounded-full font-label-caps uppercase tracking-widest flex items-center gap-1.5">
            <CupSoda className="w-3 h-3 text-roast-red" />
            Café Experience
          </span>
          <span className="px-4 py-1.5 bg-roast-red/10 text-roast-red border border-roast-red/20 rounded-full font-label-caps uppercase tracking-widest flex items-center gap-1.5">
            <Package className="w-3 h-3" />
            Wholesale Beans
          </span>
        </div>
      </motion.div>
      
      {/* 2x2 Bento Card for Image */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -6, scale: 1.005 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
        className="lg:col-span-2 bg-crema-white border border-surface-variant rounded-[var(--radius-xl)] overflow-hidden relative min-h-[300px] flex flex-col justify-end p-6 group shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] cursor-pointer"
      >
        <div className="absolute inset-0 bg-roast-red/10 rounded-xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
        <img 
          alt="Roasting Process" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr0zLcym_PkVElTCjIr-FcinEYZh3q6ijscQ9p5owGg4fyjfNOxYF0ntvb9uECqTBWYCJ8YwKFkPFWOaYUyHJ30eQm-NEGNEFCsyVFlIAw-Iq_ofBs76KqMJn6D2QfKOK678-g2q1wsjgg-JgefdTO1dlAFcGlw2YEqO89MqksEzAuHTiteINtr1GFTOo13Lg7WlVlMlzyLNyuKXKIXic7ZDnEg1ZCTQQ4Llwhr7MqPZSTfc04gA_tIIPBCYxlEaGk8NneWd8_-6TD" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bean-charcoal/80 via-transparent to-transparent opacity-90 z-0"></div>
        
        <div className="relative z-10 mt-auto bg-crema-white/95 backdrop-blur-md p-4 rounded-xl border border-white/50 self-start shadow-sm">
           <h3 className="font-label-caps uppercase text-roast-red flex items-center gap-2">
             <span className="w-1.5 h-1.5 bg-roast-red rounded-full animate-pulse"></span>
             Live Process
           </h3>
           <p className="font-headline-sm text-bean-charcoal mt-1">Our roasting perfection</p>
        </div>
      </motion.div>
    </section>
  );
}

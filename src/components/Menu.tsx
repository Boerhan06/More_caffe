import { motion } from 'motion/react';
import { MENU_ITEMS } from '../data';

export default function Menu() {
  return (
    <section id="menu" className="pt-2">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="font-headline-md text-bean-charcoal">Signature Menu</h2>
        <div className="w-8 h-8 lg:w-10 lg:h-10 border border-surface-variant rounded-full flex items-center justify-center text-bean-charcoal hover:bg-surface-container hover:text-roast-red transition-colors cursor-pointer">+</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MENU_ITEMS.map((item, index) => {
          const isHero = index === 0;

          return (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className={`bg-crema-white border border-surface-variant rounded-[var(--radius-xl)] overflow-hidden flex flex-col group relative shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] cursor-pointer ${isHero ? 'lg:col-span-2 lg:row-span-2 min-h-[350px]' : ''}`}
            >
              {isHero ? (
                <>
                  <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                    <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-bean-charcoal/90 via-bean-charcoal/30 to-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-end h-full relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-roast-red text-white rounded-full font-label-caps uppercase tracking-widest shadow-sm">
                        {item.price || 'Special'}
                      </span>
                    </div>
                    <h3 className="font-display-lg text-4xl lg:text-5xl text-white mb-2 leading-none">{item.title}</h3>
                    <p className="font-body-md text-canvas-white/80 mb-6 max-w-sm">{item.description}</p>
                    
                    {item.roastLevel && (
                      <div className="mt-auto bg-crema-white/95 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm">
                        <div className="flex justify-between items-end mb-2">
                          <span className="font-label-caps text-secondary uppercase tracking-widest">Roast Level</span>
                        </div>
                        <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden">
                          <div className={`h-full bg-roast-red ${item.roastLevel} rounded-full`}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="h-40 w-full overflow-hidden transition-opacity duration-300">
                    <img alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={item.image} />
                  </div>
                  <div className="p-6 flex-1 flex flex-col relative bg-crema-white z-10">
                    <div className="flex justify-between items-start mb-3">
                       <span className="font-label-caps px-2 py-0.5 bg-surface-variant text-bean-charcoal rounded uppercase tracking-widest">
                        {item.price || 'Special'}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-bean-charcoal mb-2">{item.title}</h3>
                    <p className="font-body-md text-secondary text-sm mb-4 line-clamp-2">{item.description}</p>
                    {item.roastLevel && (
                      <div className="mt-auto">
                        <div className="h-1 bg-surface-variant rounded-full overflow-hidden">
                          <div className={`h-full bg-roast-red opacity-80 ${item.roastLevel} rounded-full`}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

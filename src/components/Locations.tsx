import { motion } from 'motion/react';
import { MapPin, Wifi, Car, Sun, DoorOpen, Camera } from 'lucide-react';
import { LOCATIONS } from '../data';

export default function Locations() {
  const getFeatureIcon = (feature: string) => {
    switch(feature) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      case 'outdoor': return <Sun className="w-4 h-4" />;
      case 'vip': return <DoorOpen className="w-4 h-4" />;
      case 'photo': return <Camera className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section id="locations" className="pt-2">
      <div className="flex justify-between items-center mb-6 mt-16 px-2">
        <h2 className="font-headline-md text-bean-charcoal">Our Sanctuaries</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {LOCATIONS.map((location, index) => (
          <motion.div 
            key={location.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="bg-crema-white border border-surface-variant rounded-[var(--radius-xl)] p-6 flex flex-col md:flex-row gap-6 items-center overflow-hidden group shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] cursor-pointer"
          >
            <div className="w-full md:w-1/3 h-48 md:h-full rounded-[var(--radius-xl)] overflow-hidden relative">
              <img 
                alt={location.name} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                src={location.image} 
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-between w-full h-full">
              <div>
                <div className="flex justify-between items-start mb-2">
                   <h3 className="font-display-lg text-3xl text-bean-charcoal leading-none">{location.name}</h3>
                   <div className="px-2 py-1 bg-surface-container text-bean-charcoal border border-surface-variant rounded font-label-caps uppercase tracking-widest flex items-center gap-1.5 mt-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-roast-red animate-pulse"></span>
                     {location.status}
                   </div>
                </div>
                
                <p className="font-body-md text-secondary mt-1 flex items-center gap-1.5">
                  <MapPin className="text-roast-red w-4 h-4 flex-shrink-0" />
                  {location.address}
                </p>
              </div>
              
              <div className="mt-8 flex flex-col">
                <h4 className="font-label-caps text-secondary uppercase mb-3 tracking-widest">Amenities</h4>
                <div className="flex gap-2">
                  {location.features.map(feature => (
                    <div 
                      key={feature}
                      className="w-10 h-10 bg-canvas-white border border-surface-variant rounded-xl flex items-center justify-center text-secondary hover:bg-surface-container hover:text-roast-red transition-colors shadow-sm" 
                      title={feature.charAt(0).toUpperCase() + feature.slice(1)}
                    >
                      {getFeatureIcon(feature)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-crema-white border border-surface-variant rounded-[var(--radius-xl)] p-8 flex flex-col mt-16 shadow-[var(--shadow-soft)]">
      <div className="flex flex-col md:flex-row justify-between mb-8 pb-8 border-b border-surface-variant gap-8">
         <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-roast-red rounded-xl flex items-center justify-center font-display-lg text-white shadow-lg shadow-roast-red/20">M</div>
              <h4 className="font-display-lg text-xl leading-none text-bean-charcoal pt-1">MORE COFFEE</h4>
            </div>
            <p className="font-body-md text-secondary">Crafted with passion.<br/>Roasted with purpose.</p>
         </div>
         <div className="flex flex-wrap gap-12">
            <div className="flex flex-col">
              <span className="font-label-caps text-secondary uppercase tracking-widest mb-4">Explore</span>
              <div className="space-y-3 pl-3 border-l-2 border-surface-variant flex flex-col">
                 <a href="#" className="font-body-md text-bean-charcoal hover:text-roast-red transition-colors">Brewing Guides</a>
                 <a href="#" className="font-body-md text-bean-charcoal hover:text-roast-red transition-colors">Sustainability</a>
                 <a href="#" className="font-body-md text-bean-charcoal hover:text-roast-red transition-colors">Careers</a>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-secondary uppercase tracking-widest mb-4">Business</span>
              <div className="space-y-3 pl-3 border-l-2 border-roast-red/50 flex flex-col">
                 <a href="#" className="font-body-md text-bean-charcoal hover:text-roast-red transition-colors">Wholesale</a>
                 <a href="#" className="font-body-md text-bean-charcoal hover:text-roast-red transition-colors">Contact</a>
              </div>
            </div>
         </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center font-label-caps text-secondary uppercase tracking-widest gap-4">
        <div className="flex gap-6 items-center">
          <span>© 2024 MORE COFFEE ROASTERS</span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-roast-red rounded-full animate-pulse"></div> System Status: Optimal</span>
          <span className="text-secondary hidden sm:inline">Indonesia (GMT+7)</span>
        </div>
      </div>
    </footer>
  );
}

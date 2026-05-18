import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Locations from './components/Locations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas-white flex flex-col font-body-md text-bean-charcoal">
      <Navigation />
      <main className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6 pt-32 md:pt-36 max-w-[1400px] mx-auto w-full">
        <Hero />
        <About />
        <Menu />
        <Locations />
      </main>
      <div className="p-4 md:p-6 pt-0 max-w-[1400px] mx-auto w-full">
        <Footer />
      </div>
    </div>
  );
}

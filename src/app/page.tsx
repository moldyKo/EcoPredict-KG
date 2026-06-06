import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Prediction from './components/Prediction';
import AnalyticsChart from './components/AnalyticsChart';
import AIExplanation from './components/AIExplanation';
import CityMap from './components/CityMap';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 antialiased overflow-x-hidden">
      <Hero />
      <Dashboard />
      <Prediction />
      <AnalyticsChart />
      <AIExplanation />
      <CityMap />
      <About />
      <Footer />
    </main>
  );
}

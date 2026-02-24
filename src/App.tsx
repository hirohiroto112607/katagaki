import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MembersSection from './components/sections/MembersSection';
import ContributeSection from './components/sections/ContributeSection';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MembersSection />
        <ContributeSection />
      </main>
      <Footer />
    </div>
  );
}

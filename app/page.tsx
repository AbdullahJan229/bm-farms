import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import DivisionsOverview from '@/components/DivisionsOverview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Stats />
      <DivisionsOverview />
      <Footer />
    </main>
  );
}
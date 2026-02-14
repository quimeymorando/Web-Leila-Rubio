import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Authority from "@/components/sections/Authority";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Offer from "@/components/sections/Offer";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-violet-50/20 font-sans text-slate-900 selection:bg-violet-200 selection:text-violet-900">
      <Hero />
      <Problem />
      <Solution />
      <Authority />
      <Services />
      <Testimonials />
      <Offer />
      <FAQ />
      <Footer />
    </main>
  );
}

import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/Services";
import { AboutSection } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

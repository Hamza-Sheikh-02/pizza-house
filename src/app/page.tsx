import React from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/AboutSection";

const Home: React.FC = () => {
  return (
    <div>
      <main className="pt-5">
        <HeroSection />
      </main>
      <main className="pt-5">
        <About />
      </main>
    </div>
  );
};

export default Home;

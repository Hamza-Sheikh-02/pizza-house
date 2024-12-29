import React from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/AboutSection";
import FoodCategory from "@/components/FoodCategory";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <main className="pt-[5px]">
        <HeroSection />
      </main>
      <main className="pt-[5px]">
        <About />
      </main>
      <main className="pt-[5px]">
        <FoodCategory />
      </main>
      <main className="pt-[5px]">
        <WhyChooseUs />
      </main>
      <main className="pt-[5px]">
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;

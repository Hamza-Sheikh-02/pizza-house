import React from "react";
import AboutUs from "@/components/AboutComps/Aboutus";
import TeamMembers from "@/components/AboutComps/TeamMembers";

const About: React.FC = () => {
  return (
    <div>
      <main className="pt-[5px]">
        <AboutUs />
      </main>
      <main className="pt-[5px]">
        <TeamMembers />
      </main>
    </div>
  );
};

export default About;

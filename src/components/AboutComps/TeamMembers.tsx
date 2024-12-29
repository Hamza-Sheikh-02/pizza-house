import Image from "next/image";
import teamMembers from "@/data/teamMembers";

export default function TeamMembers() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-black text-foreground">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-primary font-medium text-lg mb-2">Our Team</h3>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-8">
          Meet the <span className="text-primary">Pizza</span> House Experts
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full w-36 h-36 object-cover"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

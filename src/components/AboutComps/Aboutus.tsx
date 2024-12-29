import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto grid gap-12 lg:gap-24 md:grid-cols-2 items-center">
        <div className="relative flex justify-center items-center">
          <Image
            src="/aboutus.jpg"
            alt="Delicious pizza"
            width={500}
            height={500}
            className="rounded-full z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-full"
          />
        </div>

        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="font-medium text-lg mb-2">
            About <span className="text-primary">Pizza</span> House
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            <span className="text-primary">Pizza</span> is an essential <br />
            part of happiness
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            Welcome to Pizza House, where we serve the most delicious
            hand-tossed pizzas crafted with fresh ingredients and mouthwatering
            flavors. Discover the art of perfect pizza, made just for you!
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="items-center justify-center bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-8 items-center md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-primary">The Art</span> of Perfect Pizza
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Experience the best hand-crafted pizzas made with fresh ingredients
            and authentic flavors, delivered to your doorstep.
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80">
            Order Now
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          <Image
            src="/heroSection.jpg"
            alt="Delicious pizza"
            width={500}
            height={500}
            className="rounded-full z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-full"
          />
        </div>
      </div>
    </section>
  );
}

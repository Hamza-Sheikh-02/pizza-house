import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative flex items-center justify-center bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-8 items-center md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-lg text-primary">About Us</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            We Create the Best{" "}
            <span className="text-primary">Pizza Experience</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Discover the taste of authentic, hand-crafted pizzas made with fresh
            ingredients and a passion for perfection. Our pizzas bring people
            together with every slice.
          </p>
          <ul className="text-muted-foreground space-y-2">
            <li>✔️ Freshly baked pizzas with premium ingredients.</li>
            <li>✔️ Wide variety of flavors to satisfy every craving.</li>
            <li>✔️ A commitment to quality and customer satisfaction.</li>
          </ul>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80">
           <Link href={"/about"}>Learn More</Link>
          </button>
        </div>
        <div className="relative grid gap-4">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/smokedpepperonipizza.jpg"
              alt="Smoked Pepperoni Pizza"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src="/pepperonipizza.jpg"
                alt="Pepperoni Pizza"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src="/margheritapizza.jpg"
                alt="Margherita Pizza"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

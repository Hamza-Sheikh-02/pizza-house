import Image from "next/image";
import { FaPizzaSlice, FaUtensils, FaWineGlassAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4 order-1 md:order-none">
            <div className="relative group">
              <Image
                src="/vegetarianpizza.jpg"
                alt="Vegetarian Pizza"
                width={250}
                height={250}
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
            <div className="relative group">
              <Image
                src="/picklepizza.jpg"
                alt="Pickle Pizza"
                width={250}
                height={250}
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
            <div className="relative group">
              <Image
                src="/tomatopizza.jpg"
                alt="Tomato Pizza"
                width={250}
                height={250}
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
            <div className="relative group">
              <Image
                src="/sausagepizza.jpg"
                alt="Sausage Pizza"
                width={250}
                height={250}
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center order-none md:order-1">
            <div className="mb-8">
              <p className="text-primary text-lg font-medium">Why Choose Us</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 leading-tight">
                Extraordinary Pizza <br />
                And Unmatched Flavor
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Experience the best pizza in town, made with the freshest
                ingredients and a passion for flavor. Our pizza is crafted with
                love, ensuring every bite is a taste of heaven.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-primary text-white p-4 rounded-full">
                  <FaPizzaSlice className="w-6 h-6" />
                </div>
                <p className="mt-2 text-sm text-gray-400">Breakfast</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary text-gray-400 p-4 rounded-full">
                  <FaUtensils className="w-6 h-6" />
                </div>
                <p className="mt-2 text-sm text-gray-400">Lunch</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary text-white p-4 rounded-full">
                  <FaWineGlassAlt className="w-6 h-6" />
                </div>
                <p className="mt-2 text-sm text-gray-400">Dinner</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Years of
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Pizza Expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

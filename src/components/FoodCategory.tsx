import Image from "next/image";

export default function FoodCategory() {
  return (
    <section className="bg-background text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-lg font-medium">Food Category</p>
          <h2 className="text-3xl text-gray-900 dark:text-white sm:text-4xl font-bold mt-2">
            Choose Food Item
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="relative group">
            <Image
              src="/cornpizza.jpg"
              alt="Corn Pizza"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-md shadow-md">
              Save 30%
            </div>
          </div>
          <div className="relative group">
            <Image
              src="/spicychickenburger.jpg"
              alt="Spicy Chicken Burgers"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-md shadow-md">
              Save 40%
            </div>
          </div>
          <div className="relative group">
            <Image
              src="/hawaiianshrimpsalad.jpg"
              alt="Hawaiian Shrimp Salad"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-md shadow-md">
              Save 20%
            </div>
          </div>
          <div className="relative group">
            <Image
              src="/nobakeoreodessert.jpg"
              alt="No Bake Oreo Dessert"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-md shadow-md">
              Save 35%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

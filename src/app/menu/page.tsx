"use client";

import React from "react";
import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-10">
       Our <span className="text-primary">Menu</span>
      </h1>
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-primary">Favourite</span> Flavours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-6">
              {[
                {
                  title: "Pickle Pizza",
                  description: "Tangy pickles with melted cheese",
                  price: "$12.5",
                },
                {
                  title: "Corn Pizza",
                  description: "Sweet corn, mozzarella, and herbs",
                  price: "$14.5",
                },
                {
                  title: "Margherita Pizza",
                  description: "Classic tomato, basil, and mozzarella",
                  price: "$11.5",
                },
                {
                  title: "Pepperoni Pizza",
                  description: "Loaded with spicy pepperoni",
                  price: "$15.5",
                },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="/menu-pics/favourite-flavour.jpg"
              alt="Favourite Flavours"
              width={600}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mb-12 bg-black p-12 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 md:hidden">
              <span className="text-primary">Premium</span> Flavours
            </h2>
            <Image
              src="/menu-pics/premium-flavour.jpg"
              alt="Premium Flavours"
              width={600}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 sm:hidden md:block">
              <span className="text-primary">Premium</span> Flavours
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Sausage Pizza",
                  description: "Savory sausage with melted cheese",
                  price: "$16.5",
                },
                {
                  title: "BBQ Chicken Pizza",
                  description: "Tangy BBQ sauce with grilled chicken",
                  price: "$18.5",
                },
                {
                  title: "Hawaii Chicken Pizza",
                  description: "Sweet pineapple with chicken chunks",
                  price: "$17.5",
                },
                {
                  title: "Smoked Pepperoni Pizza",
                  description: "Rich smoked pepperoni slices",
                  price: "$19.5",
                },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-primary">Delicious</span> Desserts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-6">
              {[
                {
                  title: "Chocolate Lava Cake",
                  description: "Rich chocolate cake with a molten center",
                  price: "$6.5",
                },
                {
                  title: "Tiramisu",
                  description: "Classic Italian dessert with coffee flavor",
                  price: "$7.5",
                },
                {
                  title: "Cheesecake",
                  description: "Creamy cheesecake with a graham crust",
                  price: "$5.5",
                },
                {
                  title: "Ice Cream Sundae",
                  description: "Vanilla ice cream with chocolate syrup",
                  price: "$4.5",
                },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="/menu-pics/desserts.jpg"
              alt="Delicious Desserts"
              width={600}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mb-12 bg-black p-12 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/menu-pics/drinks.jpg"
              alt="Refreshing Drinks"
              width={600}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-primary">Refreshing</span> Drinks
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Coca-Cola",
                  description: "Classic chilled soft drink",
                  price: "$2.5",
                },
                {
                  title: "Fresh Lemonade",
                  description: "Zesty lemonade made fresh",
                  price: "$3.0",
                },
                {
                  title: "Iced Tea",
                  description: "Refreshing tea served cold",
                  price: "$2.8",
                },
                {
                  title: "Mango Smoothie",
                  description: "Fresh mango blended to perfection",
                  price: "$4.0",
                },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

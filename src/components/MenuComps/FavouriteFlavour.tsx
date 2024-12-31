"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default function FavouriteFlavours() {
  const [products, setProducts] = useState<
    {
      title: string;
      slug: { current: string };
      description: string;
      price: number;
      imageUrl: string;
      category: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product" && category == "favouriteFlavour"]{
        title,
        slug,
        description,
        price,
        "imageUrl": images[0].asset->url,
        category
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="text-gray-600 dark:text-gray-200 body-font">
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          <span className="text-primary">Favourite</span> Flavours
        </h1>
        <div className="flex flex-wrap -mx-2">
          {products.map((product) => (
            <div
              key={product.slug.current}
              className="lg:w-1/4 md:w-1/2 p-2 w-full"
            >
              <a className="block relative h-40 rounded overflow-hidden">
                <Image
                  alt={product.title}
                  className="object-cover object-center w-full h-full block"
                  src={
                    product.imageUrl || "https://via.placeholder.com/420x260"
                  }
                  layout="fill"
                  objectFit="cover"
                />
              </a>
              <div className="mt-3">
                <h2 className="text-gray-900 dark:text-white title-font text-base font-medium">
                  {product.title}
                </h2>
                <p className="mt-1 text-sm">${product.price.toFixed(2)}</p>
                <Link
                  href={`/products/${product.slug.current}`}
                  className="inline-block mt-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary/80"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

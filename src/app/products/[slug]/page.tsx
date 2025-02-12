import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import PremiumFlavour from "@/components/MenuComps/PremiumFlavours";
import FavouriteFlavours from "@/components/MenuComps/FavouriteFlavour";

interface Product {
  title: string;
  description: string;
  price: number;
  images: { asset: { url: string } }[];
  stockStatus: string;
}

async function fetchProduct(slug: string): Promise<Product | null> {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      title,
      description,
      price,
      images[] { asset->{ url } },
      stockStatus
    }`,
    { slug }
  );
  return product || null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const product = await fetchProduct(params.slug);
    return {
      title: product?.title || "Product Not Found",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return { title: "Product Not Found" };
  }
}

interface PageProps {
  params: { slug: string };
}

export default async function Products({ params }: PageProps) {
  let product: Product | null = null;

  try {
    product = await fetchProduct(params.slug);
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, description, price, images, stockStatus } = product;

  return (
    <section className="text-gray-600 dark:text-gray-200 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            src={images[0]?.asset.url || "/premium-flavour.jpg"}
            alt={title || "Product Image"}
            width={500}
            height={500}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 dark:text-gray-400 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <span className="text-gray-600 dark:text-gray-200">
                {stockStatus === "inStock" ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <FavouriteFlavours />
      <PremiumFlavour />
    </section>
  );
}

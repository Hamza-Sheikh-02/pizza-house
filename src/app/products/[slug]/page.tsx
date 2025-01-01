import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Product {
  title: string;
  description: string;
  price: number;
  images: { asset: { url: string } }[];
  stockStatus: string;
}

// Fetch product data
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

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await fetchProduct(params.slug);
  return {
    title: product?.title || "Product Not Found",
  };
}

// Product Page Component
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await fetchProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, description, price, images, stockStatus } = product;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            src={images[0]?.asset.url || "https://dummyimage.com/400x400"}
            alt={title}
            width={500}
            height={500}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-primary"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <span className="text-gray-600">
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
    </section>
  );
}

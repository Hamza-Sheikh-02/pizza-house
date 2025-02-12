"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/lib/client";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  review: string;
  rating: number;
  image: {
    asset: {
      url: string;
    };
  };
}

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await client.fetch(`*[_type == "testimonials"] | order(id asc){
          id,
          name,
          role,
          review,
          rating,
          "image": image{asset->{url}}
        }`);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    }

    fetchTestimonials();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  if (testimonials.length === 0) {
    return <p className="text-center">Loading testimonials...</p>;
  }

  return (
    <div className="bg-white text-black dark:bg-background dark:text-white py-10 px-5">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
        What our customers are saying about{" "}
        <span className="text-primary">Pizza</span> House
      </h2>
      <div className="relative max-w-4xl mx-auto bg-gray-100 text-black dark:bg-gray-950 rounded-lg shadow-lg p-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={testimonials[currentIndex].image.asset.url}
              alt={testimonials[currentIndex].name}
              width={80}
              height={80}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary"
            />
            <p className="text-center text-sm md:text-base italic text-gray-700 dark:text-gray-200 mt-4 max-w-xl">
              “{testimonials[currentIndex].review}”
            </p>
            <div className="flex justify-center mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  fill={
                    i < testimonials[currentIndex].rating
                      ? "currentColor"
                      : "none"
                  }
                  className={`w-5 h-5 md:w-6 md:h-6 ${
                    i < testimonials[currentIndex].rating
                      ? "text-primary"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <h3 className="text-lg md:text-xl font-bold mt-4 dark:text-white">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
              {testimonials[currentIndex].role || "Customer"}
            </p>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-primary hover:text-primary/80 bg-white dark:bg-gray-300 rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-primary hover:text-primary/80 bg-white dark:bg-gray-300 rounded-full p-2 shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

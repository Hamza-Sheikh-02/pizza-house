"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeliciousDesserts from "@/components/MenuComps/DeliciousDessert";
import FavouriteFlavours from "@/components/MenuComps/FavouriteFlavour";
import PremiumFlavour from "@/components/MenuComps/PremiumFlavours";
import RefreshingDrinks from "@/components/MenuComps/RefreshingDrinks";

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      id: 1,
      content: (
        <div>
          <FavouriteFlavours />
          <PremiumFlavour />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div>
          <DeliciousDesserts />
          <RefreshingDrinks />
        </div>
      ),
    },
  ];

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, pages.length));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="py-10 px-4 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
        Explore Our <span className="text-primary">Menu</span>
      </h2>
      <div className="relative max-w-5xl mx-auto bg-gray-100 dark:bg-gray-950 rounded-lg shadow-lg p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {pages.find((page) => page.id === currentPage)?.content}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-2 rounded ${
              currentPage === 1
                ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                : "text-primary bg-gray-200 hover:bg-gray-300"
            }`}
          >
            «
          </button>
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`px-4 py-2 mx-2 rounded ${
                currentPage === page.id
                  ? "text-white bg-primary"
                  : "text-primary bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page.id}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length}
            className={`px-4 py-2 mx-2 rounded ${
              currentPage === pages.length
                ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                : "text-primary bg-gray-200 hover:bg-gray-300"
            }`}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}

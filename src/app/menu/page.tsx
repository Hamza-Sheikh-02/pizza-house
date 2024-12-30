"use client";

import React, { useState } from "react";
import DeliciousDesserts from "@/components/MenuComps/DeliciousDessert";
import FavouriteFlavours from "@/components/MenuComps/FavouriteFlavour";
import PremiumFlavour from "@/components/MenuComps/PremiumFlavours";
import RefreshingDrinks from "@/components/MenuComps/RefreshingDrinks";


function Menu() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, 2));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div>
      {currentPage === 1 && (
        <div>
          <main className="pt-[5px]">
            <FavouriteFlavours />
          </main>
          <main className="pt-[5px]">
            <PremiumFlavour />
          </main>
        </div>
      )}
      {currentPage === 2 && (
        <div>
          <main className="pt-[5px]">
            <DeliciousDesserts />
          </main>
          <main className="pt-[5px]">
            <RefreshingDrinks />
          </main>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === 1
              ? "text-primary hover:text-primary/80 bg-gray-200 dark:bg-gray-200"
              : "text-primary hover:text-primary/80 bg-gray-200 dark:bg-gray-200"
          }`}
        >
          «
        </button>
        <button
          onClick={() => setCurrentPage(1)}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === 1
              ? "text-primary hover:text-primary/80 bg-gray-200 dark:bg-gray-200"
              : "text-primary hover:text-primary/80 bg-gray-200 dark:bg-gray-200"
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === 2
              ? "text-primary hover:text-primary/80 bg-gray-200 dark:bg-gray-200"
              : "text-primary hover:text-primary/80 bg-gray-200 dark:bg-gray-200"
          }`}
        >
          2
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === 2}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === 2
              ? "text-primary hover:text-primary/80 bg-gray-200 dark:bg-gray-200"
              : "text-primary hover:text-primary/80 bg-gray-200 dark:bg-gray-200"
          }`}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default Menu;

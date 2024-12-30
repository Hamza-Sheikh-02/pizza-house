"use client";

import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "@/components/theme-button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 50);
  }, []);

  return (
    <nav className="relative bg-card text-card-foreground shadow-md z-50">
      <LoadingBar
        color="#ff0000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto py-4 px-4 md:px-8">
        <div className="text-2xl font-bold text-center">
          <span className="text-primary">Pizza</span> House
        </div>

        <div className="flex justify-between items-center md:hidden mt-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-muted-foreground w-6 h-6"
            aria-label="Menu Toggle"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary" />
            <FaUser className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary" />
            <ModeToggle />
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
              className="text-muted-foreground"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <ul className="p-4 space-y-4">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-primary">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li></li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-between mt-4">
          <ul className="flex items-center space-x-6 text-sm">
            <li className="hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link href="/">Blog</Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link href="/">Pages</Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link href="about">About</Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="hidden md:block pl-4 pr-10 py-2 rounded-full bg-muted text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-muted-foreground hidden md:block" />
            </div>
            <FaShoppingCart className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary" />
            <FaUser className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary" />
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

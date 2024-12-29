import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background text-gray-700 dark:text-gray-300 py-16 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Still Hungry for More Pizza?
          </h2>
          <p className="mt-2">
            Don&apos;t wait, make a smart & delicious choice. Stay updated with
            the best pizza offers!
          </p>
          <form className="mt-6 flex justify-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 w-72 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80 transition">
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              About Pizza House
            </h3>
            <p className="text-sm leading-relaxed">
              Pizza House has been serving freshly baked pizzas with the finest
              ingredients to pizza lovers around the world.
            </p>
            <div className="mt-4 flex items-start space-x-3">
              <div className="text-muted-foreground">
                <FaClock size={24} />
              </div>
              <div>
                <p>Mon - Sun (10:00 AM - 11:00 PM)</p>
                <p>Friday - Closed</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-end space-x-20">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Our Menu</li>
                <li>Special Offers</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <li>Order Now</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Help & Support
              </h3>
              <ul className="space-y-2">
                <li>FAQ</li>
                <li>Order Tracking</li>
                <li>Report an Issue</li>
                <li>Documentation</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 mt-12 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              &copy; 2025 Pizza House. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Hamza-Sheikh-02/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

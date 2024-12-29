import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Us.</h3>
          <p className="text-sm leading-relaxed">
            Serving the community with the most delicious and freshly baked
            pizzas, we bring an unforgettable dining experience to every
            customer. Taste the passion in every slice.
          </p>
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-black p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6h6"
                  />
                </svg>
              </div>
              <div>
                <p>Mon - Sat(10:00 AM - 10:00 PM)</p>
                <p>Sunday - 12:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Menu Links</h3>
          <ul className="space-y-2">
            <li>Our Story</li>
            <li>Menu</li>
            <li>Special Offers</li>
            <li>Delivery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Delivery Policy</li>
            <li>Privacy Policy</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Recent News</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <img
                src="/pizza-news1.jpg"
                alt="Pizza News 1"
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-sm text-white">25 Dec 2022</p>
                <p className="text-sm">Holiday Pizza Specials</p>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="/pizza-news2.jpg"
                alt="Pizza News 2"
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-sm text-white">15 Nov 2022</p>
                <p className="text-sm">Introducing Vegan Pizza</p>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="/pizza-news3.jpg"
                alt="Pizza News 3"
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-sm text-white">01 Oct 2022</p>
                <p className="text-sm">Pizza Making Workshops</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center">
            Copyright © 2022 Pizza House. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-primary" />
            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-primary" />
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-primary" />
            <FaYoutube className="w-5 h-5 cursor-pointer hover:text-primary" />
            <FaPinterest className="w-5 h-5 cursor-pointer hover:text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}

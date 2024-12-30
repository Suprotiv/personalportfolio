import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative h-[130vh] bottom-0">
      {/* Background Section */}
      <div className="mt-[-100vh] h-[130vh] sticky bottom-0 bg-gray-700">
        <Image
          src="/asBG.jpg"
          alt="Background Image"
          fill
          className="object-cover rounded-2xl"
        />
        <div className="absolute bottom-0 w-full text-white bg-opacity-70">
          <div className="container mx-auto px-5 py-10">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              {/* Logo Section */}
              <div className="text-2xl font-semibold">Colorlib</div>

              {/* Navigation Links */}
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-300">
                  Privacy
                </a>
                <a href="#" className="hover:text-gray-300">
                  Policy
                </a>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
                <a href="#" className="hover:text-gray-300">
                  Our Works
                </a>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-500">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaBehance />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <FaDribbble />
                </a>
                <a href="#" className="hover:text-red-500">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-10 text-sm">
              &copy; {new Date().getFullYear()} Colorlib. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
    </div>
  );
};

export default Footer;

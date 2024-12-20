"use client"; // Use client-side rendering for this component in Next.js

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Use Next.js Link
import Botton from "./Botton";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState({
    backgroundColor: "bg-transparent",
    padding: "py-3",
    textColor: "text-white",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbarOnScroll = () => {
      console.log(menuOpen);
      if (menuOpen || window.scrollY >= 80) {
        setIsScrolled(true);
        setNavbarClass({
          backgroundColor: "bg-black",
          padding: "py-1 md:py-0",
          textColor: "text-white",
        });
      } else {
        setIsScrolled(false);
        setNavbarClass({
          backgroundColor: "bg-transparent",
          padding: "py-3",
          textColor: "text-white",
        });
      }
    };

    window.addEventListener("scroll", updateNavbarOnScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (menuOpen) {
          setTimeout(() => setMenuOpen(false), 100);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", updateNavbarOnScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      setNavbarClass({
        backgroundColor: "bg-black",
        padding: "py-1 md:py-0",
        textColor: "text-white",
      });
    } else {
      if (window.scrollY < 80) {
        setNavbarClass({
          backgroundColor: "bg-transparent",
          padding: "py-3",
          textColor: "text-white",
        });
      }
    }
  }, [menuOpen]);

  return (
    <nav
      className={`${navbarClass.backgroundColor} fixed w-full z-30 top-0 left-0 animate-fadeInTopToBottom transition-all duration-300 ${navbarClass.padding}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <h1
            className={`text-2xl relative font-semibold px-2 z-50 left-2 ${navbarClass.textColor}`}
          >
            Suprotiv
          </h1>
        </Link>

        <button
          onClick={(event) => {
            event.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
          className="inline-flex items-center z-50 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400"
          aria-controls="navbar-sticky"
          aria-expanded={menuOpen}
        >
          <div className="relative w-6 h-6">
            {/* Close Icon */}
            <svg
              className={`absolute top-0 left-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>

            {/* Menu Icon */}
            <svg
              className={`absolute top-0 left-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0 rotate-45" : "opacity-100 rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </button>

        <div
          ref={menuRef}
          className={`${
            menuOpen ? "fixed top-0 z-30 animate-slideDown" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-all duration-100`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 pt-[7vh] md:pt-4 rounded-b-xl relative z-30 ${navbarClass.backgroundColor}  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-transparent md:border-0`}
          >
            {["Home", "Portfolio", "Services", "Contact", "About"].map(
              (item) => (
                <li
                  key={item.toLowerCase()}
                  className="animate-fadeInTopToBottom md:animate-none"
                >
                  <Link
                    href={`/${
                      item.toLowerCase() === "home"
                        ? ""
                        : `${item.toLowerCase()}`
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Botton
                      value={item}
                      size={"md"}
                      color={navbarClass.textColor}
                    />
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 backdrop-blur-md z-0 animate-fadeInMedium transition-opacity duration-300"></div>
      )}
    </nav>
  );
};

export default Navbar;

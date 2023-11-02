import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import Logo from "@/assets/img/gamesroom.png";
import Image from "next/image";
import Link from "next/link";

function LandingPages() {
  const [isOpen, setIsopen] = useState(false);

  console.log(isOpen);

  //   //   const theme = useMantineTheme();
  //   //   const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  //   const slides = data.map((item) => (
  //     <Carousel.Slide key={item.title}>
  //       <Card {...item} />
  //     </Carousel.Slide>
  //   ));

  return (
    <header className="bg-white dark:bg-gray-900 w-full">
      <nav x-data="{ isOpen: false }" className="px-6 py-4 shadow">
        <div className="lg:items-center lg:justify-between lg:flex">
          <div className="flex items-center justify-between">
            <Link href="/" className="mx-auto ">
              <img
                className="self-stretch h-6 sm:h-7 object-fill"
                src="https://webstockreview.net/images/games-clipart-logo.jpg"
                alt=""
              />
            </Link>

            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen === true ? (
                  ""
                ) : (
                  <svg
                    //   x-show={!isOpen}
                    onClick={() => {
                      setIsopen(true);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}

                {isOpen === false ? (
                  ""
                ) : (
                  <svg
                    onClick={() => {
                      setIsopen(false);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <Link
              href="/home"
              className="block px-3 py-2 text-gray-600 rounded-lg dark:text-gray-200 hover:bg-gray-100 lg:mx-2"
            >
              Home
            </Link>
            {/* <a
              href="#"
              className="block px-3 py-2 text-gray-600 rounded-lg dark:text-gray-200 hover:bg-gray-100 lg:mx-2"
            >
              About
            </a> */}
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 rounded-lg dark:text-gray-200 hover:bg-gray-100 lg:mx-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Explore New {""}
              <span className="text-blue-600 dark:text-blue-400">Games</span>
            </h2>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
            </p>

            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a
                href="#"
                className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            className="w-full h-full bg-cover"
            style={{
              backgroundImage: `url(https://posterspy.com/wp-content/uploads/2015/08/Red-Dead-A3-Digital.png)`,
            }}
          >
            <div className="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingPages;

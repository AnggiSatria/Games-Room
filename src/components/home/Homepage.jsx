import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Homepage({}) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {data?.map((res) => {
            return (
              <div className="py-8 flex flex-wrap md:flex-nowrap gap-3">
                <div className="w-full md:w-64 md:mb-0 mb-6 md:flex-shrink-0 flex flex-col items-start justify-start gap-3">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP._2BYjdD00PyN_OHHoJRNmAHaEK&pid=Api&P=0&h=180"
                    alt=""
                    className="w-full object-contain"
                  />
                  <span className=" text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <Link
                    href={`/detail-games/${res}/`}
                    className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer"
                  >
                    Download
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

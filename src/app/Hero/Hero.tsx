"use client";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-[#171717] text-white px-6 md:px-20 py-20">
        {/* Small intro text */}
        <p className="text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span role="img" aria-label="wave">
            👋
          </span>
          Hey, I am Erica
        </p>

        {/* Main Heading with gradient */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-[#FCD68B] via-[#F9784C] to-[#9C356D] text-transparent bg-clip-text mb-8">
          A YOUNG CREATIVE <br />
          DESIGNER BASED IN <br />
          SAN DIEGO
        </h1>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="border border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition">
            MY WORKS
          </button>
          <button className="bg-[#f8f5ec] text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e7e4d8] transition">
            LET&apos;S TALK
          </button>
        </div>
      </section>
      <section>
        <div className="relative z-10 flex justify-center">
          <img
            src="./Frame 1.png"
            alt="Custom Graphic"
            className="w-[1600px] h-auto"
          />
        </div>
      </section>
      <section className="bg-[#fef9f3] py-16 mt-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-52 px-6">
          {/* Left: Image with shadow */}
          <div className="relative flex-shrink-0">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffeed9] via-[#fff4e6] to-[#fff] blur-2xl opacity-80"></div>

              <img
                src="./Image1.png"
                alt="About"
                className="relative ml-18 rounded-[50%] w-full object-cover max-w-sm md:max-w-md shadow-[0_25px_50px_-12px_rgba(128,0,128,0.5)]" // custom purple shadow
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex-1 text-center md:text-left justify-end">
            <p className="text-[#F9784C] font-semibold mb-2 uppercase tracking-wide">
              About
            </p>
            <h2 className="text-4xl font-bold leading-tight mb-4 text-black">
              Crafting Unique
              <br /> Brand Experiences <br />
              Since 2014
            </h2>
            <p className="text-gray-700 mb-6 max-w-xl">
              With a Visual Arts degree, my journey began in graphic design,
              crafting logos and marketing materials. Video editing followed,
              where meticulous attention to detail set my work apart, and I
              ventured into 3D modeling for immersive experiences.
            </p>
            <button className="px-6 py-3 border border-black rounded-full font-medium hover:bg-black text-black hover:text-white transition cursor-pointer">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      <section className="relative bg-[#fef9f3] py-16 mb-0">
        <h3 className="text-orange-500 text-xl font-bold text-center">
          PORTFOLIO
        </h3>
        <h1 className="text-center text-4xl text-black font-bold mb-6">
          MY LATEST WORKS
        </h1>
        {/* Background image */}
        <div className="relative w-full">
          <img
            src="./Project_Card.png" // your uploaded background image
            alt="Portfolio Background"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <section className="bg-[#111] text-white py-16 px-6 top-0">
        <div className="text-center mb-12">
          <p className="text-[#F6A94C] font-semibold uppercase tracking-widest text-sm">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-[#fff4e6] to-[#ffe9d1] text-black rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#fcd19b] rounded-full flex items-center justify-center">
                🖥
              </div>
              <div>
                <h3 className="text-lg font-semibold">TechStartup Xperience</h3>
                <p className="text-xs text-gray-600">Sarah Thompson</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Ability to capture the essence of our vision and translate it into
              a visually stunning logo exceeded our expectations.
            </p>
            <p className="text-xs text-gray-500">February 2024</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-[#fff4e6] to-[#ffe9d1] text-black rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#fcd19b] rounded-full flex items-center justify-center">
                🔗
              </div>
              <div>
                <h3 className="text-lg font-semibold">GlorifiedBrand</h3>
                <p className="text-xs text-gray-600">Sarah Thompson</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Ability to capture the essence of our vision and translate it into
              a visually stunning logo exceeded our expectations.
            </p>
            <p className="text-xs text-gray-500">January 2024</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-[#fff4e6] to-[#ffe9d1] text-black rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#fcd19b] rounded-full flex items-center justify-center">
                🌐
              </div>
              <div>
                <h3 className="text-lg font-semibold">WorldofStartups</h3>
                <p className="text-xs text-gray-600">Sarah Thompson</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Ability to capture the essence of our vision and translate it into
              a visually stunning logo exceeded our expectations.
            </p>
            <p className="text-xs text-gray-500">November 2023</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-r from-[#fff4e6] to-[#ffe9d1] text-black rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#fcd19b] rounded-full flex items-center justify-center">
                🚀
              </div>
              <div>
                <h3 className="text-lg font-semibold">StartupNation</h3>
                <p className="text-xs text-gray-600">Sarah Thompson</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Ability to capture the essence of our vision and translate it into
              a visually stunning logo exceeded our expectations.
            </p>
            <p className="text-xs text-gray-500">April 2023</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

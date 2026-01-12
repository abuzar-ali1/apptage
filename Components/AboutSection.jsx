"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection( {stats , aboutImg} ) {
 

  const container = {
    hidden: { opacity: 0, y: -12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        duration: 0.45,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const floatAnimation = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -20, 0],
      rotate: [0, -3, 0, 3, 0],
      transition: {
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        rotate: {
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <section className="max-w-8xl mx-auto px-6 lg:px-12 rounded-xl my-20">
      <div
        className=" w-full  inset-0 bg-no-repeat opacity-100 z-0 bg-cover bg-center  md:bg-contain   flex items-center"
        style={{
          backgroundImage: 'url("./images/about-banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content container */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-15 w-full">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left column - Text Content */}
              <motion.div
                variants={fadeUp}
                className="lg:col-span-7 col-span-1"
              >
                <div className="flex items-center space-x-2 pr-6 shrink-0">
                  <motion.div
                    className="w-3 h-3 bg-[#6D3CFF] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                  <span className="text-black text-lg font-semibold">
                    About
                  </span>
                </div>

                <motion.h1
                  variants={fadeUp}
                  className="text-xl sm:text-10xl lg:text-3xl xl:text-5xl font-semibold leading-tight tracking-tight text-[#1A1239]"
                >
                  Let’s Build Your <br className="hidden sm:block" />
                  Next Big Win
                  <span className="text-[#6D3CFF] relative">
                    Together
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6D3CFF] to-transparent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 lg:mt-8 max-w-7xl text-base sm:text-2xl lg:text-lg text-black leading-tight"
                >
                  Great products don’t just happen — they’re designed, built,
                  and scaled with the right partner. At Apptage, we make sure
                  your ideas don’t stay ideas. Ready to launch faster, smarter,
                  and stronger?
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="mt-2 lg:mt-4 max-w-7xl text-base sm:text-2xl lg:text-lg text-black leading-tight"
                >
                  Want to see your business succeed at scale?{" "}
                  <span className="font-bold text-black">
                    Let’s start building your future today.
                  </span>
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 lg:mt-12 flex items-center gap-4"
                >
                  <motion.a
                    href="#book"
                    className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-2 rounded-md bg-[#5932EE] hover:bg-[#1a1239] text-white font-semibold text-base sm:text-md shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Book a call"
                  >
                    Book A Call
                  </motion.a>

                  <motion.a
                    href="tel:8556058389"
                    className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-2 rounded-md border border-black bg-white hover:bg-[#1a1239] text-sm sm:text-base text-[#111111] font-medium  hover:border-gray-400 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Call 855-605-8389"
                  >
                    855-605-83891
                  </motion.a>
                </motion.div>

                <div className="max-w-7xl mx-auto mt-5">
                  <div className="flex items-center justify-around">
                    {stats ? stats.map((item, idx) => (
                      <div className="flex flex-col" key={item.label ?? idx}>
                        <motion.h1
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="text-2xl md:text-xl lg:text-4xl font-bold text-[#1a1239]"
                        >
                          {item.value}
                        </motion.h1>

                        {/* Label */}
                        <div className="flex text-lg md:text-xl font-medium text-[#1a1239]">
                          <span className="text-[#5932EE] font-bold">| </span>
                          {item.label}
                        </div>
                      </div>
                    )) : " "}
                  </div>
                </div>
              </motion.div>

              {/* Right column - Animated Image */}
              <motion.div
                variants={fadeUp}
                className="lg:col-span-5 col-span-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
                aria-hidden="true"
              >
                <div className="relative">
                  {/* Floating container with enhanced animation */}
                  <motion.div
                    variants={floatAnimation}
                    initial="initial"
                    animate="animate"
                    className="relative"
                  >
                    {/* Main laptop image */}
                    <motion.img
                      src={aboutImg ? "./images/laptop-code.webp" : "./images/laptop.webp"}
                      alt="Digital solutions illustration"
                      className="hidden md:block w-full max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] transform-gpu drop-shadow-2xl"
                      style={{
                        filter:
                          "drop-shadow(0 20px 40px rgba(109, 60, 255, 0.2))",
                      }}
                    />

                    {/* Floating particles/effects */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#6D3CFF]/20 to-transparent"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF6B6B]/10 to-transparent"
                      animate={{
                        y: [0, 10, 0],
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

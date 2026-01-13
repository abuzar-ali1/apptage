"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Process Data ---
const processSteps = [
  {
    id: "01",
    title: "Understand & Align",
    description: "We start by learning your business, audience, and goals — aligning our strategy with your vision from day one.",
  },
  {
    id: "02",
    title: "Plan & Strategize",
    description: "Clear roadmaps, smart resource allocation, and measurable milestones — so you know exactly where your project is headed.",
  },
  {
    id: "03",
    title: "Create & Build",
    description: "From design to development, we bring ideas to life with cutting-edge technologies and proven frameworks.",
  },
  {
    id: "04",
    title: "Test & Launch",
    description: "Rigorous testing across all devices ensures a bug-free experience before we execute a seamless go-to-market launch.",
  },
  {
    id: "05",
    title: "Optimize & Scale",
    description: "We don't just stop at launch. We continuously monitor performance and scale your solution as your business grows.",
  },
];

export default function ProcessSection() {
  const targetRef = useRef(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll to horizontal movement
  // Since cards are smaller, we don't need to scroll as far (-50% is likely enough)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    // Outer section creates the scroll track (300vh height for scroll length)
    <section ref={targetRef} className="relative h-[300vh] bg-white py-24">
      
      {/* Sticky Viewport: Sticks to top as we scroll through the height */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-10">
        
        {/* --- Header Content --- */}
        <div className="container mx-auto mb-12">
          <div className="flex items-center lg:flex-row justify-between gap-10">
            
            {/* Text Side */}
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#6D3CFF]"></span>
                <span className="text-gray-900 font-bold tracking-wide">Our Process</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-5xl font-medium text-[#1A1A1A] mb-6 "
              >
                How We Turn Ideas <span className="text-[#6D3CFF]">Into Impact</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-md max-w-screen"
              >
                Every service we deliver follows a simple but powerful roadmap. From concept to continuous growth, our process is designed to reduce risks, maximize ROI, and ensure results that last.
              </motion.p>
            </div>

            {/* Button Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                className="bg-[#5932EE] hover:bg-[#1a1239] text-white font-semibold py-2 px-8 rounded-xl transition-all hover:scale-105 hover:shadow-xl shadow-[#6D3CFF]/20"
              >
                Schedule a Call
              </button>
            </motion.div>
          </div>
        </div>

        {/* --- Horizontal Scroll Cards Area --- */}
        {/* 'pl-6 lg:pl-[calc((100vw-1280px)/2+24px)]' calculates exact start of container for large screens */}
        <div className="w-full pl-6 xl:pl-[calc((100vw-1280px)/2+24px)]"> 
          <motion.div 
            style={{ x }} 
            className="flex gap-6 w-max pr-24"
          >
            {processSteps.map((step, index) => (
              <ProcessCard key={step.id} step={step} index={index} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function ProcessCard({ step, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 0.5, 
          delay: index * 0.1, 
          type: "spring",
          stiffness: 100 
        }
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(109, 60, 255, 0.15)" }}
      className="relative w-[85vw] md:w-[480px] h-auto min-h-[200px] bg-[#F9F9FB] rounded-2xl p-8 flex flex-row items-start gap-6 shrink-0 border border-transparent hover:border-[#6D3CFF]/30 hover:bg-white transition-all duration-300 group cursor-default"
    >
      {/* Number (Left Side) - Matched styling from image */}
      <div className="shrink-0">
        <span className="text-5xl md:text-6xl font-medium text-[#6D3CFF] leading-none">
          {step.id}
        </span>
      </div>

      {/* Text Content (Right Side) */}
      <div className="flex flex-col pt-1">
        <h3 className="text-xl md:text-2xl font-[550] text-gray-900 mb-3 group-hover:text-[#6D3CFF] transition-colors">
          {step.title}
        </h3>
        <p className="text-gray-500 text-base leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
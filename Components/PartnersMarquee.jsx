"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartnersMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(13); // pixels per second

  // Partner logos data - replace with your actual images
  const partners = [
      { id: 2, name: 'Shopify', logo: '/images/partners/p5.png', alt: 'Shopify' },
      { id: 3, name: 'HubSpot', logo: '/images/partners/p6.png', alt: 'HubSpot' },
      { id: 4, name: 'AWS', logo: '/images/partners/p1.png', alt: 'Amazon Web Services' },
      { id: 1, name: 'Azure', logo: '/images/partners/p4.png', alt: 'Microsoft Azure' },
      { id: 5, name: 'Google Cloud', logo: '/images/partners/p3.png', alt: 'Google Cloud' },
      { id: 6, name: 'Microsoft', logo: '/images/partners/p8.png', alt: 'Microsoft' },
      { id: 7, name: 'Huawai', logo: '/images/partners/p2.png', alt: 'Huawai' },
      { id: 8, name: 'Hozo', logo: '/images/partners/p7.png', alt: 'Hozo' },
  ];

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partners, ...partners];

  // Custom scroll animation variants
  const marqueeVariants = {
    animate: {
      x: [0, -100 * partners.length], // Adjust based on number of items
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: scrollSpeed,
          ease: "linear",
        },
      },
    },
    paused: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-[#1A1A1A] py-1 w-full overflow-hidden">
      <div className="2xl:ml-40 xl:ml-20 lg:ml-10 ml-2 flex items-center divide-x divide-gray-600">
        {/* Left label */}
        <div className="flex items-center space-x-2 pr-6 shrink-0">
          <motion.div 
            className="w-3 h-3 bg-[#6D3CFF] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
             
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          <span className="text-[#C9C3E0] text-sm font-semibold">Our Partnerships</span>
        </div>

        {/* Marquee Container */}
        <div 
          className="pl-6 ml-4 overflow-hidden"
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="relative flex">
            {/* First Marquee */}
            <motion.div
              className="flex items-center"
              variants={marqueeVariants}
              animate={isPaused ? "paused" : "animate"}
              style={{ willChange: 'transform' }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`first-${partner.id}-${index}`}
                  className="px-4 py-1 mx-2 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative w-18 2xl:w-24 h-12 flex items-center justify-center">
                    {/* Fallback text if image doesn't load */}
                    <span className="text-white text-sm font-medium opacity-0 absolute">
                      {partner.name}
                    </span>
                    {/* Actual logo image */}
                    <div className="relative w-full h-full flex items-center justify-center bg-transparent">
                      {/* For Next.js Image component, uncomment below and use actual images */}
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100px, 150px"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
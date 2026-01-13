"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import { Star } from "lucide-react";

// --- Review Data ---
const reviews = [
  {
    id: 1,
    platform: "GoodFirms",
    rating: "4.9",
    text: "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
    image: "/images/gd-firm.svg",
  },
  {
    id: 2,
    platform: "Clutch",
    rating: "4.9",
    text: "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
    image: "/images/clutch-co.svg",
  },
  {
    id: 3,
    platform: "Trustpilot",
    rating: "4.9",
    text: "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
    image: "/images/trust-pilot.svg",
  },
  {
    id: 4,
    platform: "UpCity",
    rating: "4.9",
    text: "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
    image: "/images/upcity.svg",
  },
  {
    id: 5,
    platform: "G2",
    rating: "4.9",
    text: "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
    image: "/images/g2-logo.svg",
  },
  {
    id: 6,
    platform: "DesignRush",
    rating: "4.9",
    text: "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
    image: "/images/dr-rush.svg",
  },
  {
    id: 7,
    platform: "RightFirms",
    rating: "4.9",
    text: "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
    image: "/images/rf-firm.svg",
  },
];

export default function ReviewsMarquee() {
  const [scope, animate] = useAnimate();
  const [isMobile, setIsMobile] = useState(false);

  const CARD_WIDTH_DESKTOP = 432;
  const CARD_WIDTH_MOBILE = 382;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
    const totalItems = reviews.length;

    const sequence = async () => {
      for (let i = 0; i < totalItems; i++) {

        await animate(
          scope.current,
          { x: -(cardWidth * (i + 1)) },
          { duration: 0.1, ease: "easeInOut" }
        );

    
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // 3. Instant Reset
      await animate(scope.current, { x: 0 }, { duration: 0 });
      
      // 4. Restart loop
      sequence();
    };

    sequence();
  }, [animate, scope, isMobile]);

  return (
    <section className="bg-[#18181b] py-20 overflow-hidden relative font-sans">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#6D3CFF] shadow-[0_0_12px_rgba(109,60,255,0.5)]"></span>
          <span className="text-[#C9C3E0] font-medium tracking-wide">
            Awards & Recognition
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white max-w-2xl"
        >
          Trusted by <span className="text-[#6D3CFF]">Global</span> Clients
        </motion.h2>
      </div>

      {/* --- Marquee Container --- */}
      <div className="relative w-full overflow-hidden">
        {/* Track */}
        <motion.div 
          ref={scope}
          className="flex w-max cursor-grab active:cursor-grabbing"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <MarqueeCard key={index} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeCard({ review }) {
  return (
    <div className="w-[350px] md:w-[400px] bg-[#0f0f11] border border-white/5 p-8 rounded-2xl mx-4 shrink-0 hover:border-[#6D3CFF]/40 transition-colors duration-300">
      {/* Header: Platform & Rating */}
      <div className="flex justify-between items-center mb-6">
        <img
          className="h-8 w-auto object-contain"
          src={review.image}
          alt={`${review.platform} logo`}
        />

        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-[#6D3CFF] fill-[#6D3CFF]" />
          <span className="text-white text-lg font-semibold">
            {review.rating}
          </span>
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed text-[15px]">
        {review.text}
      </p>
    </div>
  );
}
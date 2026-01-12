"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function WhatWeOffer() {
  const [activeCard, setActiveCard] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef(null);
  const rightColumnRef = useRef(null);
  const cardsRef = useRef([]);
  
  // Smooth scroll progress using motion value
  const scrollYProgress = useMotionValue(0);
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  // Parallax transforms for cards - smoother values
  const cardY1 = useTransform(smoothScrollProgress, [0, 0.2, 1], [0, 15, 44.5]);
  const cardY2 = useTransform(smoothScrollProgress, [0.2, 0.4, 1], [0, 10, 0]);
  const cardY3 = useTransform(smoothScrollProgress, [0.4, 0.6, 1], [0, 15, 0]);
  const cardY4 = useTransform(smoothScrollProgress, [0.6, 0.8, 1], [0, 20, 80]);
  const cardY5 = useTransform(smoothScrollProgress, [0.8, 0.9, 1], [0, 25, 60]);
  const cardY6 = useTransform(smoothScrollProgress, [0.9, 1], [0, 30]);
  
  const cardYTransforms = [cardY1, cardY2, cardY3, cardY4, cardY5, cardY6];

  // Card data matching the HTML structure
  const cards = [
    {
      id: 1,
      title: "Advisory & Design",
      description: "Bringing your ideas to life with intuitive design, powerful branding, and user-centered experiences.",
      features: ["Advisory", "Design"],
      icon: "/img/home/services/service-2.png",
      primaryButton: "Schedule a Call",
      secondaryButton: "Learn More",
      secondaryLink: "/development/app-development/"
    },
    {
      id: 2,
      title: "Development Services",
      description: "Building robust, scalable digital solutions from mobile apps to custom web platforms and everything in between.",
      features: ["App Development", "Custom Software Development", "Web Development", "Game Development"],
      icon: "/img/home/services/service-3.png",
      primaryButton: "Schedule a Call",
      secondaryButton: "Learn More",
      secondaryLink: "/development/app-development/"
    },
    {
      id: 3,
      title: "Ecommerce Solutions",
      description: "Optimizing your eCommerce platform with tailored designs, development, and integrations to maximize growth.",
      features: ["Shopify", "Magento", "Custom Ecommerce Solutions", "BigCommerce", "WooCommerce"],
      icon: "/img/home/services/service-4.png",
      primaryButton: "Schedule a Call",
      secondaryButton: "Learn More",
      secondaryLink: "/development/app-development/"
    },
    {
      id: 4,
      title: "Data & Cloud Services",
      description: "Enabling smarter business decisions with data-driven insights, cloud migration, and scalable infrastructure.",
      features: ["Cloud Consulting & Services", "Data Solutions"],
      icon: "/img/home/services/service-5.png",
      primaryButton: "Schedule a Call",
      secondaryButton: "Learn More",
      secondaryLink: "/development/app-development/"
    },
    {
      id: 5,
      title: "AI & ML Solutions",
      description: "Implementing cutting-edge artificial intelligence and machine learning solutions for your business.",
      features: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Predictive Analytics"],
      icon: "/img/home/services/service-2.png",
      primaryButton: "Schedule a Call",
      secondaryButton: "Learn More",
      secondaryLink: "/development/app-development/"
    },
    {
      id: 6,
      title: "DevOps & Cloud",
      description: "Providing cloud infrastructure and DevOps services for scalable, secure, and reliable deployments.",
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Containerization", "Infrastructure as Code"],
      icon: "/img/home/services/service-3.png",
      primaryButton: "Schedule a Call",
      secondaryButton: "Learn More",
      secondaryLink: "/development/app-development/"
    }
  ];

  // Handle wheel scroll for entire component
  useEffect(() => {
    const section = sectionRef.current;
    const rightColumn = rightColumnRef.current;
    
    if (!section || !rightColumn) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      // Calculate scroll amount with smooth factor
      const scrollAmount = e.deltaY * 0.5;
      const newScrollTop = rightColumn.scrollTop + scrollAmount;
      const maxScrollTop = rightColumn.scrollHeight - rightColumn.clientHeight;
      
      // Bound the scroll position
      const boundedScrollTop = Math.max(0, Math.min(maxScrollTop, newScrollTop));
      
      // Update right column scroll position smoothly
      rightColumn.scrollTo({
        top: boundedScrollTop,
        behavior: 'smooth'
      });
      
      // Update scroll progress
      const progress = boundedScrollTop / maxScrollTop;
      scrollYProgress.set(progress);
      
      // Update active card
      updateActiveCard(boundedScrollTop, rightColumn);
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      touchStartY.current = touch.clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const deltaY = touchStartY.current - touch.clientY;
      const rightColumn = rightColumnRef.current;
      
      if (rightColumn) {
        rightColumn.scrollTop += deltaY * 1.5;
        touchStartY.current = touch.clientY;
        
        // Update scroll progress
        const maxScrollTop = rightColumn.scrollHeight - rightColumn.clientHeight;
        const progress = rightColumn.scrollTop / maxScrollTop;
        scrollYProgress.set(progress);
        
        updateActiveCard(rightColumn.scrollTop, rightColumn);
      }
    };

    const touchStartY = { current: 0 };

    // Add event listeners
    section.addEventListener('wheel', handleWheel, { passive: false });
    section.addEventListener('touchstart', handleTouchStart, { passive: true });
    section.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Initialize scroll progress
    const maxScrollTop = rightColumn.scrollHeight - rightColumn.clientHeight;
    const initialProgress = rightColumn.scrollTop / maxScrollTop;
    scrollYProgress.set(initialProgress);

    return () => {
      section.removeEventListener('wheel', handleWheel);
      section.removeEventListener('touchstart', handleTouchStart);
      section.removeEventListener('touchmove', handleTouchMove);
    };
  }, [scrollYProgress]);

  // Function to update active card
  const updateActiveCard = (scrollTop, container) => {
    const cardElements = cardsRef.current;
    
    for (let i = 0; i < cardElements.length; i++) {
      if (cardElements[i]) {
        const card = cardElements[i];
        const cardTop = card.offsetTop;
        const cardHeight = card.clientHeight;
        const scrollPosition = scrollTop + container.clientHeight / 3;
        
        if (scrollPosition >= cardTop && scrollPosition < cardTop + cardHeight) {
          setActiveCard(cards[i].id);
          break;
        }
      }
    }
  };

  // Handle card click to scroll to it
  const scrollToCard = (index) => {
    const rightColumn = rightColumnRef.current;
    const cardElement = cardsRef.current[index];
    
    if (rightColumn && cardElement) {
      setIsScrolling(true);
      
      const cardTop = cardElement.offsetTop;
      const containerHeight = rightColumn.clientHeight;
      const scrollTo = cardTop - (containerHeight / 2) + (cardElement.clientHeight / 2);
      
      rightColumn.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
      
      setActiveCard(cards[index].id);
      
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#1A1239] px-6 2xl:px-0 py-40 min-h-screen overflow-hidden"
    >
      <div className="container mx-auto grid xl:grid-cols-2 gap-12 items-start">
        
        {/* Left Column - Sticky Content */}
        <div className="xl:sticky top-40 2xl:top-80 self-start">
          <div className="flex items-center gap-3 mb-6">
            <motion.div 
              className="w-3 h-3 bg-[#6D3CFF] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(109, 60, 255, 0)",
                  "0 0 0 8px rgba(109, 60, 255, 0.2)",
                  "0 0 0 0 rgba(109, 60, 255, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <span className="text-[#C9C3E0] text-lg font-medium">What We Offer</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6"
          >
            Tailored Digital Solutions <br />to Fuel <span className="text-[#6D3CFF]">Your Success</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[#C9C3E0] text-lg leading-8 mt-4 max-w-xl mb-8"
          >
            At Apptage, we bring strategy, design, and technology together to craft solutions that deliver measurable impact. Whether you're scaling your business, launching a new product, or optimizing existing systems, we provide custom solutions built to grow with your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative inline-block"
          >
            <button 
              type="button" 
              className="border rounded-lg max-w-max font-semibold cursor-pointer transition-all duration-300 ease-in-out bg-[#6D3CFF] text-white border-[#6D3CFF] hover:bg-[#1A1238] hover:border-[#1A1238] text-sm sm:text-md py-3 px-6 sm:px-8 md:px-10 lg:px-12 hover:scale-105 active:scale-95"
            >
              Book A Call
            </button>
          </motion.div>
        </div>

        {/* Right Column - Cards with Independent Scroll */}
        <div 
          ref={rightColumnRef}
          className="relative space-y-10 xl:h-[80vh] xl:overflow-y-auto p-2"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none"
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              ref={el => cardsRef.current[index] = el}
              onClick={() => scrollToCard(index)}
              className={`bg-[#2F2F2F] rounded-2xl p-8 duration-300 ease-in-out my-20 hover:bg-[#3a3939] cursor-pointer transition-all ${
                activeCard === card.id ? 'ring-2 ring-[#6D3CFF] ring-opacity-50 scale-[1.02]' : ''
              }`}
              style={{
                y: cardYTransforms[index],
                transition: isScrolling ? "none" : "all 0.3s ease-in-out"
              }}
              whileHover={{ 
                y: -5,
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="space-y-8">
                {/* Card Header */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-[#5A7AF7] rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white text-lg font-bold">
                      {card.title.charAt(0)}
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{card.title}</h3>
                </div>

                {/* Card Description */}
                <motion.p 
                  className="text-[#C9C3E0] leading-8 text-lg max-w-xl font-medium"
                  whileHover={{ color: "#FFFFFF" }}
                  transition={{ duration: 0.2 }}
                >
                  {card.description}
                </motion.p>

                {/* Features Grid */}
                <div className={`grid grid-cols-1 ${card.features.length > 2 ? 'sm:grid-cols-2' : ''} gap-4`}>
                  {card.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        whileHover={{ scale: 1.5, backgroundColor: "#6AF790" }}
                      />
                      <a href="/">
                        <motion.span 
                          className="text-[#C9C3E0] inline-block transition-transform duration-300 ease-in-out hover:translate-x-1 hover:text-[#6AF790]"
                          whileHover={{ x: 5 }}
                        >
                          {feature}
                        </motion.span>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Card Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 relative z-30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.button 
                    className="bg-[#6D3CFF] hover:bg-[#1A1238] text-sm sm:text-base transition-all duration-500 ease-in-out text-white font-semibold px-8 py-3 w-fit rounded-lg capitalize flex items-center gap-2 hover:scale-105 active:scale-95"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.primaryButton}
                  </motion.button>
                  <motion.a 
                    className="bg-transparent border border-[#6D3CFF] text-sm sm:text-base hover:border-[#1a1238] hover:bg-[#1a1238] transition-all duration-500 ease-in-out text-white font-semibold px-8 py-3 w-fit rounded-lg capitalize flex items-center gap-2 hover:scale-105 active:scale-95"
                    href={card.secondaryLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.secondaryButton}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for smooth scrolling and hiding scrollbar */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Smooth scroll container */
        .scroll-container {
          scroll-behavior: smooth;
          transition: scroll-top 0.3s ease;
        }
        
        /* Prevent overscroll glow on mobile */
        body {
          overscroll-behavior: none;
        }
        
        /* Custom scrollbar styling - hidden */
        .scroll-container::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: transparent;
        }
        
        /* Smooth transitions for transform properties */
        * {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}
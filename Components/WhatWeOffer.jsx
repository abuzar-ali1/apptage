"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiChevronRight } from "react-icons/fi";

export default function WhatWeOffer() {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for cards
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  
  // Scale effect for cards
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Card data
  const cards = [
    {
      id: 1,
      title: "Advisory & Design",
      description: "Bringing your ideas to life with intuitive design, powerful branding, and user-centered experiences.",
      features: ["Advisory", "Design"],
      primaryButton: "Schedule A Call",
      secondaryButton: "Learn More",
      color: "from-blue-500 to-purple-500",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Development Services",
      description: "Building robust, scalable digital solutions from mobile apps to custom web platforms and everything in between.",
      features: ["App Development", "Custom Software Development", "Web Development", "Game Development"],
      primaryButton: "Schedule A Call",
      secondaryButton: "Learn More",
      color: "from-purple-500 to-pink-500",
      icon: "💻"
    }
  ];

  // Handle card visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.id);
            setActiveCard(cardId);
          }
        });
      },
      { threshold: 0.5 }
    );

    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column - Sticky Content */}
          <motion.div 
            variants={fadeInLeft}
            className="sticky top-24 self-start"
          >
            <div className="space-y-8">
              {/* Section Label */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#6D3CFF] rounded-full animate-pulse"></div>
                <span className="text-[#6D3CFF] font-semibold text-sm uppercase tracking-wider">
                  What We Offer
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Tailored Digital Solutions to Fuel Your Success
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                At Apptage, we bring strategy, design, and technology together to craft solutions that deliver measurable impact. Whether you're scaling your business, launching a new product, or optimizing existing systems, we provide custom solutions built to grow with your business.
              </p>

              {/* Primary CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#6D3CFF] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6D3CFF]/30"
              >
                Book A Call
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-3"
                >
                  <FiArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>

              {/* Stats Mini (optional) */}
              <div className="pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#6D3CFF]">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#6D3CFF]">100%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#6D3CFF]">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Scrollable Cards */}
          <div className="space-y-8 lg:space-y-12">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                ref={el => cardsRef.current[index] = el}
                data-id={card.id}
                variants={cardVariants}
                style={{
                  y: index === 0 ? card1Y : card2Y,
                  scale: cardScale
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Card Container */}
                <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden ${
                  activeCard === card.id ? 'ring-2 ring-[#6D3CFF] ring-opacity-50' : ''
                }`}>
                  {/* Card Header */}
                  <div className="p-8">
                    {/* Card Icon and Title */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl`}>
                            {card.icon}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {card.title}
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-lg mb-6">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className={`grid ${
                      card.features.length > 2 ? 'grid-cols-2' : 'grid-cols-1'
                    } gap-4 mb-8`}>
                      {card.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          variants={listItemVariants}
                          custom={idx}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#6D3CFF]"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center px-6 py-3 bg-[#6D3CFF] text-white rounded-lg font-semibold hover:bg-[#4d22e0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] focus:ring-offset-2"
                      >
                        {card.primaryButton}
                        <FiChevronRight className="ml-2" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center px-6 py-3 bg-white text-[#6D3CFF] border-2 border-[#6D3CFF] rounded-lg font-semibold hover:bg-[#6D3CFF] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] focus:ring-offset-2"
                      >
                        {card.secondaryButton}
                      </motion.button>
                    </div>
                  </div>

                  {/* Card Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 -translate-y-32 translate-x-32 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                  </div>

                  {/* Active Indicator */}
                  {activeCard === card.id && (
                    <motion.div
                      layoutId="activeCard"
                      className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#6D3CFF] to-purple-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Connection Line between Cards (desktop only) */}
                {index < cards.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#6D3CFF] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services Grid (optional, shown in image) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mobile Apps", description: "iOS & Android development" },
              { title: "Web Platforms", description: "Custom web applications" },
              { title: "UI/UX Design", description: "User-centered design" },
              { title: "AI Solutions", description: "Machine learning integration" }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6D3CFF]/10 flex items-center justify-center">
                    <FiCheckCircle className="w-5 h-5 text-[#6D3CFF]" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{service.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator (desktop only) */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col items-center space-y-4">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => {
                const element = cardsRef.current[index];
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="relative group"
              aria-label={`Scroll to ${card.title}`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCard === card.id 
                  ? 'bg-[#6D3CFF] scale-125' 
                  : 'bg-gray-300 group-hover:bg-[#6D3CFF]'
              }`} />
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xs font-medium text-gray-600 whitespace-nowrap">
                  {card.title.split(" ")[0]}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
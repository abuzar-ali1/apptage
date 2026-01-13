"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Layout, Database, ShoppingBag } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Advisory & Design",
    description: "Bringing your ideas to life with intuitive design, powerful branding, and user-centered experiences.",
    features: ["Advisory", "Design", "UI/UX Strategy", "Brand Identity"],
    icon: <Layout className="w-8 h-8 text-white" />,
    primaryButton: "Schedule A Call",
    secondaryButton: "Learn More",
    accent: "bg-purple-500"
  },
  {
    id: 2,
    title: "Development Services",
    description: "Building robust, scalable digital solutions from mobile apps to custom web platforms and everything in between.",
    features: ["App Development", "Custom Software", "Web Development"],
    icon: <Code2 className="w-8 h-8 text-white" />,
    primaryButton: "Schedule A Call",
    secondaryButton: "Learn More",
    accent: "bg-green-500"
  },
  {
    id: 3,
    title: "Ecommerce Solutions",
    description: "Optimizing your eCommerce platform with tailored designs, development, and integrations to maximize growth.",
    features: ["Shopify", "Magento", "BigCommerce", "WooCommerce"],
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    primaryButton: "Schedule A Call",
    secondaryButton: "Learn More",
    accent: "bg-blue-500"
  },
  {
    id: 4,
    title: "Data & Cloud Services",
    description: "Enabling smarter business decisions with data-driven insights, cloud migration, and scalable infrastructure.",
    features: ["Cloud Consulting", "Data Solutions", "AWS / Azure"],
    icon: <Database className="w-8 h-8 text-white" />,
    primaryButton: "Schedule A Call",
    secondaryButton: "Learn More",
    accent: "bg-pink-500"
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-[#242424] min-h-screen w-full relative font-sans">
      <div className="container mx-auto px-6 py-24">
        {/* items-start is important here. It ensures the flex container 
          doesn't force the left column to stretch awkwardly, allowing 'sticky' to work relative to the viewport.
        */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-start relative">
          
          {/* --- Left Column: Sticky Content --- */}
          {/* 1. We use lg:sticky so it only sticks on large screens (desktop).
             2. top-32 gives it some breathing room from the top of the browser.
             3. self-start ensures it doesn't stretch to the height of the right column, allowing it to glide.
          */}
          <div className="lg:w-5/12 xl:w-1/2 lg:sticky lg:top-32 self-start mb-12 lg:mb-0">
            <div>
              {/* Tag */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#6D3CFF] shadow-[0_0_12px_rgba(109,60,255,0.5)]"></span>
                <span className="text-[#C9C3E0] font-medium tracking-wide">What We Offer</span>
              </motion.div>

              {/* Heading */}
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-4xl xl:text-5xl font-[500] text-white mb-6"
              >
                Tailored Digital Solutions to Fuel <span className="text-[#6D3CFF]">Your Success</span>
              </motion.h3>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
              >
                At Apptage, we bring strategy, design, and technology together to craft solutions that deliver measurable impact. Whether you're scaling your business or launching a new product, we provide custom solutions.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5932EE] hover:bg-[#1a1239] text-white font-semibold py-3 px-9 rounded-xl transition-all shadow-lg shadow-[#6D3CFF]/20"
              >
                Book A Call
              </motion.button>
            </div>
          </div>

          {/* --- Right Column: Scrolling Cards --- */}
          <div className="lg:w-7/12 xl:w-1/2 flex flex-col gap-8 pb-12">
            {cards.map((card, index) => (
              <ServiceCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-[#222225] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-[#6D3CFF]/30 transition-colors duration-300"
    >
      {/* Icon Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-[#2A2A2E] flex items-center justify-center group-hover:bg-[#6D3CFF] transition-colors duration-300">
          <div className="group-hover:scale-110 transition-transform duration-300">
            {card.icon}
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">{card.title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-lg leading-relaxed mb-8">
        {card.description}
      </p>

      {/* Features List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-10">
        {card.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-[#6D3CFF] transition-colors" />
            <span className="text-gray-300 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>

      {/* Buttons Action Area */}
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#5932EE] hover:bg-[#1a1239] text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {card.primaryButton}
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="border border-white/20 hover:border-white text-white font-normal py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
        >
          {card.secondaryButton}
        </motion.button>
      </div>
    </motion.div>
  );
}
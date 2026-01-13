"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Coins, HeartPulse, ShoppingCart, Gamepad2, Store, 
  Car, Scale, Utensils, Building2, GraduationCap, 
  Factory, Lightbulb, Clapperboard, Signal, Landmark, 
  Truck, Building
} from "lucide-react";
import Link from "next/link";

// Data mapped to the icons
const industries = [
  { icon: <Coins />, name: "Fintech" },
  { icon: <HeartPulse />, name: "Healthcare" },
  { icon: <ShoppingCart />, name: "E-commerce" },
  { icon: <Gamepad2 />, name: "Gaming" },
  { icon: <Store />, name: "Retail" },
  { icon: <Car />, name: "Automotive" },
  { icon: <Scale />, name: "Legal" },
  { icon: <Utensils />, name: "Food & Beverage" },
  { icon: <Building2 />, name: "Real Estate" },
  { icon: <GraduationCap />, name: "Education" },
  { icon: <Factory />, name: "Manufacturing" },
  { icon: <Lightbulb />, name: "Energy & Utilities" },
  { icon: <Clapperboard />, name: "Media & Entertainment" },
  { icon: <Signal />, name: "Telecommunications" },
  { icon: <Landmark />, name: "Finance & Insurance" },
  { icon: <Truck />, name: "Logistics & Transportation" },
  { icon: <Building />, name: "Government & Public Sector" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function IndustriesSection() {
  return (
    <section className="bg-white py-16 px-4 flex items-center">
      <div className="container mx-auto">
        
        {/* --- Header Section --- */}
        <div className="mb-12">
          {/* Label with Dot */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-3 h-3 bg-[#6A35FF] rounded-full"></div>
            <span className="text-gray-900 text-lg font-bold">Industries</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-semibold text-[#1F1F1F] leading-tight mb-6"
          >
            Our Expertise Across <span className="text-[#6A35FF]">Multiple </span> Industries
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-base md:text-lg font-semibold leading-relaxed max-w-4xl"
          >
            With extensive experience across a variety of sectors, Apptage’s solutions are designed to meet the specific challenges and goals of each industry. No matter your sector, we’ve got the tools and expertise to deliver results.
          </motion.p>
        </div>

        {/* --- Industries Grid --- */}
        <div className="space-y-6 xl:space-y-14">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 2xl:gap-10"
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 2xl:gap-4 group cursor-pointer"
              >
                {/* Icon Circle */}
                <div className="w-10 h-10 bg-[#EEEBFD] flex items-center justify-center rounded-full flex-shrink-0 group-hover:drop-shadow-lg transition-all duration-500 ease-in-out">
                  {/* Using standard Lucide icon size inside */}
                  {React.cloneElement(industry.icon, { 
                    className: "w-5 h-5 text-[#6A35FF] group-hover:scale-110 transition-transform duration-300" 
                  })}
                </div>
                
                {/* Text Label */}
                <span className="text-gray-800 text-xs sm:text-base font-medium group-hover:text-[#4B29B5] transition-colors duration-300">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* --- Footer Text --- */}
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="text-gray-600 font-medium pt-4"
          >
            Not sure if your industry fits?{" "}
            <a className="text-[#6A35FF] font-semibold hover:underline" href="tel:855-605-8389">
              Talk to our experts{" "}
            </a> 
            we’ll shape a digital solution for your business.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
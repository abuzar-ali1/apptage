"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Coins, HeartPulse, ShoppingCart, Gamepad2, Store, 
  Car, Scale, Utensils, Building2, GraduationCap, 
  Factory, Lightbulb, Clapperboard, Signal, Landmark, 
  Truck, Building, MessageCircle 
} from "lucide-react";
import Link from "next/link";

// Updated data to match the image order and icons
const industries = [
  { icon: <Coins className="w-5 h-5" />, name: "Fintech" },
  { icon: <HeartPulse className="w-5 h-5" />, name: "Healthcare" },
  { icon: <ShoppingCart className="w-5 h-5" />, name: "E-commerce" },
  { icon: <Gamepad2 className="w-5 h-5" />, name: "Gaming" },
  { icon: <Store className="w-5 h-5" />, name: "Retail" },
  { icon: <Car className="w-5 h-5" />, name: "Automotive" },
  { icon: <Scale className="w-5 h-5" />, name: "Legal" },
  { icon: <Utensils className="w-5 h-5" />, name: "Food & Beverage" },
  { icon: <Building2 className="w-5 h-5" />, name: "Real Estate" },
  { icon: <GraduationCap className="w-5 h-5" />, name: "Education" },
  { icon: <Factory className="w-5 h-5" />, name: "Manufacturing" },
  { icon: <Lightbulb className="w-5 h-5" />, name: "Energy & Utilities" },
  { icon: <Clapperboard className="w-5 h-5" />, name: "Media & Entertainment" },
  { icon: <Signal className="w-5 h-5" />, name: "Telecommunications" },
  { icon: <Landmark className="w-5 h-5" />, name: "Finance & Insurance" },
  { icon: <Truck className="w-5 h-5" />, name: "Logistics & Transportation" },
  { icon: <Building className="w-5 h-5" />, name: "Government & Public Sector" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        
        {/* Top Header Section - Full Width */}
        <div className="max-w-6xl mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#6D3CFF]"></span>
            <span className="text-gray-900 font-semibold text-lg">Industries</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8 tracking-tight"
          >
            Our Expertise Across <span className="text-[#6D3CFF]">Multiple</span> Industries
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-5xl"
          >
            With extensive experience across a variety of sectors, Apptage's solutions are designed to meet the specific challenges and goals of each industry. No matter your sector, we've got the tools and expertise to deliver results.
          </motion.p>
        </div>

        {/* Industries Grid - Full Width Responsive Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-6"
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-full bg-[#EFEEFF] flex items-center justify-center text-[#6D3CFF] group-hover:bg-[#6D3CFF] group-hover:text-white transition-all duration-300 ease-out shadow-sm">
                {industry.icon}
              </div>
              
              {/* Name */}
              <span className="text-gray-700 text-lg font-medium group-hover:text-[#6D3CFF] transition-colors duration-300">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Link Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 text-gray-700 text-lg md:text-xl"
        >
          Not sure if your industry fits?{" "}
          <Link href="/contact" className="text-[#6D3CFF] font-semibold hover:underline decoration-2 underline-offset-4">
            Talk to our experts
          </Link>{" "}
          we'll shape a digital solution for your business.
        </motion.div>
      </div>

      {/* Persistent Floating Chat Button - Matching image style */}
      <motion.div   
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#9333EA] rounded-full flex items-center justify-center shadow-2xl cursor-pointer z-[100]"
      >
        <MessageCircle className="w-8 h-8 text-white fill-white/10" />
      </motion.div>
    </section>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, Facebook, Instagram, 
  MapPin, ArrowRight 
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#0D0D0F] text-white pt-20 pb-10 border-t border-white/5 font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        
        {/* --- TOP SECTION: Links Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16"
        >
          {/* Column 1: Development */}
          <motion.div variants={itemVariants} className="space-y-6">
            <FooterHeading title="Development" />
            <ul className="space-y-4">
              {['Cross Platform Apps', 'Native Mobile Apps', 'Emerging Technologies', 'Web Development', 'Artificial Intelligence', 'Custom Software Development'].map((item) => (
                <li key={item}>
                  <FooterLink href="#">{item}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Advisory & Design */}
          <motion.div variants={itemVariants} className="space-y-6">
            <FooterHeading title="Advisory & Design" />
            <ul className="space-y-4">
              {['Advisory', 'Design', 'Branding', 'UI UX Design', 'Product Design'].map((item) => (
                <li key={item}>
                  <FooterLink href="#">{item}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Ecommerce */}
          <motion.div variants={itemVariants} className="space-y-6">
            <FooterHeading title="Ecommerce" />
            <ul className="space-y-4">
              {['Shopify', 'Bigcommerce', 'Magento', 'WooCommerce', 'Custom Ecommerce'].map((item) => (
                <li key={item}>
                  <FooterLink href="#">{item}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Data & Cloud */}
          <motion.div variants={itemVariants} className="space-y-6">
            <FooterHeading title="Data & Cloud" />
            <ul className="space-y-4">
              {['Cloud Consulting', 'Data Analytics', 'Data Strategy', 'Cloud Migration'].map((item) => (
                <li key={item}>
                  <FooterLink href="#">{item}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 5: Insights (Buttons) */}
          <motion.div variants={itemVariants} className="space-y-6">
            <FooterHeading title="Insights" />
            <div className="flex flex-col items-start gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#1e1e24" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-all text-sm font-medium bg-[#161618]"
              >
                Case Study
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#1e1e24" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-all text-sm font-medium bg-[#161618]"
              >
                About Us
              </motion.button>
            </div>
          </motion.div>
        </motion.div>


        {/* --- MIDDLE SECTION: Locations / Contact / Follow --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-y border-white/10 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0"
        >
          
          {/* 1. Locations */}
          <div className="lg:pr-10">
            <FooterHeading title="Locations" />
            <p className="text-gray-400 mt-4 leading-relaxed max-w-xs">
              11658 S. Copper Sky Dr, South Jordan, UT, 84009, USA
            </p>
          </div>

          {/* 2. Contact Us (Bordered Middle) */}
          <div className="lg:border-x border-white/10 lg:px-10 flex flex-col justify-start">
            <FooterHeading title="Contact Us" />
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              {/* Phone */}
              <a href="tel:855-605-8389" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#6D3CFF] group-hover:border-[#6D3CFF] transition-all duration-300">
                  <Phone className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">855–605–8389</span>
              </a>
              
              {/* Email */}
              <a href="mailto:letstalk@apptage.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#6D3CFF] group-hover:border-[#6D3CFF] transition-all duration-300">
                  <Mail className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">letstalk@apptage.com</span>
              </a>
            </div>
          </div>

          {/* 3. Follow Us */}
          <div className="lg:pl-10">
            <FooterHeading title="Follow Us" />
            <div className="flex gap-4 mt-6">
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
            </div>
          </div>
        </motion.div>


        {/* --- BOTTOM SECTION: Copyright & Payments --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="pt-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-0"
        >
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2026 Apptage. All Rights Reserved.
          </div>

          {/* Right Side: Links & Payments */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            
            {/* Horizontal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
              <Link href="#" className="hover:text-white transition-colors">Industries</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-sm text-gray-500 mr-2">Acceptable Payment Methods:</span>
              {/* Placeholder Images for Payment Logos */}
              {['visa', 'apple', 'amex', 'paypal', 'wise', 'zelle', 'mastercard'].map((pay, i) => (
                <div key={i} className="h-6 bg-white/10 rounded px-1 flex items-center justify-center">
                   {/* Replace this img with your actual assets */}
                   {/* <img src={`/images/payments/${pay}.png`} alt={pay} className="h-4 w-auto" /> */}
                   
                   {/* Temporary Text Placeholder to show layout */}
                   <span className="text-[10px] uppercase font-bold text-white/50 px-1">{pay}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}

// --- Helper Components ---

function FooterHeading({ title }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#6D3CFF]"></span>
      <h4 className="text-white font-semibold text-lg">{title}</h4>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-400 hover:text-[#6D3CFF] hover:pl-2 transition-all duration-300 text-[15px] block">
      {children}
    </Link>
  );
}

function SocialIcon({ icon }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-[#6D3CFF] hover:border-[#6D3CFF] hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
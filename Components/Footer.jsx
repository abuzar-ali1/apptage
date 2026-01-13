"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  ChevronRight,
  MapPin 
} from "lucide-react";
import Link from "next/link"; // Or use standard <a href> if not using Next.js

const Footer = () => {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-[#131313] text-white pt-20 lg:pt-32 pb-8 lg:pb-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* === MAIN LINKS GRID === */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 mb-12"
        >
          {/* Column 1: Development */}
          <div className="space-y-6">
            <FooterHeader title="Development" />
            <div className="space-y-3 lg:space-y-4">
              <FooterLink href="#">Cross Platform Apps</FooterLink>
              <FooterLink href="#">Native Mobile Apps</FooterLink>
              <FooterLink href="#">Emerging Technologies</FooterLink>
              <FooterLink href="#">Web Development</FooterLink>
              <FooterLink href="#">Artificial Intelligence</FooterLink>
              <FooterLink href="#">Custom Software</FooterLink>
            </div>
          </div>

          {/* Column 2: Advisory & Design */}
          <div className="space-y-6">
            <FooterHeader title="Advisory & Design" />
            <div className="space-y-3 lg:space-y-4">
              <FooterLink href="#">Advisory</FooterLink>
              <FooterLink href="#">Design</FooterLink>
              <FooterLink href="#">Branding</FooterLink>
              <FooterLink href="#">UI UX Design</FooterLink>
              <FooterLink href="#">Product Design</FooterLink>
            </div>
          </div>

          {/* Column 3: Ecommerce */}
          <div className="space-y-6">
            <FooterHeader title="Ecommerce" />
            <div className="space-y-3 lg:space-y-4">
              <FooterLink href="#">Shopify</FooterLink>
              <FooterLink href="#">Bigcommerce</FooterLink>
              <FooterLink href="#">Magento</FooterLink>
              <FooterLink href="#">WooCommerce</FooterLink>
              <FooterLink href="#">Custom Ecommerce</FooterLink>
            </div>
          </div>

          {/* Column 4: Data & Cloud */}
          <div className="space-y-6">
            <FooterHeader title="Data & Cloud" />
            <div className="space-y-3 lg:space-y-4">
              <FooterLink href="#">Cloud Consulting</FooterLink>
              <FooterLink href="#">Data Analytics</FooterLink>
              <FooterLink href="#">Data Strategy</FooterLink>
              <FooterLink href="#">Cloud Migration</FooterLink>
            </div>
          </div>

          {/* Column 5: Insights (Pills) */}
          <div className="space-y-6 col-span-2 md:col-span-1 lg:col-span-1">
            <FooterHeader title="Insights" />
            <div className="space-y-4 flex flex-col items-start">
              <PillButton href="#">Case Study</PillButton>
              <PillButton href="#">About Us</PillButton>
            </div>
          </div>
        </motion.div>


        {/* === MIDDLE SECTION: INFO & CONTACT === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:flex gap-10 items-stretch border-t border-gray-800 py-10"
        >
          {/* Location */}
          <div className="space-y-4 flex-1">
            <FooterHeader title="Locations" />
            <div className="flex items-start space-x-2 text-[#C9C3E0]">
              <p className="max-w-[250px] leading-relaxed">
                11658 S. Copper Sky Dr, South Jordan, UT, 84009, USA
              </p>
            </div>
          </div>

          {/* Contact Us (Bordered Middle) */}
          <div className="flex-1 space-y-4 mt-8 md:mt-0 md:px-8 md:border-l md:border-r border-gray-800">
            <FooterHeader title="Contact Us" />
            <div className="flex flex-col xl:flex-row gap-6">
              <ContactItem icon={<Phone size={18} />} text="855-605-8389" href="tel:855-605-8389" />
              <ContactItem icon={<Mail size={18} />} text="letstalk@apptage.com" href="mailto:letstalk@apptage.com" />
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4 mt-8 md:mt-0 flex-1 md:flex md:flex-col md:items-center">
            <div className="w-full md:w-auto">
              <FooterHeader title="Follow Us" />
              <div className="flex items-center gap-3 mt-4">
                <SocialButton href="https://facebook.com" icon={<Facebook size={20} />} />
                <SocialButton href="https://instagram.com" icon={<Instagram size={20} />} />
              </div>
            </div>
          </div>
        </motion.div>


        {/* === BOTTOM SECTION: COPYRIGHT & LINKS === */}
        <div className="border-t border-gray-800 pt-8 mt-4">
          
          {/* Desktop Inline Links */}
          <div className="hidden lg:flex justify-end mb-6">
            <ul className="flex items-center space-x-8">
              <li><FooterLink href="/contact" small>Contact Us</FooterLink></li>
              <li><FooterLink href="/industries" small>Industries</FooterLink></li>
              <li><FooterLink href="/privacy" small>Privacy Policy</FooterLink></li>
              <li><FooterLink href="/terms" small>Terms and Conditions</FooterLink></li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#C9C3E0] text-sm md:text-md text-center md:text-left">
              © 2026 Apptage. All Rights Reserved.
            </p>

            {/* Payment Methods */}
            <div className="hidden lg:flex items-center space-x-4">
              <span className="text-[#C9C3E0] text-sm">Acceptable Payment Methods:</span>
              <div className="flex gap-2">
                {/* Replaced img tags with simple divs for demonstration. 
                    Uncomment img tags and add your src paths to use real images. */}
                {['Visa', 'Pay', 'Amex', 'PayPal', 'Wise', 'Zelle'].map((pm) => (
                   <div key={pm} className="h-8 px-2 bg-white/10 rounded flex items-center justify-center min-w-[40px]">
                      {/* <img src={`/img/footer/${pm.toLowerCase()}.webp`} alt={pm} className="h-full w-auto object-contain" /> */}
                      <span className="text-[10px] uppercase font-bold text-gray-400">{pm}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

// ============================================
// SUB-COMPONENTS for Clean Code & Reusability
// ============================================

// 1. Section Header with Dot
const FooterHeader = ({ title }) => (
  <div className="flex items-center space-x-3">
    <div className="w-2 h-2 bg-[#6A35FF] rounded-full"></div>
    <h3 className="text-white font-semibold text-lg tracking-wide">{title}</h3>
  </div>
);

// 2. Animated Link with Slide-in Arrow
const FooterLink = ({ href, children, small = false }) => (
  <Link 
    href={href} 
    className={`
      group flex items-center gap-2 overflow-hidden text-[#C9C3E0] hover:text-white transition-colors duration-300
      ${small ? 'text-xs lg:text-sm' : 'text-sm lg:text-[15px]'}
    `}
  >
    {/* The Arrow: negative margin pulls it out, hover brings it in */}
    <span className="-ml-5 group-hover:ml-0 transition-all duration-300 ease-in-out text-[#6A35FF]">
      <ChevronRight size={16} strokeWidth={3} />
    </span>
    <span>{children}</span>
  </Link>
);

// 3. Pill Button (Insights)
const PillButton = ({ href, children }) => (
  <Link href={href} className="px-5 py-2 rounded-full bg-[#1F1F1F] text-[#C9C3E0] text-sm hover:text-white hover:bg-[#2a2a2a] transition-all duration-300 flex items-center gap-2 group">
     <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
        <ChevronRight size={14} />
     </span>
     {children}
  </Link>
);

// 4. Contact Info Item
const ContactItem = ({ icon, text, href }) => (
  <a href={href} className="flex items-center space-x-3 group">
    <div className="border border-[#6A35FF] rounded-full p-2.5 text-white group-hover:bg-[#6A35FF] transition-all duration-300">
      {icon}
    </div>
    <span className="text-[#C9C3E0] group-hover:text-white transition-colors duration-300 text-sm xl:text-md">
      {text}
    </span>
  </a>
);

// 5. Social Media Icon Button
const SocialButton = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="border border-[#6A35FF] rounded-full p-2.5 text-white hover:bg-[#6A35FF] hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
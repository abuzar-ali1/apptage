"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSmartphone, 
  FiGlobe, 
  FiCpu, 
  FiCode,
  FiArrowRight,
  FiExternalLink
} from "react-icons/fi";

const DevelopmentMegaMenu = ({ 
  isOpen, 
  onClose, 
  anchorRef,
  isMobile = false 
}) => {
  const menuRef = useRef(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Check if click is not on the anchor element
        if (anchorRef && anchorRef.current && !anchorRef.current.contains(event.target)) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, anchorRef]);

  // Handle escape key
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  // Menu data structure
  const menuData = [
    {
      id: "app-dev",
      title: "App Development",
      icon: <FiSmartphone />,
      subheaders: [
        {
          id: "cross-platform",
          title: "Cross Platform Apps",
          items: [
            "Flutter App Development",
            "HTML5 App Development",
            "Nativescript App Development"
          ]
        },
        {
          id: "native-mobile",
          title: "Native Mobile Apps",
          items: [
            "IOS App Development",
            "Android App Development"
          ]
        },
        {
          id: "emerging-tech",
          title: "Emerging Technologies",
          items: [
            "AR/VR App Development",
            "IOT App Development",
            "Wearable App Development"
          ]
        }
      ],
      standaloneItems: [
        { id: "ionic", title: "Ionic App Development" },
        { 
          id: "react-native", 
          title: "React Native App Development",
          highlight: true,
          externalIcon: true
        },
        { id: "elearning", title: "Elearning Development" }
      ]
    },
    {
      id: "web-dev",
      title: "Web Development",
      icon: <FiGlobe />,
      items: [
        "Website Development",
        "Progressive Web App",
        "Custom Web App Development"
      ]
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      icon: <FiCpu />,
      items: [
        "Generative AI",
        "Ai Agent Development",
        "Natural Processing Language"
      ]
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      icon: <FiCode />,
      items: [
        "ERP Solution",
        "POS Solution",
        "HRMS Solution",
        "CRM Solution",
        "CMS Solution",
        "Fleet Managment Solution"
      ]
    }
  ];

  // Animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.22,
        ease: "easeOut",
        staggerChildren: 0.02,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.18,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 }
  };

  // Desktop Mega Menu
  const renderDesktopMenu = () => (
    <motion.div
      ref={menuRef}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute left-1/2 transform -translate-x-1/2 top-full mt-6 w-[1200px] max-w-[90vw] bg-white rounded-xl shadow-[0_12px_30px_rgba(16,16,24,0.08)] border border-[#E7E7E8] overflow-hidden z-50"
      role="menu"
      aria-label="Development menu"
      
    >
      {/* Live region for accessibility */}
      <div aria-live="polite" className="sr-only">
        Development menu opened
      </div>

      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-4 gap-9">
          {menuData.map((column, colIndex) => (
            <div 
              key={column.id} 
              className={colIndex < 3 ? "border-r border-[#E7E7E8] pr-9" : ""}
            >
              {/* Column Header */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center mb-8"
              >
                <div className="w-9 h-9 rounded-lg bg-[#6D3CFF] flex items-center justify-center text-white mr-3">
                  {column.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111111]">
                  {column.title}
                </h3>
              </motion.div>

              {/* App Development Column (Complex) */}
              {column.id === "app-dev" && (
                <div className="space-y-6">
                  {/* Subheaders and their items */}
                  {column.subheaders.map((subheader) => (
                    <div key={subheader.id} className="mb-4">
                      <motion.div variants={itemVariants} className="flex items-center mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#6D3CFF] mr-2"></div>
                        <h4 className="text-sm font-bold text-[#111111]">
                          {subheader.title}
                        </h4>
                      </motion.div>
                      <ul className="space-y-2 pl-4">
                        {subheader.items.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            variants={itemVariants}
                            whileHover={{ x: -4 }}
                          >
                            <a
                              href="#"
                              className="group flex items-center text-sm text-[#333333] hover:text-[#6D3CFF] py-2 transition-all duration-160 focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] focus:ring-offset-2 rounded"
                              role="menuitem"
                              tabIndex={0}
                            >
                              <span className="relative">
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#6D3CFF] group-hover:w-full transition-all duration-160 origin-center"></span>
                              </span>
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Standalone Items */}
                  <div className="space-y-2">
                    {column.standaloneItems.map((item) => (
                      <motion.div 
                        key={item.id} 
                        variants={itemVariants}
                        whileHover={{ x: -4 }}
                      >
                        <a
                          href="#"
                          className={`group flex items-center justify-between text-sm py-2 transition-all duration-160 focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] focus:ring-offset-2 rounded ${
                            item.highlight 
                              ? "bg-[#6D3CFF]/5 hover:bg-[#6D3CFF]/10 text-[#6D3CFF] px-3 -mx-3" 
                              : "text-[#333333] hover:text-[#6D3CFF]"
                          }`}
                          role="menuitem"
                          tabIndex={0}
                        >
                          <span className="relative">
                            {item.title}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#6D3CFF] group-hover:w-full transition-all duration-160 origin-center"></span>
                          </span>
                          {item.externalIcon && (
                            <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Columns (Simple) */}
              {column.id !== "app-dev" && (
                <ul className="space-y-2">
                  {column.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      variants={itemVariants}
                      whileHover={{ x: -4 }}
                    >
                      <a
                        href="#"
                        className="group flex items-center text-sm text-[#333333] hover:text-[#6D3CFF] py-2 transition-all duration-160 focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] focus:ring-offset-2 rounded"
                        role="menuitem"
                        tabIndex={0}
                      >
                        <span className="relative">
                          {item}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#6D3CFF] group-hover:w-full transition-all duration-160 origin-center"></span>
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Mobile Accordion Menu
  const renderMobileMenu = () => (
    <motion.div
      ref={menuRef}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-white rounded-lg border border-[#E7E7E8] overflow-hidden"
      role="menu"
      aria-label="Development menu"
    >
      <div className="p-4">
        {menuData.map((column) => (
          <div key={column.id} className="mb-4 last:mb-0">
            {/* Accordion Header */}
            <button
              onClick={() => setActiveAccordion(activeAccordion === column.id ? null : column.id)}
              className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6D3CFF]"
              aria-expanded={activeAccordion === column.id}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-[#6D3CFF] flex items-center justify-center text-white mr-3">
                  {column.icon}
                </div>
                <span className="font-bold text-[#111111]">{column.title}</span>
              </div>
              <motion.div
                animate={{ rotate: activeAccordion === column.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiArrowRight className="w-4 h-4 text-gray-500" />
              </motion.div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence>
              {activeAccordion === column.id && (
                <motion.div
                  variants={accordionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-2 pl-4"
                >
                  {/* App Development Column Content */}
                  {column.id === "app-dev" && (
                    <div className="space-y-4">
                      {/* Subheaders */}
                      {column.subheaders.map((subheader) => (
                        <div key={subheader.id} className="mb-3">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 rounded-full bg-[#6D3CFF] mr-2"></div>
                            <h4 className="text-sm font-bold text-[#111111]">
                              {subheader.title}
                            </h4>
                          </div>
                          <ul className="space-y-1 pl-4">
                            {subheader.items.map((item, idx) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className="text-sm text-[#333333] hover:text-[#6D3CFF] py-1.5 block transition-colors"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Standalone Items */}
                      <div className="space-y-1">
                        {column.standaloneItems.map((item) => (
                          <a
                            key={item.id}
                            href="#"
                            className={`flex items-center justify-between text-sm py-1.5 transition-colors ${
                              item.highlight 
                                ? "text-[#6D3CFF] font-medium" 
                                : "text-[#333333] hover:text-[#6D3CFF]"
                            }`}
                          >
                            {item.title}
                            {item.externalIcon && (
                              <FiExternalLink className="w-3 h-3" />
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Other Columns Content */}
                  {column.id !== "app-dev" && (
                    <ul className="space-y-1">
                      {column.items.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="text-sm text-[#333333] hover:text-[#6D3CFF] py-1.5 block transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50">
          {isMobile ? renderMobileMenu() : renderDesktopMenu()}
        </div>
      )}
    </AnimatePresence>
  );
};

export default DevelopmentMegaMenu;
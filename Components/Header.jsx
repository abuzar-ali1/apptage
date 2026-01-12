"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiPhone, FiMail, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import DevelopmentMegaMenu from "./DevelopmentMegaMenu";

export default function Header() {
  const [devOpen, setDevOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDevOpen, setMobileDevOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const devRef = useRef(null);
  const insightsRef = useRef(null);
  const currencyRef = useRef(null);
  const mobileDevRef = useRef(null);

  // Track scroll for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (devRef.current && !devRef.current.contains(event.target)) {
        setDevOpen(false);
      }
      if (insightsRef.current && !insightsRef.current.contains(event.target)) {
        setInsightsOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setCurrencyOpen(false);
      }
      if (mobileDevRef.current && !mobileDevRef.current.contains(event.target)) {
        setMobileDevOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDevOpen(false);
        setInsightsOpen(false);
        setCurrencyOpen(false);
        setMobileDevOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Hover handlers with delay
  const [devHoverTimer, setDevHoverTimer] = useState(null);
  const [devLeaveTimer, setDevLeaveTimer] = useState(null);

  const handleDevMouseEnter = () => {
    clearTimeout(devLeaveTimer);
    setDevHoverTimer(setTimeout(() => setDevOpen(true), 60));
  };

  const handleDevMouseLeave = () => {
    clearTimeout(devHoverTimer);
    setDevLeaveTimer(setTimeout(() => setDevOpen(false), 120));
  };

  // Keyboard toggle handler
  const handleKeyToggle = (e, toggleFn, isOpen) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFn(!isOpen);
    }
  };

  return (
    <>
      {/* CSS Variables and Styles */}
      <style jsx>{`
        :root {
          --purple: #6D3CFF;
          --topbar-bg: #0F0F10;
          --topbar-text: #D8D8E0;
          --nav-bg: #FFFFFF;
          --nav-text: #111111;
          --muted-border: #E7E7E8;
          --panel-bg: #FFFFFF;
          --panel-text: #111111;
          --shadow: 0 12px 30px rgba(16,16,24,0.08);
        }
        
        body {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }
      `}</style>

      {/* Top utility bar */}
      <motion.div
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full bg-[var(--topbar-bg)] text-[var(--topbar-text)]"
      >
        <div className="max-w-7xl mx-auto h-9 flex items-center justify-between px-6">
          <div className="flex items-center gap-5 text-sm">
            <a 
              href="tel:8556058389" 
              className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] rounded"
              aria-label="Call 855-605-8389"
            >
              <FiPhone aria-hidden className="w-4 h-4" />
              <span>855-605-8389</span>
            </a> 
            <span className="text-gray-500">|</span>
            <a 
              href="mailto:letstalk@apptage.com" 
              className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] rounded"
              aria-label="Email letstalk@apptage.com"
            >
              <FiMail aria-hidden className="w-4 h-4" />
              <span>letstalk@apptage.com</span>
            </a>
          </div>

          <div ref={currencyRef} className="hidden md:block relative">
            <button
              onClick={() => setCurrencyOpen(!currencyOpen)}
              onKeyDown={(e) => handleKeyToggle(e, setCurrencyOpen, currencyOpen)}
              aria-haspopup="true"
              aria-expanded={currencyOpen}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 text-[var(--topbar-text)] text-sm hover:bg-black/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6D3CFF]"
              aria-label="Select currency"
            >
              <span className="font-medium">$USD</span>
              <FiChevronDown className={`transition-transform ${currencyOpen ? 'rotate-180' : ''}`} />   
            </button>

            {/* Currency Dropdown */}
            <AnimatePresence>
              {currencyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none">
                    $ USD
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none">
                    € EUR
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none">
                    £ GBP
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`w-full sticky top-0 z-40 bg-[var(--nav-bg)] transition-shadow duration-300 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="container max-w-8xl mx-auto h-18 flex items-center justify-between px-6 border-b" style={{ borderColor: "var(--muted-border)" }}>
          {/* Left: Logo */}
          <a 
            href="/" 
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] rounded"
            aria-label="Apptage Home"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-[#6D3CFF] flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12C4 9.23858 6.23858 7 9 7H14V17H9C6.23858 17 4 14.7614 4 12Z" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-2xl text-[var(--nav-text)]">Apptage</span>
            </div>
          </a>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Links">
            <a 
              href="#" 
              className="relative group text-[var(--nav-text)] focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] rounded"
            >
              <span className="inline-block group-hover:-translate-y-0.5 transition-transform">Home</span>
              <span className="absolute left-1/2 bottom-[-6px] w-0 h-0.5 bg-[#6D3CFF] origin-center group-hover:w-6 group-hover:left-[calc(50%-12px)] transition-all duration-200"></span>
            </a>

            {/* Development with Mega Menu */}
            <div 
              ref={devRef}
              className="relative"
              onMouseEnter={handleDevMouseEnter}
              onMouseLeave={handleDevMouseLeave}
            >
              <button
                onClick={() => setDevOpen(!devOpen)}
                onKeyDown={(e) => handleKeyToggle(e, setDevOpen, devOpen)}
                aria-haspopup="true"
                aria-expanded={devOpen}
                className="flex items-center gap-1 text-[var(--nav-text)] focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] rounded"
              >
                <span className="group-hover:-translate-y-0.5 transition-transform">Development</span>
                <FiChevronDown className={`transition-transform ${devOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Development Mega Menu */}
              <DevelopmentMegaMenu
                isOpen={devOpen}
                onClose={() => setDevOpen(false)}
                anchorRef={devRef}
                isMobile={false}
              />
            </div>

            <a 
              href="#" 
              className="relative group text-[var(--nav-text)] focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] rounded"
            >
              <span className="inline-block group-hover:-translate-y-0.5 transition-transform">Industries</span>
              <span className="absolute left-1/2 bottom-[-6px] w-0 h-0.5 bg-[#6D3CFF] origin-center group-hover:w-6 group-hover:left-[calc(50%-12px)] transition-all duration-200"></span>
            </a>

            {/* Insights Dropdown */}
            <div ref={insightsRef} className="relative">
              <button
                onClick={() => setInsightsOpen(!insightsOpen)}
                onKeyDown={(e) => handleKeyToggle(e, setInsightsOpen, insightsOpen)}
                aria-haspopup="true"
                aria-expanded={insightsOpen}
                className="flex items-center gap-1 text-[var(--nav-text)] focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] rounded"
              >
                <span className="group-hover:-translate-y-0.5 transition-transform">Insights</span>
                <FiChevronDown className={`transition-transform ${insightsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {insightsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute left-0 mt-3 w-48 bg-white border border-[#E7E7E8] rounded-lg shadow-lg py-2 z-50"
                    role="menu"
                    aria-label="Insights menu"
                  >
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none" role="menuitem">Blog</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none" role="menuitem">Case Studies</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none" role="menuitem">Whitepapers</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a 
              href="#" 
              className="relative group text-[var(--nav-text)] focus:outline-none focus:ring-2 focus:ring-[#6D3CFF] rounded"
            >
              <span className="inline-block group-hover:-translate-y-0.5 transition-transform">Contact</span>
              <span className="absolute left-1/2 bottom-[-6px] w-0 h-0.5 bg-[#6D3CFF] origin-center group-hover:w-6 group-hover:left-[calc(50%-12px)] transition-all duration-200"></span>
            </a>
          </nav>

          {/* Right: CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:flex items-center justify-center px-6 py-3 rounded-full bg-[#6D3CFF] text-white font-semibold hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#6D3CFF]/30 transition-transform duration-180"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              aria-label="Let's Talk"
            >
              Let's Talk
            </button>

            <button
              className="md:hidden inline-flex items-center justify-center p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden bg-[var(--nav-bg)] border-b"
              style={{ borderColor: "var(--muted-border)" }}
            >
              <div className="px-6 pt-4 pb-6 space-y-4">
                <a href="#" className="block py-3 text-[var(--nav-text)] font-medium">Home</a>

                {/* Mobile Development Accordion */}
                <div ref={mobileDevRef} className="border-t border-[#E7E7E8] pt-4">
                  <button
                    onClick={() => setMobileDevOpen(!mobileDevOpen)}
                    className="flex items-center justify-between w-full py-3 text-[var(--nav-text)] font-medium focus:outline-none"
                    aria-expanded={mobileDevOpen}
                  >
                    <span>Development</span>
                    <FiChevronDown className={`transition-transform ${mobileDevOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileDevOpen && (
                    <DevelopmentMegaMenu
                      isOpen={mobileDevOpen}
                      onClose={() => setMobileDevOpen(false)}
                      anchorRef={mobileDevRef}
                      isMobile={true}
                    />
                  )}
                </div>

                <a href="#" className="block py-3 text-[var(--nav-text)] font-medium">Industries</a>

                {/* Mobile Insights Accordion */}
                <div className="border-t border-[#E7E7E8] pt-4">
                  <button
                    onClick={() => setInsightsOpen(!insightsOpen)}
                    className="flex items-center justify-between w-full py-3 text-[var(--nav-text)] font-medium focus:outline-none"
                    aria-expanded={insightsOpen}
                  >
                    <span>Insights</span>
                    <FiChevronDown className={`transition-transform ${insightsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {insightsOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      <a href="#" className="block py-2 text-[var(--nav-text)]">Blog</a>
                      <a href="#" className="block py-2 text-[var(--nav-text)]">Case Studies</a>
                      <a href="#" className="block py-2 text-[var(--nav-text)]">Whitepapers</a>
                    </div>
                  )}
                </div>

                <a href="#" className="block py-3 text-[var(--nav-text)] font-medium">Contact</a>

                <button className="w-full mt-4 px-6 py-3 rounded-full bg-[#6D3CFF] text-white font-semibold focus:outline-none focus:ring-4 focus:ring-[#6D3CFF]/30">
                  Let's Talk
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
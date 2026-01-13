"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit Function
  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call
    console.log("Form Data Submitted:", formData);
    
    setTimeout(() => {
      alert(`Thank you, ${formData.fullName}! We have received your message.`);
      setIsSubmitting(false);
      // Optional: Reset form
      setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
    }, 1500);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-white py-16">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        // Using a dark bg color to match image, assuming the bg-url might be missing
        className="container mx-auto p-8 lg:p-16 bg-[#1f1f1f] lg:bg-[url(/img/home/form-bg.png)] bg-cover bg-no-repeat rounded-2xl overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#5932EE] rounded-full"></div>
              <span className="text-[#C9C3E0] text-md font-medium uppercase tracking-wider">Contact Us</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Let's Make<br />
              Something <span className="text-[#5932EE]">Amazing Together!</span>
            </motion.h2>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl text-white font-semibold mb-2">Got Questions? We Have Answers.</h3>
              <p className="text-[#C9C3E0] leading-relaxed">
                Whether you're looking to build a groundbreaking app, a cutting-edge
                website, or something completely custom—our team is here to help you
                turn your ideas into reality. Don't just contact us—start a conversation that
                could change your business forever.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <div className="lg:flex items-center space-x-5 space-y-4 lg:space-y-0">
                {/* Phone */}
                <div className="flex items-center gap-2 group cursor-pointer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl text-[#5932EE] group-hover:scale-110 transition-transform duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                  <a className="text-white text-lg font-medium duration-300 ease-in-out group-hover:text-[#6AF790]" href="tel:855-605-8389">855-605-8389</a>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-2 group cursor-pointer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl text-[#5932EE] group-hover:scale-110 transition-transform duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M464 80H48a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM265.82 284.63a16 16 0 0 1-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z"></path>
                  </svg>
                  <a className="text-white text-lg font-medium duration-300 ease-in-out group-hover:text-[#6AF790]" href="mailto:letstalk@apptage.com">letstalk@apptage.com</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Form Card */}
          <div className="flex justify-end-safe w-full">
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-2xl min-w-full lg:min-w-md xl:min-w-lg relative z-10"
            >
              <h2 className="text-gray-900 text-2xl xl:text-3xl font-bold leading-10 mb-8">Ready to get started?</h2>
              
              <form className="space-y-6" onSubmit={submitForm}>
                <div className="group">
                  <input 
                    placeholder="Full Name" 
                    className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-[#5932EE] focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300" 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input 
                    placeholder="Business Email" 
                    className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-[#5932EE] focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300" 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input 
                    placeholder="Phone Number" 
                    className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-[#5932EE] focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300" 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Message" 
                    rows="4" 
                    className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-200 focus:border-[#5932EE] focus:ring-0 focus:outline-none bg-transparent resize-none transition-colors duration-300"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="relative inline-block w-full">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto border rounded-lg font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#5932EE] text-white border-[#5932EE] hover:bg-[#1a1239] hover:shadow-lg text-sm sm:text-md py-3 px-6 sm:px-8 lg:px-10 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
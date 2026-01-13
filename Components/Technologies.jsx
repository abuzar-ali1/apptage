"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data Structure (Cleaned - Removed manual image arrays) ---
const techData = [
  {
    id: "mobile",
    label: "Mobile Apps",
    title: "Mobile Application Development",
    description: "We build high-performance native and cross-platform mobile applications tailored to your specific business needs.",
    groups: [
      {
        name: "iOS",
        techs: ["Swift", "Ui kit", "Rxswift", "Swift combine", "Mvm", "Alamofire", "Core data"]
      },
      {
        name: "Android",
        techs: ["Kotline", "Mvvm", "Java", "Rx java", "Retrofit", "Jetpack"]
      }
    ]
  },
  {
    id: "web",
    label: "Web Platform",
    title: "Web Platform Development",
    description: "Scalable and responsive web solutions using the latest frameworks to ensure speed, SEO optimization, and user engagement.",
    groups: [
      {
        name: "Frontend",
        techs: ["React.js", "Next.js", "Vue.js", "TypeScript", "HTML", "CSS", "JavaScript", "Redux", "GraphQI", "Apollo"]
      },
      {
        name: "Backend",
        techs: ["Node.js", "Python", "Scala", "Php", "Spring", "Laravel", "Net"]
      },
      {
        name: "CMS",
        techs: ["Wordpress", "Magento", "Shopify", "Contentful"]
      }
    ]
  },
  { 
    id: "cross",
    label: "Cross Platform",
    title: "Cross-Platform Solutions",
    description: "Write once, run everywhere. Efficient development for both iOS and Android without compromising performance.",
    groups: [
      {
        name: "React",
        techs: ["Redux", "Mobx", "RxjS", "Redux Thunk"]
      },
      {
        name: "Flutter",
        techs: ["Block", "Dart", "MVM", "Rx dart"]
      }
    ]
  },
  {
    id: "games",
    label: "Games",
    title: "Game Development",
    description: "Immersive gaming experiences ranging from 2D mobile games to complex 3D environments.",
    groups: [
      {
        name: "Engines",
        techs: ["Unity", "Unreal", "Godot", "Cryengine"]
      },
      {
        name: "Servers",
        techs: ["nakama", "Photon", "AWS"]
      }
    ]
  },
  {
    id: "database",
    label: "Data Base",
    title: "Database Architecture",
    description: "Robust data management solutions ensuring security, integrity, and high availability for your applications.",
    groups: [
      {
        name: "SQL & NoSQL",
        techs: ["MongoDB", "MySQL", "dynamodb", "Redis", "Elasticsearch"]
      }
    ]
  },
  {
    id: "cloud",
    label: "Cloud & Devops",
    title: "Cloud Infrastructure & DevOps",
    description: "Streamlined deployment pipelines and scalable cloud architecture to keep your business running 24/7.",
    groups: [
      {
        name: "DevOps",
        techs: ["Nginx", "Docker", "Kubernetes", "Gradle"]
      },
      {
        name: "Platforms",
        techs: ["Appium", "Azure", "Rackspace", "Linode", "Firebase", "Oracle", "Heroku"]
      }
    ]
  }
];

const getTechImage = (techName) => {
  const formattedName = techName.toLowerCase().split(' ').join('-');
  return `/images/technologies/${formattedName}.webp`;
};

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState(techData[0].id);
  const currentData = techData.find((item) => item.id === activeTab);

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden font-sans">
      <div className="container mx-auto px-5 lg:px-10 xl:px-4">
        
        {/* --- Header Section --- */}
        <div className="mb-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#5932EE]"></span>
            <span className="text-gray-900 font-bold tracking-wide">
              Technologies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight"
          >
            Harness the Power of{" "}
            <span className="text-[#5932EE]">the Best</span> Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed max-w-3xl"
          >
            Our team at Apptage uses a combination of{" "}
            <strong>cutting-edge technologies</strong> to create powerful,
            scalable, and secure solutions. From mobile apps to cloud-based
            infrastructures, we ensure that your product is not only functional
            but <strong>designed for performance</strong> and{" "}
            <strong>growth</strong>.
          </motion.p>
        </div>

        {/* --- Main Content Area --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Navigation Tabs */}
          <div className="w-full lg:w-1/4 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide">
            {techData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-4 py-3 rounded-xl text-left transition-all duration-300 outline-none group shrink-0"
              >
                {/* Active Background Animation */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-[#6642f0] to-[#fefcfd] rounded-xl shadow-lg shadow-purple-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Tab Text */}
                <span
                  className={`relative z-10 text-lg font-semibold transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-[#5932EE] hover:text-[#4323b8]"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Content Card */}
          <div className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {/* The Purple Card Container */}
                <div className="relative bg-gradient-to-br from-[#6c49f0] to-[#fefcfd] rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-purple-900/20 overflow-hidden min-h-[400px]">
                  
                  {/* Background Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

                  <div className="relative z-10">
                    {/* Groups Loop */}
                    <div className="space-y-10">
                      {currentData.groups.map((group, idx) => (
                        <div key={idx}>
                          <h4 className="text-white text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
                            {group.name}
                          </h4>

                          {/* Tech Chips Grid */}
                          <div className="flex flex-wrap gap-4">
                            {group.techs.map((tech, i) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="bg-white px-5 py-3 rounded-full hover:outline-1 hover:outline-[#1a1239] flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-default"
                              >
                                {/* IMAGE RENDERING HERE - Height set to h-6 */}
                                <img 
                                  src={getTechImage(tech)} 
                                  alt={tech} 
                                  className="h-6 w-auto object-contain"
                                  onError={(e) => {
                                    e.target.style.display = 'none'; // Optional: Hide image if not found
                                  }}
                                />
                                
                                <span className="text-gray-800 font-medium text-sm md:text-base">
                                  {tech}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
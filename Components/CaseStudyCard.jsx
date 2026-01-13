
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "NeighborlyHelp",
    description: "NeighborlyHelp is a multivendor eCommerce.",
    bgImage: "/images/case-studies/1st.webp",
    logo: "/images/case-studies/Neighborly.webp",
    stats: [
      { value: "95%", label: "Repeat Customers" }
    ],
    link: "#",
    colSpan: "lg:col-span-2"
  },
  {
    id: 2,
    title: "Match Punk",
    description: "Match Punk is a Progressive Web App (PWA).",
    bgImage: "/images/case-studies/2nd.webp",
    logo: "/images/case-studies/MatchPunk.webp",
    stats: [
      { value: "82%", label: "Customer Retention" },
      { value: "90%", label: "Overall Satisfaction" }
    ],
    link: "#",
    colSpan: "lg:col-span-3"
  },
  {
    id: 3,
    title: "Active SOS",
    description: "Active SOS is a versatile and reliable emergency.",
    bgImage: "/images/case-studies/3rd.webp",
    logo: "/images/case-studies/Active-SOS.webp",
    stats: [
      { value: "88%", label: "Response Accuracy" },
      { value: "92%", label: "User Satisfaction" }
    ],
    link: "#",
    colSpan: "lg:col-span-3"
  },
  {
    id: 4,
    title: "Caribo",
    description: "Caribo is an innovative car and boat rental.",
    bgImage: "/images/case-studies/4th.webp",
    logo: "/images/case-studies/Caribo.webp",
    stats: [
      { value: "95%", label: "Improved Utilization" }
    ],
    link: "#",
    colSpan: "lg:col-span-2"
  },
  {
    id: 5,
    title: "Fan Fusion",
    description: "Fan Fusion is a U.S. based entertainment technology",
    bgImage: "/images/case-studies/5th.png", 
    logo: "/images/case-studies/covalant.webp",    stats: [
        { value: "92%", label: "User Engagement Boost"}
    ],
    link: "#",
    colSpan: "lg:col-span-2",
  },
  {
    id: 6,
    title: "BonusBreeze",
    description: "BonusBreeze is a platform designed",
    bgImage: "/images/case-studies/4th.webp", 
    logo: "/images/case-studies/bonus.png", 
    stats: [
        { value: "85%", label: "Customer Retention Growth"},
        { value: "95%", label: "Reward Redemption Rate"}
    ],
    link: "#",
    colSpan: "lg:col-span-3"
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#F9F9F9] py-32 px-4 lg:px-0">
      <div className="container mx-auto">
        
        {/* --- Header --- */}
        <div className="lg:flex space-y-4 lg:space-y-0 items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#5923EE] rounded-full"></div>
              <span className="text-[#242424] font-bold text-lg">Case Studies</span>
            </div>
            <h2 className="text-[#1A1A1A] text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Case <span className="text-[#5923EE]">Studies</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg">
              Explore the success stories of businesses that have partnered with Apptage. From product launches to digital transformations, our results speak for themselves.
            </p>
          </div>
          <div className="relative inline-block">
            <Link href="/case-studies">
              <button
                type="button"
                className="border rounded-lg max-w-max font-semibold cursor-pointer transition-all duration-300 ease-in-out bg-[#6D3CFF] text-white border-[#6D3CFF] hover:bg-[#1A1239] hover:border-[#1A1239] text-sm sm:text-md py-3 px-6 sm:px-8 md:px-10"
              >
                View Case Studies
              </button>
            </Link>
          </div>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6 space-y-4 lg:space-y-0">
          
          {caseStudies.map((study) => (
             /* Check if hidden property is true, mainly for Fan Fusion based on requested structure */
            <div key={study.id} className={`relative z-10 py-8 ${study.colSpan} rounded-xl h-[500px] overflow-hidden group ${study.hidden ? 'hidden' : ''}`}>
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-none group-hover:blur-sm scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url(${study.bgImage})` }}
            >
            </div>
            
            {/* Purple Overlay (Hover) */}
            <div className="absolute inset-0 bg-[#1A1239]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
            
            {/* Dark Gradient (Default) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(47,47,47,0.40)] via-[rgba(25,25,25,0.78)] to-black group-hover:opacity-0 transition-all duration-500 ease-in-out"></div>

            {/* Content */}
            <div className="relative z-10 py-2 px-6 space-y-8 h-full flex flex-col justify-between">
              <div>
                <p className="bg-white px-6 py-2 rounded-full capitalize font-semibold w-fit text-black">
                  {study.title}
                </p>
              </div>

              <div className="translate-y-[140px] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <div className="mb-20">
                  <h2 className="text-white text-xl 2xl:text-3xl leading-snug max-w-md font-bold mb-4">
                    {study.description}
                  </h2>
                  <div className="h-[2px] bg-[#655E83] my-4"></div>
                  <div className="flex items-center justify-between">
                    {/* Logo Placeholder */}
                    <img className="h-12 w-auto pic" src={study.logo} alt={`${study.title} Logo`} />
                    
                    <div className="lg:flex items-center gap-8">
                        {study.stats.map((stat, index) => (
                            <div key={index} className={`flex items-center gap-3 divide-x-2 divide-[#6D3CFF] ${index > 0 ? 'hidden lg:flex' : ''}`}>
                                <h3 className="text-white text-xl 2xl:text-3xl font-semibold pr-3 pl-3">{stat.value}</h3>
                                <h4 className="text-xs 2xl:text-sm text-white font-medium pl-3" dangerouslySetInnerHTML={{ __html: stat.label.replace(' ', '<br/>') }}></h4>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Link
                    className="bg-[#6D3CFF] hover:bg-[#5b32d4] text-white px-8 py-3 w-fit rounded-lg capitalize flex items-center gap-2 font-medium"
                    href={study.link}
                  >
                    Show Case Study 
                    <ArrowRight className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  );
}


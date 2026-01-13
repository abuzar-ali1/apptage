import AboutSection from "@/Components/AboutSection";
import Hero from "@/Components/Hero";
import IndustriesSection from "@/Components/IndustriesSection";
import PartnersMarquee from "@/Components/PartnersMarquee";
import WhatWeOffer from "@/Components/WhatWeOffer";
import aboutImg from './../public/images/laptop-code.webp';
import TechnologiesSection from "@/Components/Technologies";
import ReviewsMarquee from "@/Components/ReviewsMarquee";
export default function Home() {
   const stats = [
    {
      id: 1,
      value: "100+",
      label: "Creative Experts",
    },
    {
      id: 2,
      value: "500+",
      label: "Success Stories",
    },
    {
      id: 3,
      value: "95%",
      label: "Success Rate",
    },
  ];


  return (
    <>
    <Hero/>
    <PartnersMarquee/>
    <AboutSection stats={stats}  />   
    <WhatWeOffer/>
    <IndustriesSection/>
    <AboutSection aboutImg={aboutImg} />   
    <TechnologiesSection/>
    <ReviewsMarquee/>
     </>
  );
}

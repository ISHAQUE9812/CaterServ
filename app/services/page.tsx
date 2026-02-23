"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// ================= THEME CONSTANTS ================= //
const GOLD = "#d4a762";
const DARK = "#1a1814";
const GRAY_BG = "#f8f9fa";
const PLAYBALL = "'Playball', cursive";

// ================= ANIMATION SETUP ================= //
const bounceInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.5, duration: 1 } }
};

const bounceInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { type: "spring" as const, bounce: 0.4, duration: 1, delay: delay }
});

const serviceData = [
  { t: "Wedding Services", i: "fa-cheese" },
  { t: "Corporate Catering", i: "fa-pizza-slice" },
  { t: "Cocktail Reception", i: "fa-hotdog" },
  { t: "Bento Catering", i: "fa-hamburger" },
  { t: "Pub Party", i: "fa-wine-glass-alt" },
  { t: "Home Delivery", i: "fa-walking" },
  { t: "Sit-down Catering", i: "fa-wheelchair" },
  { t: "Buffet Catering", i: "fa-utensils" }
];

const testimonials = [
  { name: "John Doe", profession: "Event Manager", img: "https://themewagon.github.io/CaterServ/img/testimonial-1.jpg" },
  { name: "Sarah Smith", profession: "Bride", img: "https://themewagon.github.io/CaterServ/img/testimonial-2.jpg" },
  { name: "Michael Lee", profession: "Corporate Boss", img: "https://themewagon.github.io/CaterServ/img/testimonial-3.jpg" },
  { name: "Anna Bell", profession: "Birthday Client", img: "https://themewagon.github.io/CaterServ/img/testimonial-4.jpg" },
];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto Slider for Testimonial using Pure React
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="font-sans overflow-hidden bg-white">
      
      {/* ================= 1. PAGE HEADER (BREADCRUMB) ================= */}
      <section className="bg-[#f8f9fa] pt-36 pb-20 lg:pt-48 lg:pb-28 border-b border-gray-200 shadow-inner text-center">
        <motion.h1 variants={bounceInDown} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-bold mb-4 text-[#1a1814] tracking-tight">
          Services
        </motion.h1>
        <motion.ol variants={bounceInDown} initial="hidden" animate="visible" transition={{ delay: 0.15 }} className="flex justify-center items-center mb-0 font-medium text-lg space-x-2">
          <li><Link href="/" className="text-[#d4a762] hover:text-[#b0874c] transition">Home</Link></li>
          <li className="text-gray-400">/</li>
          <li><span className="text-[#d4a762] cursor-pointer hover:text-[#b0874c] transition">Pages</span></li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 cursor-default">Services</li>
        </motion.ol>
      </section>

      {/* ================= 2. WHAT WE OFFER (SERVICE CARDS) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div {...bounceInUp(0.1)} className="mb-16">
            <span className="inline-block px-5 py-2 mb-4 border border-[#d4a762] bg-[#f8f9fa] rounded-full text-xs font-bold tracking-widest text-[#1a1814] uppercase shadow-sm">
              Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl text-[#1a1814]" style={{ fontFamily: PLAYBALL }}>
              What We Offer
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.map((s, index) => (
              <motion.div
                key={index}
                {...bounceInUp(0.1 * index)} // Staggered upward animations exactly like Wow.js
                className="bg-[#f8f9fa] rounded-xl p-10 text-center transition-all duration-300 group hover:bg-[#d4a762] hover:-translate-y-2 border border-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.03)] hover:shadow-xl cursor-pointer"
              >
                <div className="flex justify-center mb-8 relative z-10">
                   {/* Using accurate FA icons & colors matching original template */}
                   <i className={`fas ${s.i} text-7xl text-[#d4a762] group-hover:text-[#1a1814] transition-colors duration-300 drop-shadow-sm`}></i>
                </div>
                
                <h4 className="text-[1.35rem] font-bold text-[#1a1814] mb-4 relative z-10">
                  {s.t}
                </h4>
                
                <p className="text-gray-500 mb-8 leading-relaxed font-normal group-hover:text-white transition-colors duration-300 text-[15px] px-2 relative z-10">
                  Contrary to popular belief, ipsum is not simply random.
                </p>
                
                <button className="bg-[#d4a762] text-[#1a1814] px-8 py-2.5 rounded-full font-bold text-sm tracking-wide group-hover:bg-[#f8f9fa] transition-colors duration-300 shadow-sm relative z-10">
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. TESTIMONIALS SECTION ================= */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Header */}
          <motion.div {...bounceInUp(0.1)} className="mb-16">
            <span className="inline-block px-5 py-2 mb-4 border border-[#d4a762] bg-[#f8f9fa] rounded-full text-xs font-bold tracking-widest text-[#1a1814] uppercase shadow-sm">
              Testimonial
            </span>
            <h1 className="text-5xl lg:text-6xl text-[#1a1814]" style={{ fontFamily: PLAYBALL }}>
              What Our Customers says!
            </h1>
          </motion.div>

          {/* Slider Container / Custom React implementation of original Owl Carousel */}
          <motion.div {...bounceInUp(0.2)} className="relative w-full overflow-hidden pb-10 pt-4">
            
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              // Dynamically slide the container left depending on active item
              style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1.5}rem))` }}
            >
              {testimonials.map((client, i) => (
                <div 
                  key={i} 
                  className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] shrink-0"
                >
                  {/* Exactly matched testimonial card class styles */}
                  <div className="bg-[#f8f9fa] rounded-lg p-6 border border-[#d4a762] relative text-left">
                    
                    {/* Top Image + Quote Area */}
                    <div className="flex mb-4 items-center relative">
                      <img src={client.img} alt={client.name} className="w-[100px] h-[100px] rounded-full flex-shrink-0 object-cover border-[3px] border-white shadow-sm" />
                      
                      {/* FontAwesome Right Quote Mark Floating Setup */}
                      <div className="absolute top-4 right-2 text-[#d4a762] opacity-80">
                         <i className="fa fa-quote-right text-4xl"></i>
                      </div>

                      <div className="ps-4">
                        <h4 className="text-[#1a1814] text-xl font-bold mb-1">{client.name}</h4>
                        <p className="text-gray-500 m-0 text-sm font-medium">{client.profession}</p>
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div>
                      {/* Golden Stars Array */}
                      <div className="flex mb-4 space-x-1">
                         {[1,2,3,4,5].map(star => <i key={star} className="fas fa-star text-[#d4a762]"></i>)}
                      </div>
                      <p className="text-lg text-gray-600 m-0 leading-relaxed font-sans italic">
                        "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Consectetur adipiscing elit."
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots just like slider has naturally */}
            <div className="flex justify-center mt-10 space-x-2">
               {testimonials.map((_, dotIdx) => (
                  <button 
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === dotIdx ? "bg-[#d4a762] scale-125" : "bg-gray-300"}`}
                  ></button>
               ))}
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}
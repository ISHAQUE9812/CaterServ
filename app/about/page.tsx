"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ================= THEME CONSTANTS ================= //
const GOLD = "#d4a762";
const DARK = "#1a1814";
const GRAY_BG = "#f8f9fa";
const PLAYBALL = "'Playball', cursive";

// ================= ANIMATION VARIANTS ================= //
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

// ================= LIVE COUNTER ANIMATION ================= //
function LiveCounter({ to }: { to: number }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "0px 0px -50px 0px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (inView) {
      animate(0, to, { duration: 2.5, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    }
  }, [to, inView]);

  return <span ref={nodeRef}>{val}</span>;
}

export default function AboutPage() {
  return (
    <main className="font-sans overflow-hidden bg-white">
      
      {/* ================= 1. PAGE HEADER (BREADCRUMBS) ================= */}
      <section className="bg-[#f8f9fa] pt-36 pb-20 lg:pt-48 lg:pb-28 border-b border-gray-200 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 variants={bounceInDown} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-bold mb-4 text-[#1a1814] tracking-tight">
            About Us
          </motion.h1>
          <motion.ol variants={bounceInDown} initial="hidden" animate="visible" transition={{ delay: 0.15 }} className="flex justify-center items-center mb-0 font-medium text-lg space-x-2">
            <li><Link href="/" className="text-[#d4a762] hover:text-yellow-600 transition">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><span className="text-[#d4a762] cursor-pointer hover:text-yellow-600 transition">Pages</span></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 cursor-default">About</li>
          </motion.ol>
        </div>
      </section>

      {/* ================= 2. MAIN ABOUT SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Side */}
            <motion.div {...bounceInUp(0.1)} className="lg:col-span-5 rounded-xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800" className="w-full h-auto object-cover group-hover:scale-105 transition duration-700 shadow-sm" alt="About" />
            </motion.div>

            {/* Text Side */}
            <motion.div {...bounceInUp(0.3)} className="lg:col-span-7">
              <span className="inline-block px-5 py-2 mb-4 border border-[#d4a762] bg-[#f8f9fa] rounded-full text-xs font-bold tracking-widest text-[#1a1814] uppercase shadow-sm">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-[#1a1814]" style={{ fontFamily: PLAYBALL }}>
                Trusted By <span className="font-bold font-sans text-4xl lg:text-6xl text-[#1a1814]">200 +</span> satisfied clients
              </h1>
              <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {['Fresh and Fast food Delivery', '24/7 Customer Support', 'Easy Customization Options', 'Delicious Deals for Meals'].map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm font-semibold text-gray-800">
                    <i className="fas fa-share text-[#d4a762] mr-3 text-lg drop-shadow-sm"></i>
                    {item}
                  </div>
                ))}
              </div>
              <button className="bg-[#d4a762] text-[#1a1814] px-10 py-4 rounded-full font-bold hover:bg-[#1a1814] hover:text-white transition-colors duration-300 shadow-md">
                About Us <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 3. FACT & VIDEO SECTION ================= */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Fact Counters Side */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
              {[
                { icon: "fa-users", end: 689, text: "Happy Customers" },
                { icon: "fa-users-cog", end: 107, text: "Expert Chefs" },
                { icon: "fa-check", end: 253, text: "Events Complete" }
              ].map((stat, i) => (
                <motion.div key={i} {...bounceInUp(i * 0.2)} className="bg-[#d4a762] rounded-xl p-8 py-12 text-center text-[#1a1814] flex flex-col items-center shadow-lg border border-transparent hover:-translate-y-2 transition-transform duration-300">
                  <i className={`fas ${stat.icon} text-6xl mb-6 text-white`}></i>
                  <h1 className="text-5xl font-extrabold mb-1 tracking-tight text-white drop-shadow-md">
                    <LiveCounter to={stat.end} />
                  </h1>
                  <p className="text-[12px] font-bold uppercase tracking-[0.1em] mt-1">{stat.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Video Side */}
            <motion.div {...bounceInUp(0.2)} className="lg:col-span-5 h-[350px] lg:h-full relative rounded-xl overflow-hidden group shadow-lg cursor-pointer">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
              {/* Pattern + Cover Image via CSS Gradient */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "linear-gradient(rgba(254, 218, 154, 0.1), rgba(254, 218, 154, 0.1)), url('https://images.unsplash.com/photo-1544025162-d76694265947?w=800')" }}></div>
              <div className="relative z-20 w-full h-full flex justify-center items-center">
                 {/* CSS Triangle Play Button with pulse effect */}
                 <div className="w-[85px] h-[85px] bg-[#d4a762] rounded-full flex justify-center items-center relative shadow-[0_0_0_12px_rgba(255,255,255,0.4)] animate-[pulse_2s_infinite]">
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] border-l-[#1a1814] translate-x-1"></div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 4. TEAM SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div {...bounceInUp(0.1)} className="mb-16">
            <span className="inline-block px-5 py-2 mb-4 border border-[#d4a762] bg-[#f8f9fa] rounded-full text-xs font-bold tracking-widest text-[#1a1814] uppercase shadow-sm">
              Our Team
            </span>
            <h1 className="text-5xl lg:text-6xl text-[#1a1814] leading-tight" style={{ fontFamily: PLAYBALL }}>
              We have experienced chef Team
            </h1>
          </motion.div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Henry", role: "Decoration Chef", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=600&fit=crop" },
              { name: "Jemes Born", role: "Executive Chef", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=600&fit=crop" },
              { name: "Martin Hill", role: "Kitchen Porter", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500&h=600&fit=crop" },
              { name: "Adam Smith", role: "Head Chef", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=600&fit=crop" }
            ].map((chef, idx) => (
              <motion.div key={idx} {...bounceInUp(idx * 0.1)} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                
                {/* Photo & Absolute Social Icons Wrapper */}
                <div className="relative overflow-hidden w-full h-[320px]">
                  <img src={chef.img} className="w-full h-full object-cover" alt={chef.name} />
                  
                  {/* Floating Action / Social Container in Right-Top Corner */}
                  <div className="absolute top-4 right-4 flex flex-col items-center space-y-2 z-10">
                    <button className="w-10 h-10 bg-[#d4a762] text-white rounded-full shadow-md flex items-center justify-center hover:bg-[#1a1814] transition">
                      <i className="fas fa-share-alt"></i>
                    </button>
                    {/* The 3 hidden links that slide/fade in on group hover */}
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-[0.6s] delay-75 w-10 h-10 bg-[#d4a762] text-white rounded-full flex items-center justify-center hover:bg-[#1a1814] shadow-md">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] delay-150 w-10 h-10 bg-[#d4a762] text-white rounded-full flex items-center justify-center hover:bg-[#1a1814] shadow-md">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-[1s] delay-200 w-10 h-10 bg-[#d4a762] text-white rounded-full flex items-center justify-center hover:bg-[#1a1814] shadow-md">
                      <i className="fab fa-instagram"></i>
                    </button>
                  </div>
                </div>

                {/* Team Info Container (Black default -> Golden on Hover) */}
                <div className="py-6 text-center bg-[#1a1814] group-hover:bg-[#d4a762] transition-colors duration-[0.6s] ease-in-out">
                  <h4 className="text-xl font-bold text-[#d4a762] group-hover:text-[#1a1814] transition-colors duration-300">
                    {chef.name}
                  </h4>
                  <p className="text-white text-sm mt-1 m-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wide">
                    {chef.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

    </main>
  );
}
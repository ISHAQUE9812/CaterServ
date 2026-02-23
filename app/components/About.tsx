"use client";
import { motion } from "framer-motion";
import { ArrowRight, Share2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Bouncing Up */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <img 
              src="https://themewagon.github.io/CaterServ/img/about.jpg" 
              alt="About Us" 
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
          >
            <span className="inline-block px-5 py-2 mb-4 border border-[#ffb600] bg-[#f8f8f8] rounded-full text-gray-900 font-bold tracking-widest uppercase text-xs">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted By 200 + satisfied clients
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {['Fresh and Fast food Delivery', '24/7 Customer Support', 'Easy Customization Options', 'Delicious Deals for Meals'].map((item, idx) => (
                <div key={idx} className="flex items-center text-gray-800">
                  <Share2 className="text-[#ffb600] mr-3" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#d4a762] text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-[#d4a762] transition flex items-center">
              About Us <ArrowRight className="ml-2" size={18} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
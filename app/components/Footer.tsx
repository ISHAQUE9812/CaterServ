"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-[#2C231F] text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-12 mb-8">
        <div>
          <div className="text-3xl font-light tracking-tight mb-6">
            Cater<span className="text-[#D4A373] font-bold italic">Serv</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Delivering happiness and flavor to your special moments. Your premium catering partner.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#D4A373]">Special Facilities</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {['Cheese Burger', 'Sandwich', 'Paneer Burger', 'Special Sweets'].map(i => (
              <li key={i} className="hover:text-white transition cursor-pointer hover:translate-x-2 transform duration-300">{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#D4A373]">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>123 Street, New York, USA</li>
            <li>+012 345 67890</li>
            <li>info@example.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#D4A373]">Social Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6].map(i => (
              <img key={i} src={`https://images.unsplash.com/photo-1555244162-803834f70033?w=100&h=100&fit=crop`} className="w-full h-16 object-cover rounded hover:opacity-75 transition cursor-pointer hover:scale-105" alt="gallery"/>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} CaterServ. Premium Experience Designed by You.</p>
      </div>
    </motion.footer>
  );
}
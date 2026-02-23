"use client";

import React from "react";
import { motion } from "framer-motion";
import GalleryCard from "@/app/components/GalleryCard";
import { galleryData } from "@/lib/gallery";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] pt-32 pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-block border border-[#D4A373] text-[#D4A373] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
        >
          Our Portfolio
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#2C231F] mb-6"
        >
          CaterServ <span className="text-[#D4A373] italic font-light">Gallery</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto text-lg"
        >
          A visual journey through our exquisite culinary creations, stunning event setups, and behind-the-scenes moments.
        </motion.p>
      </div>

      {/* Dynamic Grid Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryData.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
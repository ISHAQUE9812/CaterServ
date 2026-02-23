"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { GalleryItem } from "@/lib/gallery";
import { ArrowRight } from "lucide-react";

// Framer Motion variant for individual cards
const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.div variants={itemVariant}>
      <Link href={`/gallery/${item.slug}`} className="block group">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 ease-out aspect-[4/3]">
          
          {/* Image with Hover Zoom */}
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C231F]/90 via-[#2C231F]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Text Content Reveal on Hover */}
          <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-[#D4A373] bg-white/10 backdrop-blur-md rounded-full border border-[#D4A373]/30 uppercase">
              {item.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
              {item.title}
            </h3>
            <div className="flex items-center text-[#D4A373] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="mr-2 text-sm">View Details</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
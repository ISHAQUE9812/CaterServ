"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="bg-[#f8f9fa] pt-32 pb-16 lg:pt-48 lg:pb-24 mt-0 border-b border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          {title}
        </motion.h1>
        <motion.ol 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
          className="flex justify-center space-x-2 text-lg text-gray-600 font-semibold"
        >
          <li><Link href="/" className="hover:text-[#ffb600] transition">Home</Link></li>
          <li>/</li>
          <li><span className="hover:text-[#ffb600] transition cursor-pointer">Pages</span></li>
          <li>/</li>
          <li className="text-gray-900">{title}</li>
        </motion.ol>
      </div>
    </div>
  );
}
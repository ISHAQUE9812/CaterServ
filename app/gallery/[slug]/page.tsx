import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Home } from "lucide-react";
import { galleryData } from "@/lib/gallery";
import * as motion from "framer-motion/client"; // Next.js 15 Server Components animation approach

// Generate Static Params for SEO & Performance
export async function generateStaticParams() {
  return galleryData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function GalleryDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Next.js 15 requires awaiting params
  const resolvedParams = await params;
  const item = galleryData.find((g) => g.slug === resolvedParams.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C231F] pb-24">
      
      {/* 1. Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2C231F]/40" />
      </div>

      {/* 2. Content Section */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#FAEDDF]"
        >
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8 font-medium">
            <Link href="/" className="hover:text-[#D4A373] transition flex items-center">
              <Home size={14} className="mr-1" /> Home
            </Link>
            <span>/</span>
            <Link href="/gallery" className="hover:text-[#D4A373] transition">
              Gallery
            </Link>
            <span>/</span>
            <span className="text-[#D4A373]">{item.title}</span>
          </nav>

          {/* Title & Category */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-white bg-[#D4A373] rounded-full uppercase shadow-md">
              {item.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C231F] leading-tight mb-6">
              {item.title}
            </h1>
            <div className="w-20 h-1.5 bg-[#D4A373] rounded-full mb-8" />
          </div>

          {/* Description */}
          <div className="prose prose-lg text-gray-600 mb-12">
            <p className="leading-relaxed text-lg">
              {item.description}
            </p>
            {/* You can add more dynamic content here if needed */}
            <p className="leading-relaxed mt-4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            </p>
          </div>

          {/* Back Button */}
          <Link href="/gallery" className="inline-block">
            <button className="flex items-center space-x-2 bg-[#FAEDDF] text-[#D4A373] px-8 py-4 rounded-full font-bold hover:bg-[#D4A373] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group">
              <ChevronLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to Gallery</span>
            </button>
          </Link>

        </motion.div>
      </div>
    </div>
  );
}
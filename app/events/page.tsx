"use client";
import { useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("All Events");
  const tabs = ["All Events", "Wedding", "Corporate", "Cocktail", "Buffet"];

  return (
    <>
      <PageHeader title="Events" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-5 py-2 mb-4 border border-[#ffb600] bg-[#f8f9fa] rounded-full text-gray-900 font-bold tracking-widest uppercase text-xs">Latest Events</span>
          <h1 className="text-5xl font-bold text-gray-900 mb-12">Our Social & Professional Events Gallery</h1>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button 
                key={tab} onClick={() => setActiveTab(tab)}
                className={`px-8 py-2 rounded-full font-semibold border border-[#d4a762] transition ${activeTab === tab ? "bg-[#d4a762] text-white" : "bg-[#f8f9fa] text-gray-900 hover:bg-[#d4a762] hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="relative group rounded-lg overflow-hidden cursor-pointer">
                  <img src={`https://themewagon.github.io/CaterServ/img/event-${num}.jpg`} className="w-full h-full object-cover rounded-lg" alt="Event" />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#ffb600]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold text-gray-900">{activeTab === "All Events" ? "Wedding" : activeTab}</h4>
                      <Search size={28} className="text-gray-900 font-bold" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
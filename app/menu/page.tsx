"use client";
import { useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("Starter");
  const tabs = ["Starter", "Main Course", "Drinks", "Offers", "Our Special"];

  return (
    <>
      <PageHeader title="Menu" />
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 mb-4 border border-[#ffb600] bg-white rounded-full text-gray-900 font-bold tracking-widest uppercase text-xs">Our Menu</span>
            <h1 className="text-5xl font-bold text-gray-900">Most Popular Food in the World</h1>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button 
                key={tab} onClick={() => setActiveTab(tab)}
                className={`px-8 py-2 rounded-full font-semibold border border-[#d4a762] transition ${activeTab === tab ? "bg-[#d4a762] text-white" : "bg-white text-gray-900 hover:bg-[#d4a762] hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="flex items-center group">
                  <img src={`https://themewagon.github.io/CaterServ/img/menu-0${num > 8 ? 1 : num}.jpg`} className="w-24 h-24 rounded-full border-[4px] border-transparent group-hover:border-[#ffb600] transition-colors duration-300 mr-4 object-cover" alt="Menu Item" />
                  <div className="flex-1 text-left">
                    <div className="flex justify-between items-end border-b border-[#ffb600] pb-2 mb-2">
                      <h4 className="text-2xl font-bold text-gray-900">Delicious Dish {num}</h4>
                      <h4 className="text-2xl font-bold text-[#ffb600]">$90</h4>
                    </div>
                    <p className="text-gray-600 m-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
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
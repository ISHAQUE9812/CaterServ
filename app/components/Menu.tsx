"use client";

import { motion } from "framer-motion";

const menuItems = [
  { name: "Paneer Tikka", desc: "Spicy grilled cheese", price: "$15" },
  { name: "Sweet Potato", desc: "Roasted with honey", price: "$12" },
  { name: "Sabudana Tikki", desc: "Crispy sago patties", price: "$10" },
  { name: "Margherita Pizza", desc: "Classic cheese and tomato", price: "$18" },
  { name: "Grilled Bacon", desc: "Smoked pork belly", price: "$22" },
  { name: "Roasted Chicken", desc: "Herb-marinated whole bird", price: "$35" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#D4A373] font-bold tracking-widest uppercase mb-2">Our Menu</h4>
          <h2 className="text-4xl font-extrabold text-[#2C231F]">Most Popular Food</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['All', 'Starter', 'Main Course', 'Drinks', 'Offers'].map((tab, idx) => (
              <button key={tab} className={`px-6 py-2 rounded-full font-semibold text-sm transition ${idx === 0 ? 'bg-[#D4A373] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-[#D4A373] hover:text-white'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, ease: "easeOut" }}
              className="flex items-center group cursor-pointer"
            >
              <div className="overflow-hidden w-16 h-16 rounded-full mr-4 shadow-md">
                <img src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop`} alt={item.name} className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-end mb-1">
                  <h3 className="text-lg font-bold text-[#2C231F] group-hover:text-[#D4A373] transition">{item.name}</h3>
                  <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-4 mb-2"></div>
                  <span className="text-[#D4A373] font-black text-xl">{item.price}</span>
                </div>
                <p className="text-sm text-gray-500 italic">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
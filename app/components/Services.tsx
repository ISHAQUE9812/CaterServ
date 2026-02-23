"use client";
import { motion } from "framer-motion";

// Icons with EXACT FontAwesome class names as seen in the image
const services = [
  { title: "Wedding Services", icon: "fa-cheese" },
  { title: "Corporate Catering", icon: "fa-pizza-slice" },
  { title: "Cocktail Reception", icon: "fa-hotdog" },
  { title: "Bento Catering", icon: "fa-hamburger" },
  { title: "Pub Party", icon: "fa-wine-glass-alt" },
  { title: "Home Delivery", icon: "fa-walking" },
  { title: "Sit-down Catering", icon: "fa-wheelchair" },
  { title: "Buffet Catering", icon: "fa-utensils" }
];

export default function Services() {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-1.5 mb-4 border border-[#d4a762] bg-[#f8f9fa] rounded-full text-[#1a1814] font-bold tracking-[0.2em] uppercase text-xs"
          >
            Our Services
          </motion.span>
          
          {/* Exactly mapped "Playball" Cursive Font requested by you */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[3rem] md:text-6xl text-[#1a1814] font-['Playball'] leading-tight"
          >
            What We Offer
          </motion.h1>
        </div>

        {/* CSS Grid match with Image Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", bounce: 0.4, delay: index * 0.1 }}
              /* 
                "group" class enables changing inner elements on hover. 
                Matches your image exact hover state ("Cocktail Reception" in image)
              */
              className="bg-[#fcfcfc] rounded-xl p-8 text-center transition-all duration-500 group hover:bg-[#d4a762] hover:-translate-y-2 shadow-[0_0_25px_rgba(0,0,0,0.04)] hover:shadow-2xl cursor-pointer"
            >
              {/* Giant Icon Section */}
              <div className="flex justify-center mb-6">
                 <i 
                   className={`fas ${service.icon} text-7xl text-[#d4a762] group-hover:text-[#1a1814] transition-colors duration-500`}
                 ></i>
              </div>
              
              {/* Title Section */}
              <h4 className="text-[1.35rem] font-bold text-[#1a1814] mb-3">
                {service.title}
              </h4>
              
              {/* Text - becomes white exactly like the image when hovered */}
              <p className="text-[#888] mb-8 leading-relaxed font-normal group-hover:text-white transition-colors duration-500 text-[15px]">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              
              {/* "Read More" Button EXACT Design */}
              <button className="bg-[#d4a762] text-[#1a1814] px-7 py-2.5 rounded-full font-bold text-[14px] group-hover:bg-[#f8f9fa] group-hover:text-[#1a1814] transition-colors duration-500 tracking-wide">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#f8f8f8] pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Left */}
          <motion.div
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pill Badge */}
            <span className="inline-block px-5 py-2 mb-6 border border-[#ffb600] bg-white rounded-full text-gray-900 font-bold tracking-widest uppercase text-xs">
              Welcome to CaterServ
            </span>

            <motion.h1 className="text-5xl lg:text-7xl font-['Playball'] text-gray-900 mb-6 leading-tight ">
              Book{" "}
              <span className="font-['Playball'] font-normal">
                <span className="text-[#d4a762]">Cater</span>Serv
              </span>{" "}
              For Your Dream Event
            </motion.h1>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <button className="bg-[#d4a762] text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition duration-300 hover:text-[#d4a762]">
                Book Now
              </button>
              <button className="bg-[#d4a762] text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition duration-300 hover:text-[#d4a762]">
                Know More
              </button>
            </div>
          </motion.div>

          {/* Image Right (Bouncing in) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2,
            }}
            className="flex justify-center"
          >
            {/* Aap live CaterServ ka hero image save karke public/img/hero.png me rakh sakte hain */}
            <img
              src="https://themewagon.github.io/CaterServ/img/hero.png"
              alt="CaterServ Hero"
              className="w-full max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

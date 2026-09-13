"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1040px] mx-auto px-8 py-24">
      <div className="relative rounded-[2rem] p-12 md:p-20 overflow-hidden bg-gradient-to-br from-purple via-pink to-orange text-white text-center">
        <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute -bottom-20 -right-10 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative">
          <div className="font-mono text-xs bg-white/15 border border-white/25 rounded-full px-3 py-1 mb-6 inline-block">
            get in touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to build performance-driven interfaces?
          </h2>
          <p className="text-white/85 text-[15px] max-w-md mx-auto mb-10">
            I am currently open to internship, full-time, and junior positions
            in Egypt and remote global opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:faridaemad7724@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full font-semibold text-[14.5px] text-purple bg-white shadow-lg"
            >
              faridaemad7724@gmail.com
            </motion.a>
            <motion.a
              href="tel:01101126564"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full font-semibold text-[14.5px] text-white border border-white/40"
            >
              +20 110 112 6564
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

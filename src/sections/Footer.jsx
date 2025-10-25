import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Keep X Twitter as it is

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const socials = [
  { icon: FaXTwitter, label: "X", href: "https://x.com/vedantsingh196" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vedant-singh-165b94299/" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Vedantsingh123" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

const Footer = () => {
  return (
    <div className="relative z-10 px-4 sm:px-6 md:px-8 bg-black lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6 overflow-hidden">
<div className="absolute top-0 -left-24 
  w-[400px] h-[150px] sm:w-[500px] sm:h-[180px] md:w-[600px] md:h-[200px]
  from-[#0D58CC] via-cyan-300 to-emerald-400 
  opacity-15 blur-2xl rounded-full -z-10 bg-gradient-to-r">
</div>

<div className="absolute bottom-0 right-0 
  w-[400px] h-[150px] sm:w-[500px] sm:h-[180px] md:w-[600px] md:h-[200px]
  from-pink-500 to-blue-500 
  opacity-15 blur-2xl rounded-full -z-10 bg-gradient-to-r">
</div>

      
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} className="w-full">
        <h1
          className="font-bangers font-semibold leading-none text-white text-center select-none"
          style={{
            fontSize: "clamp(3rem, 5vw, 14rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            paddingLeft: "3vw",
            paddingRight: "3vw",
            whiteSpace: "nowrap",
            textShadow: "rgba(0, 0, 0, 0.45) 0px 2px 18px",
          }}
        >
          Vedant Singh
        </h1>
      </motion.div>

      
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0D58CC] via-cyan-300 to-emerald-400"
      ></motion.div>

     
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="flex gap-5 text-2xl md:text-3xl"
      >
        {socials.map((item, index) => (
          <motion.a
            href={item.href}
            key={index}
            target="_blank"
            aria-label={item.label}
            rel="noopener noreferrer"
            variants={glowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="text-gray-300"
          >
            <item.icon />
          </motion.a>
        ))}
      </motion.div>

     
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} className="text-gray-300 italic max-w-xl">
        “Innovation starts with curiosity.”
      </motion.p>

    
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} className="text-xs text-gray-400">
        © 2025 Vedant Singh. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Footer;

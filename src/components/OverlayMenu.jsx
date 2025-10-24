import { AnimatePresence, motion } from 'framer-motion'
import { li } from 'framer-motion/client';
import React from 'react';
import { FiX } from "react-icons/fi";

const OverlayMenu = ({isOpen, onClose}) => {
  const menuLinks = ["Home", "About", "Skills", "Project", "Testimonials", "Contact"];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const origin = isMobile? "95% 8%" : "50% 8%"
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className='fixed inset-0 flex items-center justify-center z-50'
        initial = {{clipPath: `circle(0% at ${origin})`}}
        animate = {{clipPath: `circle(150% at ${origin})`}}
        exit = {{clipPath: `circle(0% at ${origin})`}}
        transition = {{duration : 0.7 , ease: [0.4, 0, 0.2, 1]}}
        style={{backgroundColor: "rgba(0,0,0, 0.95)"}}
        >
        <button className='absolute top-6 right-6 text-white text-3xl cursor-pointer' onClick={onClose}>
          <FiX />
        </button>
        <ul className='space-y-6 text-center'>
          {menuLinks.map((items, index) => {
            return(
              <motion.li key = {index}
              initial = {{opacity: 0, y:20}}
              animate = {{opacity: 1, y:0}}
              transition={{delay: 0.3 + index*0.1}}
              >
                <a href = {`#${items.toLowerCase()}`} onClick={onClose} className='text-3xl text-white font-semibold hover:text-pink-400 transition-colors duration-300'>{items}</a>
              </motion.li>
            )
          })}
        </ul>
      </motion.div>
      )}
      
    </AnimatePresence>
  )
}

export default OverlayMenu
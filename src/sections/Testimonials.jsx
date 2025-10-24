import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import m1 from '../assets/m1.PNG';
import m2 from '../assets/m2.PNG';
import w1 from '../assets/w1.PNG';
import w2 from '../assets/w2.PNG';

const Testimonials = () => {
  const testimonials = [
    {
      img: m1,
      name: 'Yash Sahu',
      role: 'Software Engineer at HCL Technologies',
      text: 'Vedant is a visionary developer. His attention to detail and creativity blew us away. Our project was a massive success because of him.'
    },
    {
      img: m2,
      name: 'Heather Forster',
      role: 'UI/UX Designer at PixelWorks',
      text: 'Working with Vedant was an absolute pleasure. He brings design and code together like magic. Highly recommend him!'
    },
    {
      img: w1,
      name: 'Amy Jacobsan',
      role: 'Tech Manager at CodeEmpire',
      text: 'From concept to execution, Vedant handled everything flawlessly. His work ethic and innovation are unmatched.'
    },
    {
      img: w2,
      name: 'Carry Smith',
      role: 'CTO at Innovate Labs',
      text: 'Vedant transformed our outdated platform into something modern and powerful. His skills are world-class.'
    },
  ];

  return (
    <section
      id="testimonials"
      className=" min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        What People Say
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        <AnimatePresence>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1"
                 initial={{ opacity: 0, y: 100, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 0.8,
    ease: [0.17, 0.67, 0.83, 0.67], // custom easing
    bounce: 0.3,
  }}
  whileHover={{
    scale: 1.05,
    rotate: 1,
    boxShadow: '0px 0px 25px rgba(255,255,255,0.3)',
  }}
  viewport={{ once: false }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
              />
              <p className="text-gray-200 italic mb-4">"{t.text}"</p>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.role}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;

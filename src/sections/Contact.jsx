import React, { useRef } from 'react';
import { motion} from 'framer-motion';
import contactImg from '../assets/Astra.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4bj9ncr', 'template_f58h97m', form.current,
        '_toqWqxvQiqVeSYKL',)
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
        <motion.div
          className="w-full md:w-1/2 flex justify-center pointer-events-none z-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          viewport={{ once: false, amount: 0.3 }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            y: { repeat: Infinity, repeatType: 'loop', duration: 2, ease: 'easeInOut' },
          }}
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-72 md:w-[35rem] rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      
      <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10  z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
          <form ref={form} className="flex flex-col gap-5" onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="p-3 rounded-md bg-white/10 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-white/10 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1">
                Enter Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Enter Your Message..."
                rows={5}
                className="p-3 rounded-md bg-white/10 border border-gray-500 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer hover:scale-105 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
    </section>
  );
};

export default Contact;

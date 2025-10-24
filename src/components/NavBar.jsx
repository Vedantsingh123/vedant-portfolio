import React, { useEffect, useRef, useState } from 'react';
import OverlayMenu from './OverlayMenu';
import logo from '../assets/logo.png';
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);
  const timerId = useRef(null);
  const lastScrollY = useRef(0);

  
  useEffect(() => {
    const homeSection = document.querySelector('#home');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Vedant
          </div>
        </div>

        <div className="block lg:absolute lg:left-1/2">
          <FiMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
            role="button"
            aria-label="Open menu"
          />
        </div>

        <div className="hidden sm:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 px-5 py-2 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default NavBar;

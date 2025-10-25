import React, { useEffect, useRef, useState } from 'react';
import { FaJava, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub} from "react-icons/fa";
import { SiRedux, SiExpress, SiTailwindcss, SiBootstrap, SiMysql, SiMongodb} from "react-icons/si";
import {motion, useMotionValue} from 'framer-motion';

const Skills = () => {

  const skills = [
  // Languages
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJsSquare />, name: "JavaScript" },

  // Web Technologies / Frameworks
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaReact />, name: "ReactJS" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <FaNodeJs />, name: "NodeJS" },
  { icon: <SiExpress />, name: "ExpressJS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },

  // Databases
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },

  // Developer Tools
  { icon: <FaGithub />, name: "GitHub" },
];

const repeated = [...skills, ...skills];

const[dir, setDir] = useState(-1);
const [active, setActive] = useState(false);
const sectionRef = useRef(null);
const trackRef = useRef(null);
const touchY = useRef(null);
const x = useMotionValue(0);

useEffect(() => {
  const el = sectionRef.current;
  if(!el) return;
  const io = new IntersectionObserver(([entry]) => {
    setActive(entry.isIntersecting && entry.intersectionRatio>0.1);
  },
  {threshold: [0.1]}
  )
  io.observe(el);
  return () => io.disconnect();

},[])

useEffect(() => {
  if(!active) return;
  const onWheel = (e) => setDir(e.deltaY > 0 ? -1: 1);
  const onTouchStart = (e) => (touchY.current = e.touches[0].clientY)
  const onTouchMove = (e) => {
    if(touchY.current == null) return;
    const delta = e.touches[0].clientY - touchY.current;
    setDir(delta > 0? 1 : -1);
    touchY.current = e.touches[0].clientY;
  };
  window.addEventListener('wheel', onWheel, {passive: true});
  window.addEventListener('touchstart', onTouchStart, {passive: true});
  window.addEventListener('touchmove', onTouchMove, {passive: true});

  return () => {
  window.removeEventListener('wheel', onWheel);
  window.removeEventListener('touchstart', onTouchStart);
  window.removeEventListener('touchmove', onTouchMove);
  }
},[active])

useEffect(() => {
  let id;
  let last = performance.now();
  const speed = 80;
  const tick = (now) => {
    const dt = (now-last)/1000;
    last = now;
    let next = x.get() + speed *dir*dt
    const loop = trackRef.current?.scrollWidth/2 || 0;
    if(loop){
      if(next<= -loop) next +=loop;
      if(next>=0) next-=loop;
    }
    x.set(next);
    id = requestAnimationFrame(tick);
  }
  id = requestAnimationFrame(tick)
  return () => cancelAnimationFrame(id);
},[dir, x])
  return (
    <section id='skills'
    ref={sectionRef}
     className='w-full bg-black h-1/2 relative pb-8 flex flex-col items-center justify-center text-white overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none '>
        <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse' />
        <div className='absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500'/>
      </div>
      <motion.h2 className='text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10' 
      initial={{opacity:0, y:-30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay: 0.1}}
      >
        My Skills
      </motion.h2>
      <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
      initial={{opacity:0, y:-10}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.1}}
      >
        Modern Applications | Modern Technologies
      </motion.p>
      <div className='relative w-full overflow-hidden'>
        <motion.div 
        ref={trackRef}
        className="flex gap-10 text-6xl text-[#1cd8d2]"
        style={{x, whiteSpace: "nowrap", willChange: "transform"}}
        >
          {repeated.map((ele, index) => (
            <div key={index} className='flex flex-col items-center gap-2 min-w-[120px]' aria-label={ele.name} title={ele.name}>
              <span className='hover:scale-125 transition-transform duration-300'>
                {ele.icon}
              </span>
              <p className='text-sm'>
                {ele.name}
              </p>

            </div>
          ))}
        </motion.div>

      </div>

    </section>
  )
}

export default Skills


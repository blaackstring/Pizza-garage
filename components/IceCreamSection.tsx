"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Titan_One } from "next/font/google";

const titanOne = Titan_One({ subsets: ["latin"], weight: "400", display: 'swap' });

export default function IceCreamSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[600px] md:h-[750px] overflow-hidden bg-white"
    >
      {/* Two-tone background */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="flex-1 bg-[#5CA1BC]" />
        <div className="flex-1 bg-[#FF6B35]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto flex flex-col items-center justify-center pt-8 md:pt-16">
        
        {/* Left Cup */}
        <div className={`absolute top-[45%] md:top-1/2 -translate-y-[60%] md:-translate-y-[50%] left-[-15%] sm:left-[-10%] md:left-[-5%] lg:left-[0%] z-20 transition-all duration-[2000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${inView ? 'translate-x-0 opacity-100' : '-translate-x-[100vw] opacity-0'} rotate-[-5deg] w-[252px] md:w-[414px]`}>
           <div style={{ animation: 'float 1.7s ease-in-out infinite' }} className="flex flex-col items-center">
             <Image 
               src="/images/shake1.png" 
               alt="Strawberry Milkshake" 
               width={400} 
               height={500} 
               className="w-full h-auto drop-shadow-2xl transition-transform duration-[1500ms]"
             />
             <div 
               className="text-[#FFD54F] text-center drop-shadow-[2px_2px_8px_rgba(0,0,0,0.4)] mt-2 md:-mt-4 text-[clamp(3rem,5vw,5rem)] rotate-[5deg]"
               style={{ fontFamily: 'var(--font-script)' }}
             >
               Strawberry
             </div>
           </div>
        </div>

        {/* Right Cup */}
        <div className={`absolute top-[45%] md:top-1/2 -translate-y-[60%] md:-translate-y-[50%] right-[-15%] sm:right-[-10%] md:right-[-5%] lg:right-[0%] z-20 transition-all duration-[2000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-200 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-[100vw] opacity-0'} rotate-[5deg] w-[252px] md:w-[414px]`}>
           <div style={{ animation: 'float 1.9s ease-in-out infinite' }} className="flex flex-col items-center">
             <Image 
               src="/images/shake2.png" 
               alt="Chocolate Milkshake" 
               width={400} 
               height={600} 
               className="w-full h-auto drop-shadow-2xl transition-transform duration-[1500ms]"
             />
             <div 
               className="text-[#FFD54F] text-center drop-shadow-[2px_2px_8px_rgba(0,0,0,0.4)] mt-2 md:-mt-8 text-[clamp(3rem,5vw,5rem)] rotate-[-5deg]"
               style={{ fontFamily: 'var(--font-script)' }}
             >
               Chocolate
             </div>
           </div>
        </div>

        {/* Center Text Container - Must be behind all cups! */}
        <div className="flex flex-col items-center z-10 mb-12 sm:mb-8 pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full pt-8 md:pt-16">
          <h2 className={`${titanOne.className} text-[#FFFDF0] text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] flex flex-col items-center`} style={{ lineHeight: 0.9 }}>
             <span className={`text-[clamp(3.42rem,7.6vw,6.08rem)] md:text-[6.08rem] lg:text-[7.6rem] transition-all duration-[1500ms] ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>Garage's</span>
             <span className={`text-[clamp(3.04rem,8.74vw,6.84rem)] md:text-[6.84rem] lg:text-[8.36rem] transition-all duration-[1500ms] delay-100 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mt-1 md:-mt-2`}>Creamery</span>
          </h2>
          <p className={`text-white font-bold text-[10px] sm:text-xs md:text-base lg:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase mt-4 md:mt-8 drop-shadow-md transition-all duration-[1500ms] delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
             Savor Every Spoonful
          </p>
        </div>

        {/* Center Cup */}
        <div className={`absolute bottom-[-5%] sm:bottom-[-2%] md:bottom-[-8%] left-1/2 -translate-x-1/2 z-40 transition-all duration-[2500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-[50vh] opacity-0'} w-[342px] md:w-[486px]`}>
           <div style={{ animation: 'float 1.5s ease-in-out infinite' }} className="flex flex-col items-center relative">
             <Image 
               src="/images/shake3.png" 
               alt="Coffee Milkshake" 
               width={600} 
               height={800} 
               className="w-full h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transition-transform duration-[1500ms]"
             />
             <div 
               className="absolute top-[25%] -right-[20%] text-[#FFD54F] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.4)] text-[clamp(4rem,6vw,6.5rem)] rotate-[15deg] leading-none text-center"
               style={{ fontFamily: 'var(--font-script)' }}
             >
               Mocha<br/>Mud
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}

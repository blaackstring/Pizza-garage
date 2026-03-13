"use client";

import { useState } from 'react';
import Image from 'next/image';

const pizzaOptions = [
  { id: 1, name: "Margherita", filter: 'hue-rotate(0deg)', rotate: '0deg', scale: '1.0' },
  { id: 2, name: "Pepperoni", filter: 'hue-rotate(30deg) sepia(0.2) saturate(1.5)', rotate: '90deg', scale: '0.95' },
  { id: 3, name: "BBQ Chicken", filter: 'hue-rotate(-20deg) saturate(1.2)', rotate: '180deg', scale: '1.05' },
  { id: 4, name: "Veggie", filter: 'brightness(1.1) contrast(1.1) saturate(1.3) hue-rotate(15deg)', rotate: '270deg', scale: '0.9' },
];

export default function InteractivePizzaSection() {
  const [selectedPizza, setSelectedPizza] = useState(pizzaOptions[0]);

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-inner isolate border-b-4 border-[#e9e9e9]">
      {/* Gray Circle Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden md:block z-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#e6e6e6] rounded-[200px] rounded-tl-[1000px] rounded-bl-[1000px] translate-x-1/4" style={{ borderRadius: "50%" }} />
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 h-full">
        {/* Left Side: Text and Thumbnails */}
        <div className="flex flex-col items-start px-6 md:px-12 pt-10 pb-0 z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Today's Special</h2>
          <p className="text-[#333] max-w-sm mb-16 text-sm md:text-base leading-relaxed font-body">
            Pizza is an Italian food that was created in Italy The Naples area. It is made different toppings
          </p>
          
          {/* Thumbnails */}
          <div className="flex items-end gap-4 sm:gap-6 w-full">
            {pizzaOptions.map((pizza) => {
              const isActive = selectedPizza.id === pizza.id;
              return (
                <div 
                  key={pizza.id} 
                  className="flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-2"
                  onClick={() => setSelectedPizza(pizza)}
                >
                  <div 
                    className={`relative transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isActive ? 'w-24 h-24 md:w-32 md:h-32 drop-shadow-xl' : 'w-20 h-20 md:w-24 md:h-24 opacity-80 hover:opacity-100'}`}
                    style={{ filter: pizza.filter }}
                  >
                    <div className="w-full h-full relative" style={{ transform: `rotate(${pizza.rotate})`, transition: 'transform 0.5s ease-out' }}>
                      <Image 
                        src="/images/hero_section_pizza.webp" 
                        alt={`Pizza option ${pizza.name}`} 
                        fill 
                        className="object-contain"
                        sizes="(max-width: 768px) 100px, 150px"
                      />
                    </div>
                  </div>
                  {/* Pizza Name */}
                  <span className={`mt-3 text-xs md:text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-500'}`}>
                    {pizza.name}
                  </span>
                  {/* Active Indicator Line */}
                  <div className={`mt-2 w-8 h-[3px] rounded-full transition-colors duration-300 ${isActive ? 'bg-[#c81a1a]' : 'bg-transparent'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side / Mobile Bottom: Big Pizza */}
        <div className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center md:justify-end z-10">
          {/* Mobile Gray Circle */}
          <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#e6e6e6] rounded-full -z-10" />
          
          <div className="relative w-[400px] h-[400px] md:w-[750px] md:h-[750px] md:translate-x-32 z-10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
               style={{ filter: selectedPizza.filter }}
          >
            <div className="w-full h-full relative" 
                 style={{ 
                   transform: `rotate(${selectedPizza.rotate}) scale(${selectedPizza.scale})`,
                   transition: 'transform 0.8s cubic-bezier(0.34,1.56,0.64,1)' 
                 }}
            >
              <Image 
                src="/images/hero_section_pizza.webp" 
                alt="Large selected pizza" 
                fill 
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 768px) 400px, 800px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

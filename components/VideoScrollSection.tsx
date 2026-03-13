"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const frameCount = 40;
const currentFrame = (index: number) =>
  `/images/frames/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

export default function VideoScrollSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const images: HTMLImageElement[] = [];
    const animationState = { frame: 0 };

    // Preload all 40 frames
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;
    if (images[0].complete) {
      render();
    }

    function render() {
      if (images[0] && context && canvas) {
        // Match the canvas bounds to the exact intrinsic size of the frame images to maintain quality
        canvas.width = images[0].naturalWidth || 1080;
        canvas.height = images[0].naturalHeight || 1080;
      }

      const img = images[Math.round(animationState.frame)];
      if (img && img.complete && context && canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the image centered and covering/contained optimally
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%", // User has to scroll 250% of the viewport height to finish scrubbing
        scrub: 0.5, // Increasing scrub to 0.5 sec adds a soft "catch up" lag, making it noticeably smoother
        pin: true, // Keep the canvas fixed on screen while scrolling plays the timeline
        markers: false, 
      }
    });

    tl.to(animationState, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "power1.inOut", // Adding a soft ease makes acceleration/deceleration between frames look smoother
      onUpdate: () => requestAnimationFrame(render)
    });

    return () => {
      // Cleanup ScrollTriggers specific to this component on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden z-10 flex flex-col items-center">
        {/* High-Performance Canvas Player */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
           <canvas 
               ref={canvasRef} 
               className="w-full h-full object-cover opacity-90 transition-opacity duration-1000" 
           />
        </div>

        {/* Gradient Overlay for bottom blending */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}

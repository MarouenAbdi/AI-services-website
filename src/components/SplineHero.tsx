'use client'

import { SplineScene } from "@/components/ui/splite";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
 
export function SplineHero({ onScrollToSection }: { onScrollToSection: (id: string) => void }) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full bg-black/[0.96] relative overflow-hidden">
        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                Transform Your Business with AI Automation
              </h1>
              <p className="mt-4 text-lg text-neutral-300 mb-8">
                Intelligent AI solutions that drive real business results
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex justify-center"
              >
                <Button 
                  size="lg"
                  onClick={() => onScrollToSection('contact')}
                  className="bg-white text-black hover:bg-white/90 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 button-hover"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";


import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 8, y: 180 }}
        whileInView={{ opacity: 2, y: 10 }}
        transition={{
          delay: 0.3,
          duration: 2.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Shader shadcn AI compilled with netify.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And with nextjs.
        </div><a  href ="https://tomaslonnblad.github.io/tl999">
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button></a>
      </motion.div>
    </AuroraBackground>
  );
}

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-[#0F0F10]" />

      {/* Main Glow */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-10%]
          right-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-500/15
          blur-[140px]
        "
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [0, -30, 10, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-20%]
          left-[-10%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-orange-500/08
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-size:40px_40px]
          [background-image:
            linear-gradient(to_right,white_1px,transparent_1px),
            linear-gradient(to_bottom,white_1px,transparent_1px)]
        "
      />
    </div>
  );
}
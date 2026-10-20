import { motion } from "framer-motion";

export default function DesignCard() {
  return (
    <motion.div 
	
	animate={{ y: [0, -6, 0] }}
transition={{
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut",
}}
	
      className="
        rounded-2xl
        border
        border-white/10
        bg-zinc-900
        p-4
      "
    >
      <div
        className="
          flex
          h-28
          items-center
          justify-center
          rounded-xl
          border-2
          border-dashed
          border-orange-500/40
          bg-zinc-800/50
        "
      >
        <div
          className="
            h-12
            w-16
            rounded
            border
            border-white/20
            bg-white/5
          "
        />
      </div>

      <div className="mt-4 h-3 w-24 rounded-full bg-zinc-700" />
      <div className="mt-2 h-3 w-16 rounded-full bg-zinc-800" />
    </motion.div>
  );
}
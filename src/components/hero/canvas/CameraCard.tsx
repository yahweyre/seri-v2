import { motion } from "framer-motion";

export default function CameraCard() {
  return (
    <motion.div

	animate={{ y: [0, 6, 0] }}
transition={{
  duration: 8,
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
          bg-zinc-800
        "
      >
        <div
          className="
            h-16
            w-16
            rounded-full
            border-4
            border-orange-500/40
          "
        />
      </div>

      <div className="mt-4 h-3 w-20 rounded-full bg-zinc-700" />
      <div className="mt-2 h-3 w-14 rounded-full bg-zinc-800" />
    </motion.div>
  );
}
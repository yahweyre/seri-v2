import { motion } from "framer-motion";

export default function VideoCard() {
  return (
	<motion.div
	
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
	
      className="
        rounded-2xl
        border
        border-white/10
        bg-zinc-900
        p-5
      "
    >
      <div
        className="
          relative
          aspect-video
          overflow-hidden
          rounded-xl
          bg-zinc-800
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-orange-500/30
            via-transparent
            to-black
          "
        />

        <div
          className="
            absolute
            bottom-4
            left-4
            rounded-full
            bg-black/50
            px-4
            py-2
            text-sm
            text-white
            backdrop-blur
          "
        >
          ▶ Preview
        </div>
      </div>

      <div className="mt-4 h-3 w-40 rounded-full bg-zinc-700" />

      <div className="mt-2 h-3 w-28 rounded-full bg-zinc-800" />
    </motion.div>
  );
}
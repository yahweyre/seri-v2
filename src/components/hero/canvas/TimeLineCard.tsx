import { motion } from "framer-motion";

export default function TimelineCard() {
  return (
    <motion.div
	
	animate={{ y: [0, -3, 0] }}
transition={{
  duration: 10,
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
      <div className="flex gap-2">
        <div className="h-4 w-24 rounded bg-orange-500/70" />
        <div className="h-4 w-16 rounded bg-zinc-700" />
        <div className="h-4 w-20 rounded bg-zinc-600" />
        <div className="h-4 flex-1 rounded bg-zinc-800" />
      </div>

      <div className="mt-4 h-3 w-32 rounded-full bg-zinc-700" />
    </motion.div>
  );
}
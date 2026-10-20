import { motion } from "framer-motion";

export default function HeroTrustBar() {
  return (
    <motion.div 
	initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.8 }} 
className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-400 ">
      <span>Industry Focused</span>
      <span>Creative Skills</span>
      <span>Career Growth</span>
    </motion.div>
  );
}
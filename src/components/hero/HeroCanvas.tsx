import { motion } from "framer-motion";
import VideoCard from "./canvas/VideoCard";
import DesignCard from "./canvas/DesignCard";
import CameraCard from "./canvas/CameraCard";
import TimelineCard from "./canvas/TimelineCard";

const floatAnimation = {
  y: [0, -10, 0],
};

export default function HeroCanvas() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex justify-center"
    >
      <motion.div
        animate={floatAnimation}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          w-full
          max-w-[620px]
          rounded-[32px]
          border
          border-white/15
          bg-white/[0.07]
          p-6
          backdrop-blur-xl
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >
	  <div
  className="
    absolute
    inset-0
    -z-10
    rounded-[40px]
    bg-orange-500/20
    blur-[100px]
  "
/>
        <VideoCard />

        <div className="mt-6 grid grid-cols-2 gap-4">
          <DesignCard />
          <CameraCard />
        </div>

        <div className="mt-8">
          <TimelineCard />
        </div>

      </motion.div>
    </motion.div>
  );
}
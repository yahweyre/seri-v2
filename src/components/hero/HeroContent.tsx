import { motion } from "framer-motion";
import Button from "../ui/Button";
import HeroTrustBar from "./HeroTrustBar";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

type HeroContentProps = {
  loading: boolean;
};

export default function HeroContent({
  loading,
}: HeroContentProps) {
  return (
    <motion.div
      initial="hidden"
      animate={loading ? "hidden" : "show"}
      variants={container}
      className="relative z-10 max-w-xl"
    >
      {/* Eyebrow */}

      <motion.span
        variants={fadeUp}
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-orange-500/20
          bg-orange-500/10
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-orange-400
        "
      >
        Creative Skills Training
      </motion.span>

      {/* Headline */}

      <motion.h1
        variants={fadeUp}
        className="
          mt-8
          text-5xl
          font-bold
          leading-[0.95]
          text-white
          md:text-7xl
        "
      >
        Master The
        <br />

        <span className="text-orange-500">
          Craft.
        </span>

        <br />
        Build The
        <br />
        Career.
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={fadeUp}
        className="
          mt-8
          max-w-lg
          text-lg
          leading-8
          text-zinc-400
        "
      >
        The digital atelier for the modern creative. Bridging the gap between raw talent and industry revenue.
      </motion.p>

      {/* Buttons */}

      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-wrap gap-5"
      >
        <Button>
          Explore Courses
        </Button>

        <Button variant="secondary">
          Start Your Journey
        </Button>
      </motion.div>

      <HeroTrustBar />
    </motion.div>
  );
}
import { motion } from "framer-motion";

import orangeLogo from "../../assets/logo/seri-orange.svg";
import blackLogo from "../../assets/logo/seri-black.svg";


export default function LogoReveal() {

  return (
    <div
      className="
        relative
        w-56
        h-56
        flex
        items-center
        justify-center
      "
    >

      {/* Orange Part */}

      <motion.img
        src={orangeLogo}
        alt="SERI Orange"
        className="
          absolute
          w-full
          h-full
          object-contain
        "
        initial={{
          opacity: 0,
          x: -120,
          rotate: -20,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />


      {/* Black Part */}

      <motion.img
        src={blackLogo}
        alt="SERI Black"
        className="
          absolute
          w-full
          h-full
          object-contain
        "
        initial={{
          opacity: 0,
          x: 120,
          rotate: 20,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.35,
          ease: "easeOut",
        }}
      />


      {/* Final glow */}

      <motion.div
        className="
          absolute
          inset-0
          rounded-full
        "
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          delay: 1.4,
        }}
      />

    </div>
  );
}
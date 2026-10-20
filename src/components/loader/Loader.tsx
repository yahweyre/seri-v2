import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLoading } from "../../context/LoadingContext";
import LogoReveal from "./LogoReveal";

export default function Loader() {

  const { finishLoading } = useLoading();


  useEffect(() => {

    const timer = setTimeout(() => {
      finishLoading();
    }, 3000);


    return () => clearTimeout(timer);

  }, []);


  return (
<motion.div
  className="
    fixed
    inset-0
    z-[9999]
    bg-[#0F0F10]
    flex
    items-center
    justify-center
  "
  initial={{
    opacity: 1,
  }}
  animate={{
    opacity: 0,
    pointerEvents: "none",
  }}
  transition={{
    duration: 0.8,
    delay: 3,
  }}
>

      <div className="relative flex items-center justify-center">

        <LogoReveal />

      </div>


    </motion.div>
  );
}
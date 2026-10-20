import { motion } from "framer-motion";


type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};


export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {

  return (

    <motion.button

      whileHover={{
        y: -3,
        scale: 1.05,
      }}

      whileTap={{
        scale: 0.95,
      }}

      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}

      className={`
        px-6
        py-3

        rounded-2xl

        font-semibold

        transition-all
        duration-300

        cursor-pointer

        ${
          variant === "primary"
            ? `
              bg-orange-500
              hover:bg-orange-400

              text-white

              shadow-lg
              shadow-orange-500/30

              hover:shadow-xl
              hover:shadow-orange-500/50
            `
            : `
              bg-zinc-800
              hover:bg-zinc-700

              text-white

              border
              border-white/10

              hover:border-orange-500/50
            `
        }

      `}

    >

      {children}

    </motion.button>

  );
}
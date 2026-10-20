import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import seriLogo from "../../assets/logo/seri-mark.svg";
import Container from "../ui/Container";
import Button from "../ui/Button";


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);


  const links = [
    "Home",
    "Learn",
    "Services",
    "Portfolio",
    "Contact",
  ];


  return (

    <header className="fixed top-0 left-0 w-full z-50">


      <motion.nav

        initial={{
          opacity: 0,
          y: -40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
          delay: 3.2,
        }}

        className={`
          w-full
          transition-all
          duration-500

          ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }
        `}

      >

        <Container>

          <div
            className="
              h-20
              flex
              items-center
              justify-between
            "
          >


            {/* LOGO */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <motion.img

                src={seriLogo}

                alt="SERI Logo"

                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="
                  w-22
                  h-22
                  object-contain
                  cursor-pointer
                "

              />


              <div>

                <h1
                  className="
                    text-xl
                    font-bold
                    tracking-wide
                  "
                >
                  SERI
                </h1>


                <p
                  className="
                    text-xs
                    text-zinc-400
                  "
                >
                  SKILL CENTER
                </p>

              </div>


            </div>



            {/* NAV LINKS */}

            <ul
              className="
                hidden
                lg:flex
                items-center
                gap-10
                text-sm
              "
            >

              {links.map((item) => (

                <motion.li

                  key={item}

                  whileHover={{
                    y: -4,
                  }}

                  transition={{
                    duration: 0.2,
                  }}

                  className="
                    group
                    relative
                    cursor-pointer
                    text-zinc-300
                    hover:text-white
                    transition
                  "

                >

                  {item}


                  <span

                    className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-0
                      bg-orange-500
                      transition-all
                      duration-300
                      group-hover:w-full
                    "

                  />


                </motion.li>

              ))}


            </ul>



            {/* BUTTON */}

            <motion.div

              whileHover={{
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}

            >

              <Button>
                Enroll Now
              </Button>


            </motion.div>


          </div>


        </Container>


      </motion.nav>


    </header>

  );
}
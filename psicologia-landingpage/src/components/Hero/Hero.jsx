import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import ModelHeroImage from "../../assets/HeroImage.png";
import H1Image from "../../assets/H1Image.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[100%] bg-primary-dark" id="hero">
      <section className="overflow-hidden sm:grid sm:grid-cols-1 items-center bg-gradient-to-r from-zinc-950 to-transparent ">
        <div className="p-8 md:p-12 lg:px-16 lg:pt-0  flex-col flex m-auto ">
          <div className="mx-auto lg:my-11 text-left ltr:sm:text-left rtl:sm:text-right lg:flex lg:flex-row-reverse">
            <motion.div
              className="max-w-1/2 max-h-1/2"
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1 }}
              initial="hidden"
              animate="visible"
            >
              <img
                className="w-full lg:w-[80vh] lg:h-full object-contain sm:h-[70vw] lg:my-2 my-16 "
                src={ModelHeroImage}
                alt=""
              />
            </motion.div>

            <motion.div
              className="max-w-1/2 max-h-60 my-auto"
              variants={{
                hidden: { opacity: 0, x: -90 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 2, delay: 0.25 }}
              initial="hidden"
              animate="visible"
            >
              <div className="mt-24 lg:my-auto max-w-xs mx-auto lg:max-w-lg 2xl:max-w-3xl text-center lg:ml-12 lg:text-left">
                <h2 className="text-4xl 2xl:text-8xl text-blue-light md:text-7xl lg:max-w-4xl relative">
                  <img
                    className="absolute md:w-14 lg:w-48 lg:right-40 lg:-top-14 "
                    src={H1Image}
                    alt=""
                  />
                  Psicoterapia para suas necessidades
                </h2>

                <p className="hidden text-primary-blue md:mt-4 md:block md:text-2xl">
                  Apoio em todas as fases da vida.
                </p>
                <a
                  target="blank"
                  href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
                  className=" m-auto mt-8 lg:m-0 lg:mt-8 flex w-48 items-center  relative z-10 rounded-3xl bg-primary-blue text-sm font-medium text-white transition-all duration-300 hover:bg-[#023047] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                >
                  <div className="flex text-center items-center justify-center gap-2 w-full py-2 px-2 ">
                    <FaWhatsapp className="w-6 h-1/5" />
                    <p>Agendar Consulta</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;

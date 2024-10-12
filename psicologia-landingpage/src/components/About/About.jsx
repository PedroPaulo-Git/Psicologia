import React,{useRef,useEffect} from "react";
import BackgroundAbout from "../../assets/BackgroundAbout.png";
import Brain from "../../assets/brain2.png";
import { motion,useInView } from "framer-motion"
const About = () => {
  const ref= useRef(null)
  const isInView = useInView(ref,{once:true,threshold: 0.1, })

  useEffect(()=>{
    
      console.log('isInView:', isInView);
    
  },[isInView])

  return (
    <div 
      className="bg-primary-dark border-b-[#032536] border-b-4 relative"
      id="sobre"
    >
      <section
       ref={ref}>
        <img
          alt=""
          src={Brain}
          className="absolute h-1/2 object-cover lg:w-3/4 bottom-0 opacity-5 "
        />
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-44">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
          <motion.div
         
              className="max-w-1/2 max-h-1/2"
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Animation only runs when in view
              transition={{ duration: 1,delay:1}}
            >
            
            <div className="relative h-72 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
       
              <img
                alt=""
                src={BackgroundAbout}
                className="absolute inset-0 object-cover rounded-lg h-full mx-auto "
              />
             
            </div>
            </motion.div>
            <div  className="lg:py-24 relative">
              <span className="flex items-center">
                <span className="h-px flex-1 bg-[#8ecae6]"></span>
                <span  className="shrink-0 px-6 text-[#8ecae6]">Quem Somos</span>
                <span className="h-px flex-1 bg-[#8ecae6]"></span>
              </span>

              <motion.div
        
              className=""
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Animation only runs when in view
              transition={{ duration: 1,delay:2.5}}
            >
              <h2  className="text-3xl text-primary-blue md:text-8xl mt-5">
                Sobre Nós
              </h2>
            
              
              <p  className="mt-4  text-blue-light md:mt-4 md:block md:text-xl">
                Somos um casal de psicoterapeutas dedicados a ajudar você a
                alcançar bem-estar emocional e mental. Atuamos com empatia e
                experiência em áreas como depressão, ansiedade, autismo e saúde
                mental. Nosso objetivo é proporcionar um atendimento
                personalizado, acolhedor e focado nas suas necessidades, te
                guiando na busca por uma vida mais leve e equilibrada.
              </p>

              <div   className="mt-4 md:mt-8 text-center lg:text-left">
                <a
                  href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
                  target="blank"
                  className="inline-block rounded-3xl bg-primary-blue px-12 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1b4a61] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                >
                  Conhecer Mais
                </a>
                
              </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;

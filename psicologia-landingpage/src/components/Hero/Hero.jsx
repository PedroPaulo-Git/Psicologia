import React from 'react';
import ModelHeroImage from '../../assets/HeroImage.png'
import H1Image from '../../assets/H1Image.png'

 const Hero = () => {
  return (
    <div className='h-[100%] bg-primary-dark'>
   
<section className="overflow-hidden sm:grid sm:grid-cols-2 items-center bg-gradient-to-r from-zinc-950 to-transparent ">
  <div className="p-8 md:p-12 lg:px-16 lg:pt-0  flex-col flex m-auto ">
    <div className="mx-auto max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-9xl text-blue-light md:text-8xl relative">
      <img className="absolute w-64 right-10 -top-20 " src={H1Image} alt="" />
      
      Psicoterapia
      para suas necessidades
      </h2>

      <p className="hidden text-primary-blue md:mt-4 md:block md:text-2xl">
      Apoio em todas as fases da vida.
      </p>

      <div className="mt-4 md:mt-8">
      <a
    href="#"
    className="inline-block rounded-3xl bg-primary-blue px-12 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#111928] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
>
    Agendar Consulta
</a>

      </div>
    </div>
  </div>

 <img className="h-32 w-full object-contain sm:h-4/5 mt-0 pt-0" src={ModelHeroImage} alt="" />
</section>
    </div>
  )
}
export default Hero;
import React from 'react'
import BackgroundAbout from '../../assets/BackgroundAbout.png'
import Brain from '../../assets/brain2.png'


const About = () => {
    return (
        <div className='bg-primary-dark border-b-[#032536] border-b-4 relative'>
            <section>
                <img
                    alt=""
                    src={Brain} className="absolute w-3/4 bottom-0 opacity-5 "
                />
                <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-44">

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src={BackgroundAbout} className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24 relative">

                            <span className="flex items-center">
                                <span className="h-px flex-1 bg-[#8ecae6]"></span>
                                <span className="shrink-0 px-6 text-[#8ecae6]">Quem Somos</span>
                                <span className="h-px flex-1 bg-[#8ecae6]"></span>
                            </span>
                            <h2 className="text-9xl text-primary-blue md:text-8xl mt-5">Sobre Nós</h2>

                            <p className="mt-4  text-blue-light md:mt-4 md:block md:text-xl">
                                Somos um casal de psicoterapeutas dedicados a ajudar você a alcançar bem-estar emocional e mental. Atuamos com empatia e experiência em áreas como depressão, ansiedade, autismo e saúde mental. Nosso objetivo é proporcionar um atendimento personalizado, acolhedor e focado nas suas necessidades,
                                te guiando na busca por uma vida mais leve e equilibrada.
                            </p>

                            <div className="mt-4 md:mt-8">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-primary-blue px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Conhecer Mais
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
export default About;
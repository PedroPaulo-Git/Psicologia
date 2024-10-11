import React from "react";
import Icon1 from "../../assets/icons/icon.png";
import Icon2 from "../../assets/icons/icons2.png";
import Icon3 from "../../assets/icons/icon3.png";
import { MdOutlineHandshake } from "react-icons/md";

const Services = () => {
  return (
    <div>
      <section
        className="bg-gray-900 text-white bg-gradient-to-b from-primary-dark to-transparent "
        id="servicos"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl text-primary-blue md:text-7xl mt-5">
              Psicólogos capacitados para te ajudar nessa fase
            </h2>

            <p className="mt-4 text-blue-light md:mt-4 md:block md:text-2xl">
              Somos um casal de psicólogos especializados em oferecer suporte
              para uma vida mais leve e equilibrada. Trabalhamos juntos para
              cuidar da sua saúde mental, com foco em temas como depressão,
              ansiedade, autismo e outros desafios emocionais.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block relative m-auto rounded-xl border border-[#162a4a] p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <div className="absolute z-20 flex text-center justify-center top-0 left-0">
                <span className="z-10 pr-5 pt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.775"
                    height="30.429"
                    viewBox="0 0 33.775 30.429"
                  >
                    <path
                      d="M-914.7,666.824a8.193,8.193,0,0,0-6.3,6.21,8.106,8.106,0,0,0,1.47,6.721h-.033l13.492,15.741a1.637,1.637,0,0,0,2.486,0l13.492-15.741h-.033a8.106,8.106,0,0,0,1.47-6.721,8.193,8.193,0,0,0-6.3-6.21,8.2,8.2,0,0,0-9.868,8.019A8.2,8.2,0,0,0-914.7,666.824Z"
                      transform="translate(921.722 -666.139)"
                      fill="none"
                      stroke="#0b0449"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    ></path>
                  </svg>
                </span>
                <span className="absolute w-24 ">
                  <img className=" top-0 -z-10" src={Icon1} alt="" />
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-primary-blue z-30">
                Terapia de Casal
              </h2>

              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Trabalhamos com casais para promover uma comunicação saudável e
                soluções de conflitos, criando uma relação mais forte e
                equilibrada.
              </p>
            </a>

            <a
              className="block relative m-auto rounded-xl border border-[#162a4a] p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <div className="absolute z-20 flex text-center justify-center top-0 left-0">
                <span className="z-10 pr-5 pt-4 font-black">
                  <svg
                    stroke="currentColor"
                    fill="#000000"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    width="37.775"
                    height="44.429"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M250.73,109.69l-25.53-51a12,12,0,0,0-16.1-5.37L182.88,66.38,129,52.14a3.92,3.92,0,0,0-2,0L73.12,66.38,46.9,53.27a12,12,0,0,0-16.1,5.37L5.27,109.69a12,12,0,0,0,5.37,16.1l27.29,13.65,55.75,39.82a3.87,3.87,0,0,0,1.35.62l64,16a4,4,0,0,0,3.8-1l55.54-55.54,27-13.5a12,12,0,0,0,5.37-16.1Zm-51,36.95-37.2-29.8a4,4,0,0,0-5.34.3c-19.49,19.64-41.34,17.11-55.29,8.2a4.07,4.07,0,0,1-1.85-3,3.91,3.91,0,0,1,1.11-3.21L145.62,76h35.91l29.6,59.21ZM12.21,116.32a4,4,0,0,1,.22-3L38,62.22h0A4,4,0,0,1,41.54,60a4,4,0,0,1,1.78.43l24,12L38.21,130.64l-24-12A4,4,0,0,1,12.21,116.32Zm146.56,71.25L97.71,172.3l-52.6-37.57L75.45,74,128,60.14,157.72,68H144a4,4,0,0,0-2.79,1.13l-45.7,44.33a12,12,0,0,0,2.06,18.62c19.88,12.71,44.13,10,62.66-6.81L194,152.33Zm85-71.25a4,4,0,0,1-2,2.32l-24,12L188.68,72.43l24-12A4,4,0,0,1,218,62.22l25.53,51.05A4,4,0,0,1,243.79,116.32ZM127.94,217a4,4,0,0,1-3.88,3,4.09,4.09,0,0,1-1-.12L81.38,209.45a4,4,0,0,1-1.36-.62L53.68,190a4,4,0,0,1,4.65-6.51l25.72,18.37,41,10.25A4,4,0,0,1,127.94,217Z"></path>
                  </svg>
                </span>
                <span className="absolute w-24 ">
                  <img className=" top-0 -z-10" src={Icon2} alt="" />
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Apoio para Depressão
              </h2>
              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Oferecemos suporte emocional e psicológico para ajudar na
                compreensão e enfrentamento da depressão, proporcionando um
                espaço acolhedor e terapêutico.
              </p>
            </a>

            <a
              className="block relative m-auto rounded-xl border border-[#162a4a] p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <div className="absolute z-20 flex text-center justify-center top-0 left-0">
                <span className="z-10 pr-5 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.228"
                    height="32.271"
                    viewBox="0 0 28.228 32.271"
                  >
                    <g id="feather" transform="translate(988.26 -659.726)">
                      <path
                        d="M-960.671,660.365s-18.87,6.74-26.957,31"
                        transform="translate(0)"
                        fill="none"
                        stroke="#0b0449"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M-979.471,681.256c14.152-2.022,20.415-10.39,22.239-20.891"
                        transform="translate(-3.44)"
                        fill="none"
                        stroke="#0b0449"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M-948.626,673.367a5.9,5.9,0,0,0-4.043-1.348"
                        transform="translate(-14.741 -4.914)"
                        fill="none"
                        stroke="#0b0449"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M-958.931,684.742s-1.348-2.7-5.391-1.348"
                        transform="translate(-9.827 -9.552)"
                        fill="none"
                        stroke="#0b0449"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="absolute w-24 ">
                  <img className=" top-0 -z-10" src={Icon3} alt="" />
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Terapia para Ansiedade
              </h2>
              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Trabalhamos com estratégias eficazes de manejo da ansiedade,
                visando melhorar a qualidade de vida e o bem-estar emocional.
              </p>
            </a>

            <a
              className="block relative m-auto rounded-xl border border-[#162a4a] p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <div className="absolute z-20 flex text-center justify-center top-0 left-0">
                <span className="z-10 pr-5 pt-2 font-black">
                  <svg
                    stroke="currentColor"
                    fill="#000000"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    width="37.775"
                    height="44.429"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M218.14,161.93a4,4,0,0,0-3.86-.24,24,24,0,0,1-34.23-23.25,24,24,0,0,1,34.23-20.13A4,4,0,0,0,220,114.7V72a12,12,0,0,0-12-12H167a32,32,0,1,0-62.91-10.33A32.57,32.57,0,0,0,105,60H64A12,12,0,0,0,52,72v37a32,32,0,1,0-10.33,62.91A32.28,32.28,0,0,0,52,171v37a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V165.31A4,4,0,0,0,218.14,161.93ZM212,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V165.31a4,4,0,0,0-1.86-3.38,4,4,0,0,0-3.85-.24,24,24,0,0,1-34.24-20.13,24,24,0,0,1,34.24-23.25A4,4,0,0,0,60,114.7V72a4,4,0,0,1,4-4h46.69a4,4,0,0,0,3.62-5.71,24,24,0,0,1,20.13-34.24,24,24,0,0,1,23.25,34.24A4,4,0,0,0,161.31,68H208a4,4,0,0,1,4,4v37a32.57,32.57,0,0,0-10.33-.94A32,32,0,1,0,212,171Z"></path>
                  </svg>
                </span>
                <span className="absolute w-24 ">
                  <img className=" top-0 -z-10" src={Icon1} alt="" />
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Intervenções para o Autismo
              </h2>
              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Oferecemos acompanhamento especializado e técnicas voltadas para
                o desenvolvimento e bem-estar de pessoas no espectro autista.
              </p>
            </a>

            <a
              className="block relative m-auto rounded-xl border border-[#162a4a] p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <div className="absolute z-20 flex text-center justify-center top-0 left-0">
                <span className="z-10 pr-5 pt-4 font-black">
                  <svg
                    stroke="currentColor"
                    fill="#000000"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    width="37.775"
                    height="44.429"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M244,124a52.1,52.1,0,0,0-32-48V72a44,44,0,0,0-84-18.3A44,44,0,0,0,44,72v4a52,52,0,0,0,0,96v4a44,44,0,0,0,84,18.3A44,44,0,0,0,212,176v-4A52.07,52.07,0,0,0,244,124ZM88,212a36,36,0,0,1-36-36v-1.41A52.13,52.13,0,0,0,64,176h8a4,4,0,0,0,0-8H64A44,44,0,0,1,49.33,82.5,4,4,0,0,0,52,78.73V72a36,36,0,0,1,72,0v78.75A44,44,0,0,0,88,132a4,4,0,0,0,0,8,36,36,0,0,1,0,72Zm104-44h-8a4,4,0,0,0,0,8h8a52.13,52.13,0,0,0,12-1.41V176a36,36,0,1,1-36-36,4,4,0,0,0,0-8,44,44,0,0,0-36,18.75V72a36,36,0,0,1,72,0v6.73a4,4,0,0,0,2.67,3.77A44,44,0,0,1,192,168Zm12-56a4,4,0,0,1-4,4h-4a32,32,0,0,1-32-32V80a4,4,0,0,1,8,0v4a24,24,0,0,0,24,24h4A4,4,0,0,1,204,112ZM92,84a32,32,0,0,1-32,32H56a4,4,0,0,1,0-8h4A24,24,0,0,0,84,84V80a4,4,0,0,1,8,0Z"></path>
                  </svg>
                </span>
                <span className="absolute w-24 ">
                  <img className=" top-0 -z-10" src={Icon2} alt="" />
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Saúde Mental e Bem-Estar
              </h2>
              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Promovemos um espaço seguro para discutir e tratar questões de
                saúde mental, com foco no crescimento pessoal e equilíbrio
                emocional.
              </p>
            </a>

            <a
              className="block relative m-auto rounded-xl border border-[#162a4a] p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <div className="absolute z-20 flex text-center justify-center top-1 left-0">
                <span className="z-10 pr-5 font-black">
                  <svg
                    stroke="currentColor"
                    fill="#000000"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    width="37.775"
                    height="44.429"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M243.63,48.12a4,4,0,0,0-3.76-3.75c-50.25-3-90.44,12.1-107.52,40.29-11.64,19.22-11.17,41.92,1.24,64.21a67.33,67.33,0,0,0-16.65,34.41L93.45,159.79c8.63-16,8.81-32.33.42-46.19C81.45,93.09,52.35,82.13,16,84.26A4,4,0,0,0,12.26,88c-2.13,36.33,8.83,65.43,29.34,77.85a41.82,41.82,0,0,0,21.88,6.18,51.29,51.29,0,0,0,24.31-6.6L116,193.67c0,.28,0,.56,0,.84V224a4,4,0,0,0,8,0V194.51a59.57,59.57,0,0,1,15.29-40c11.49,6.36,23.07,9.56,34.24,9.56a57,57,0,0,0,29.81-8.41C231.52,138.57,246.59,98.38,243.63,48.12ZM45.74,159C28.47,148.56,19,123.69,20.08,92.08c31.61-1.09,56.48,8.39,67,25.66,6.48,10.71,6.59,23.37.46,36.09L58.82,125.17a4,4,0,0,0-5.65,5.65l28.67,28.67C69.11,165.62,56.45,165.51,45.74,159ZM199.19,148.8c-16.05,9.72-35.09,9.59-54.08-.25l57.72-57.73a4,4,0,0,0-5.65-5.66l-57.73,57.73c-9.84-19-10-38-.25-54.08,15.11-25,51.08-38.53,96.63-36.64C237.73,97.72,224.15,133.69,199.19,148.8Z"></path>
                  </svg>
                </span>
                <span className="absolute w-24 ">
                  <img className=" top-0 -z-10" src={Icon3} alt="" />
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Reestruturação Pós-Divórcio
              </h2>

              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Auxiliamos casais ou indivíduos a reconstruir suas vidas
                emocionais e psicológicas após um divórcio ou separação.
              </p>
            </a>
          </div>

          {/* <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Comece Hoje
                        </a>
                    </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;

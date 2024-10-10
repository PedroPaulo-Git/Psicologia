import React from 'react';

const Services = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white bg-gradient-to-b from-primary-dark to-transparent ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-9xl text-primary-blue md:text-7xl mt-5">
            Psicólogos capacitados para te ajudar nessa fase
            </h2>

            <p className="mt-4 text-blue-light md:mt-4 md:block md:text-2xl">
            Somos um casal de psicólogos especializados em oferecer suporte para uma vida mais leve e equilibrada. 
        Trabalhamos juntos para cuidar da sua saúde mental, com foco em temas como depressão, ansiedade, autismo 
        e outros desafios emocionais.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Terapia de Casal
              </h2>

              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Trabalhamos com casais para promover uma comunicação saudável e soluções de
                conflitos, criando uma relação mais forte e equilibrada.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Mediação de Conflitos
              </h2>

              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Ajudamos casais a resolver disputas de forma justa, com foco na compreensão
                mútua e na restauração da harmonia.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Planejamento Familiar
              </h2>

              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Orientamos casais na criação de uma estrutura familiar equilibrada, abordando
                questões emocionais e logísticas.
              </p>
            </a>

            {/* Novas 3 divs */}
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Terapia Pré-Matrimonial
              </h2>

              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Preparamos casais para o casamento, abordando expectativas, comunicação e
                resolução de problemas antes da vida a dois.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Terapia para Crises no Casamento
              </h2>

              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Apoiamos casais em momentos críticos, auxiliando na superação de crises
                emocionais e reconectando parceiros.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 max-w-xs"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-primary-blue">
                Reestruturação Pós-Divórcio
              </h2>

              <p className="mt-4 text-blue-light md:mt-4 md:block md:text-lg">
                Auxiliamos casais ou indivíduos a reconstruir suas vidas emocionais e psicológicas
                após um divórcio ou separação.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Comece Hoje
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

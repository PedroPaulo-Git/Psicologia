import React, { useRef, useEffect } from "react";
import Post1 from "../../assets/post1.jpg";
import Post2 from "../../assets/post2.jpg";
import Post3 from "../../assets/post3.jpg";
import Post4 from "../../assets/post4.jpg";
import Post5 from "../../assets/post5.jpg";
import Post6 from "../../assets/post6.jpg";
import Post7 from "../../assets/post7.jpg";
import Post8 from "../../assets/post8.jpg";
import Background from "../../assets/background.svg";
import { motion, useInView } from "framer-motion";

import "./posts.css";

const posts = [
  {
    id: 1,
    image: Post1,
    alt: "Post 1",
    // link: "https://www.instagram.com/p/C-T019wtcKd/",
  link:"https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
  },
  {
    id: 2,
    image: Post2,
    alt: "Post 2",
    // link: "https://www.instagram.com/p/C53O0SasqWS/",
  link:"https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
  },
  {
    id: 3,
    image: Post3,
    alt: "Post 3",
    // link: "https://www.instagram.com/p/C_1LbpPv6xN/",
  link:"https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
  },
  {
    id: 4,
    image: Post4,
    alt: "Post 4",
    // link: "https://www.instagram.com/p/C_35jDsPow4/",
  link:"https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
  },
  {
    id: 5,
    image: Post7,
    alt: "Post 5",
    // link: "https://www.instagram.com/p/C_3HUOLvmow/",
  link:"https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
  },
  {
    id: 6,
    image: Post6,
    alt: "Post 6",
    // link: "https://www.instagram.com/p/C_YXf_Jvpql/",
  link:"https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
  },
  {
    id: 7,
    image: Post7,
    alt: "Post 7",
    // link: "https://www.instagram.com/p/C_T5xfhvZsN/",
  link:"https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
  },
  {
    id: 8,
    image: Post7,
    alt: "Post 8",
    // link: "https://www.instagram.com/p/C_tiXlcvLVd/",
  link:"https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."
  },
];
const Posts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    console.log("isInView:", isInView);
  }, [isInView]);

  return (
    <div className="background bg-[#111928]" id="posts">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <motion.div
          className="max-w-1/2 max-h-1/2"
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animation only runs when in view
          transition={{ duration: 1 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium text-primary-blue  sm:text-6xl">
              Insights sobre Psicologia
            </h2>

            <p className="mt-4 text-blue-light sm:text-xl">
              Explore alguns de nossos pensamentos, dicas e insights
              profissionais mais recentes sobre saúde mental, terapia e
              crescimento pessoal. Fique informado e inspirado com nossa jornada
              na psicologia.
            </p>
          </div>
        </motion.div>

        <dl ref={ref} className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <div className="rounded-lg m-auto">
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                className="group relative block bg-black max-h-72 max-w-72"
              >
                <img
                  alt=""
                  src={post.image}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="mt-40 sm:mt-44 lg:mt-32">
                    <div className="translate-y-12 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Explore e assista nosso conteúdo no Instagram, onde
                        compartilhamos dicas valiosas, insights sobre saúde
                        mental, e momentos do nosso trabalho em psicologia.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </dl>
        <div className="flex justify-center my-24">
          <hr  className="border-t-2 border-[#263a5e] w-4/5" />
        </div>
      </div>
    </div>
  );
};
export default Posts;

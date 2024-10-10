import React from 'react'
import Post1 from '../../assets/post1.jpg';
import Post2 from '../../assets/post2.jpg';
import Post3 from '../../assets/post3.jpg';
import Post4 from '../../assets/post4.jpg';
import Post5 from '../../assets/post5.jpg';
import Post6 from '../../assets/post6.jpg';
import Post7 from '../../assets/post7.jpg';
import Post8 from '../../assets/post8.jpg';

const posts = [
    { id: 1, image: Post1, alt: 'Post 1', link: '/post1' },
    { id: 2, image: Post2, alt: 'Post 2', link: '/post2' },
    { id: 3, image: Post3, alt: 'Post 3', link: '/post3' },
    { id: 4, image: Post4, alt: 'Post 4', link: 'https://www.instagram.com/p/C_35jDsPow4/' },
    { id: 5, image: Post5, alt: 'Post 5', link: 'https://www.instagram.com/p/C_3HUOLvmow/' },
    { id: 6, image: Post6, alt: 'Post 6', link: '/post6' },
    { id: 7, image: Post7, alt: 'Post 7', link: '/post7' },
    { id: 8, image: Post8, alt: 'Post 8', link: 'https://www.instagram.com/p/C_tiXlcvLVd/' },
];
const Posts = () => {
    return (
        <div className='bg-[#111928]'>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-medium text-primary-blue  sm:text-6xl">Insights sobre Psicologia</h2>

                    <p className="mt-4 text-blue-light sm:text-xl">
                        Explore alguns de nossos pensamentos, dicas e insights profissionais mais recentes sobre saúde mental, terapia e crescimento pessoal. Fique informado e inspirado com nossa jornada na psicologia.
                    </p>
                </div>


                <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    {posts.map((post) => (<div className="rounded-lg">
                        <a key={post.id} href={post.link} target="_blank"  className="group relative block bg-black max-h-72 max-w-72">
                            <img
                                alt=""
                                src={post.image} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">

                                <div className="mt-12 sm:mt-14 lg:mt-32">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                      <p className="text-sm text-white">
  Explore e assista nosso conteúdo no Instagram, onde compartilhamos dicas valiosas, insights sobre saúde mental, e momentos do nosso trabalho em psicologia.
</p>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>))}

                </dl>
                <div className="flex justify-center my-24">
            <hr className="border-t-2 border-[#263a5e] w-4/5" />
        </div>
            </div>
        </div>
    )
}
export default Posts
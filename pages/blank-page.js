import React from 'react';
import Layout from '../components/layout/Layout';

const Blank = () => {
    return (
        <>
            <Layout>
            <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
                <div className="container">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Blank Page</h1>
                    <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                        <li className="inline-flex items-center">
                            <a href="#" className="hover:text-blue-500 text-gray-800">Home</a>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </li>
                        <li className="inline-flex items-center text-gray-400">
                            <span>Blank page</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-40">
                <div className="container">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Lorem ipsum dolor</h1>
                    <p className="mb-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta molestias aspernatur delectus. Ut cum ex vel rem blanditiis suscipit libero autem excepturi esse facere a ipsum sapiente iure, iusto distinctio provident quidem harum incidunt et amet, reprehenderit ad repellendus quibusdam. Omnis dolorum quis est quidem temporibus a excepturi, voluptate eos sequi beatae consectetur dolorem harum soluta aliquid reiciendis repudiandae. Natus voluptatum ex temporibus eum quia maxime quas unde reprehenderit, quasi error similique laudantium, suscipit vel perspiciatis aspernatur quidem id qui deserunt quod. Ab ullam ipsam atque saepe corporis? Mollitia, laudantium eum. Dolore harum iusto ab dignissimos obcaecati quia accusamus! Illo.</p>

                    <h2 className="text-xl lg:text-2xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Lorem ipsum dolor</h2>
                    <p className="mb-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta molestias aspernatur delectus. Ut cum ex vel rem blanditiis suscipit libero autem excepturi esse facere a ipsum sapiente iure, iusto distinctio provident quidem harum incidunt et amet, reprehenderit ad repellendus quibusdam. Omnis dolorum quis est quidem temporibus a excepturi, voluptate eos sequi beatae consectetur dolorem harum soluta aliquid reiciendis repudiandae. Natus voluptatum ex temporibus eum quia maxime quas unde reprehenderit, quasi error similique laudantium, suscipit vel perspiciatis aspernatur quidem id qui deserunt quod. Ab ullam ipsam atque saepe corporis? Mollitia, laudantium eum. Dolore harum iusto ab dignissimos obcaecati quia accusamus! Illo.</p>

                    <h3 className="text-lg lg:text-xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Lorem ipsum dolor</h3>
                    <p className="mb-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta molestias aspernatur delectus. Ut cum ex vel rem blanditiis suscipit libero autem excepturi esse facere a ipsum sapiente iure, iusto distinctio provident quidem harum incidunt et amet, reprehenderit ad repellendus quibusdam. Omnis dolorum quis est quidem temporibus a excepturi, voluptate eos sequi beatae consectetur dolorem harum soluta aliquid reiciendis repudiandae. Natus voluptatum ex temporibus eum quia maxime quas unde reprehenderit, quasi error similique laudantium, suscipit vel perspiciatis aspernatur quidem id qui deserunt quod. Ab ullam ipsam atque saepe corporis? Mollitia, laudantium eum. Dolore harum iusto ab dignissimos obcaecati quia accusamus! Illo.</p>
                </div>
            </section>
            </Layout>
        </>
    );
};

export default Blank;
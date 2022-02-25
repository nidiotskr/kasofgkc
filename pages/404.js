import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const Custom404 = () => {
    return (
        <>
            <Layout>
                <section className="pt-20 pb-32">
                    <div className="container text-center">
                        <img className="mb-4 mx-auto md:max-w-md mb-12 wow animate__animated animate__fadeIn" src="/assets/imgs/illustrations/error2.png" alt="Monst" />
                        <span className="text-4xl text-blue-500 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">Error 404</span>
                        <h2 className="mb-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">Something went wrong!</h2>
                        <p className="mb-6 text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".4s">Sorry, but we are unable to open this page.</p>
                        <div>
                            <Link href="/"><a className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn" data-wow-delay=".5s">Go back to Homepage</a></Link>
                            <Link href="/contact"><a className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded wow animate__animated animate__fadeIn" data-wow-delay=".6s">Contact Us</a></Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Custom404;
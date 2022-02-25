import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const Blog2 = () => {
    return (
        <>
            <Layout>
                <section className="py-20">
                    <div className="container">
                        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Our Blog</h1>
                        <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-gray-800">
                                    Home
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-gray-800">
                                    Our Services
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center text-gray-400">
                                <span>Web Development</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                                <Link href="/blog">
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Development</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href="/blog-single">
                                        <a className="hover:text-blue-500"> How to Make Website WCAG Compliant?</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
                                <Link href="/blog-single">
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Read More</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                                <Link href="/blog-single">
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-6.png" alt="Monst" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                                <Link href="/blog-2">
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href="/blog-single">
                                        <a className="hover:text-blue-500"> You have a Great Is Business Idea?</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
                                <Link href="/blog-single">
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Read More</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                                <Link href="/blog-single">
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-7.png" alt="Monst" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                                <Link href="/blog-2">
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href="/blog-single">
                                        <a className="hover:text-blue-500"> The Future of Enterprise API Development</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
                                <Link href="/blog-single">
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Read More</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                                <Link href="/blog-single">
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-8.png" alt="Monst" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                                <Link href="/blog-2">
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href="/blog-single">
                                        <a className="hover:text-blue-500"> How To Make Your iOS 13 Compatible?</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
                                <Link href="/blog-single">
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Read More</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                                <Link href="/blog-single">
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-9.jpg" alt="Monst" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link href="/blog">
                                <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">Show all posts</a>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blue-500">
                    <div className="container">
                        <div className="text-center max-w-xl mx-auto">
                            <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                                <span>Subscribe now to </span>
                                <span className="text-blue-200">Our Newsletter</span> <br />
                                <span>and get the Coupon code.</span>
                            </h2>
                            <p className="mb-8 text-blueGray-200">All your information is completely confidential</p>
                            <div className="flex flex-wrap max-w-lg mx-auto">
                                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                                    <svg className="h-6 w-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <input className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none" type="text" placeholder="Type your e-mail" />
                                </div>
                                <button className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Blog2;
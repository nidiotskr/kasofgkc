import React from 'react';
import Layout from '../components/layout/Layout';
import Slider2 from '../components/slider/Slider2';
import TextEffect from "../components/elements/TextEffect"
import Link from "next/link";

const Index2 = () => {
    return (
        <>
            <Layout>
                <section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                            Committed to <span className="text-blue-500">People</span> and the future
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                            We are <strong className="text-blue-500">Monst</strong>, a Creative Design{" "}
                                            <span className="typewrite d-inline text-brand">
                                                <TextEffect text1="Web Agency" text2="Social Marketing" />
                                            </span>
                                        </p>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm">Helping you maximize operations management with digitization</p>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn" href="#key-features">
                                            Key Features
                                        </a>
                                        <a className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animated animate__fadeIn" data-wow-delay=".3s" href="#how-we-work">
                                            How We Work?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/eating.svg" alt="Monst" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-16 pb-20" id="key-features">
                    <div className="container">
                        <div className="flex flex-wrap items-center mb-12">
                            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <span>Saas Solutions for </span>
                                    <br />
                                    <span className="text-blue-600">your Business </span>
                                    <span>
                                        Grow <br />
                                        on time
                                    </span>
                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="lg:pl-16 text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    Business solution company sit our any how site used the our company any site us it-solve theme is very professional theme business & corporate, finance, advisor, solution, company and all project used, there are all kinds of websites here.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 -mb-6">
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">IT Consultancy</h3>
                                    <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">Web Development</h3>
                                    <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">App Development</h3>
                                    <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">Digital Marketing</h3>
                                    <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20" id="how-we-work">
                    <div className="container">
                        <div className="flex flex-wrap -mx-8">
                            <div className="w-full lg:w-1/2 px-8">
                                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                    <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        Great Things In Business Are <span className="text-blue-600">Never Done</span> By One Person.
                                    </h2>
                                    <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                                    </p>
                                    <Link href="/services">
                                        <a className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            Learn More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-8">
                                <ul className="space-y-12">
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Project Initialization</h3>
                                            <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Looking for Creative</h3>
                                            <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Market Development</h3>
                                            <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-20">
                    <div className="container">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                        Simple Solution for <span className="text-blue-500">Complex</span> Connections
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>
                                </div>
                                <div className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div id="carausel-fade-1-arrows" className="flex"></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="relative w-full rounded">
                                    <div className="carausel-fade slick-carausel rounded" id="carausel-fade-1">
                                        <Slider2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container">
                        <div className="text-center mb-8">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                                <span>Choose Your </span>
                                <br />
                                <span className="text-blue-600">Best </span>
                                <span>Pricing Plan</span>
                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                Great Things In Business Are Never Done By One Person
                            </p>
                        </div>
                        <div className="flex flex-wrap sm:justify-center mb-10">
                            <label className="flex items-center mr-8 mb-2 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                <input type="radio" name="billing" value="1" />
                                <span className="mx-2 font-semibold">Monthly Billing</span>
                                <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">$59</span>
                            </label>
                            <label className="flex items-center mb-2 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                                <input type="radio" name="billing" value="2" />
                                <span className="mx-2 font-semibold">Annual Billing</span>
                                <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">$99</span>
                            </label>
                        </div>
                        <div className="flex flex-wrap bg-white rounded shadow wow animate__animated animate__fadeIn animated">
                            <div className="w-full md:w-1/2 lg:w-2/5 px-3">
                                <div className="p-8 text-center">
                                    <span className="text-blueGray-400">Sign In</span>
                                    <h4 className="mb-6 text-2xl">Setup your payment</h4>
                                    <div className="flex mb-4 px-4 bg-blueGray-100 rounded">
                                        <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="email" placeholder="name@email.com" />
                                        <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                        </svg>
                                    </div>
                                    <div className="flex mb-6 px-4 bg-blueGray-100 rounded">
                                        <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="password" placeholder="Enter your password" />
                                        <button className="ml-4">
                                            <svg className="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="text-left mb-5 text-sm text-blueGray-400">
                                        <label>
                                            <input type="checkbox" name="terms" value="1" />
                                            <span className="ml-1">I agree to terms and conditions.</span>
                                        </label>
                                    </div>
                                    <button className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">Purchase now</button>
                                </div>
                            </div>
                            <div className="relative w-full md:w-1/2 lg:w-3/5 px-3 bg-blue-500 rounded-r overflow-hidden">
                                <div className="max-w-sm px-12 pt-12">
                                    <span className="text-xs text-blue-200">Various Analysis Options</span>
                                    <h3 className="mb-4 text-4xl font-bold font-heading text-white">Techno Provides Realtime Best Data Solutions.</h3>
                                </div>
                                <div className="absolute right-0 bottom-0">
                                    <div className="flex items-center h-full">
                                        <img className="h-80" src="/assets/imgs/illustrations/online-shopping.png" alt="Monst" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-2xl lg:max-w-3xl mx-auto">
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                    Get in touch!
                                </h2>
                                <p className="text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                                    We will be glad to hear from you
                                </p>
                            </div>
                            <div className="flex flex-wrap -mx-3 text-center">
                                <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-400">Phone</span>
                                        <p>+ 48 654-430-309</p>
                                        <p>+ 1 6532-430-309</p>
                                    </div>
                                </div>
                                <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-400">E-mail</span>
                                        <p>contact@monst.com</p>
                                        <p>pat@example.com</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-400">Address</span>
                                        <p>11567 E Broadview Dr</p>
                                        <p>Colorado(CO), 80117</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-4 text-sm wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                        <span className="mr-4 font-semibold">Departament:</span>
                                        <label className="mr-4">
                                            <input className="mr-1" type="radio" name="department" value="1" checked="" />
                                            <span>Support</span>
                                        </label>
                                        <label>
                                            <input className="mr-1" type="radio" name="department" value="2" />
                                            <span>Sales</span>
                                        </label>
                                    </div>
                                    <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                        <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Subject" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Name" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                            </div>
                                            <div>
                                                <label className="flex px-2 bg-blueGray-50 rounded">
                                                    <input className="hidden" type="file" name="Choose file" />
                                                    <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Browse</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/2 px-3">
                                            <textarea className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Message..."></textarea>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <label>
                                            <input className="mr-1" type="checkbox" name="terms" value="1" />
                                            <span className="text-sm font-semibold">I agree to terms and conditions.</span>
                                        </label>
                                        <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Index2;
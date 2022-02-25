import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link";
import CounterUp from "../components/elements/Counterup"

const About = () => {
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
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                            Committed to <span className="text-blue-500">People</span> and the future
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                                            We are <strong className="text-blue-500">Monst</strong>, a Creative Design <span className="typewrite d-inline text-brand" data-period="3000" data-type='["Web Agency", "Social Marketing" ]'></span>
                                        </p>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">Helping you maximize operations management with digitization</p>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <Link href="/services">
                                            <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">Our Services</a>
                                        </Link>
                                        <Link href="#how-we-work">
                                            <a className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                                How We Work?
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/team.svg" alt="Monst" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-6 pb-2">
                    <div className="container">
                        <div className="flex flex-wrap justify-between pt-8 pb-16">
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={150} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={58} time={3} />
                                    </span>
                                    <span className="sm:text-2xl font-bold font-heading"> k </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={500} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".8s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={320} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-blueGray-50" id="how-we-work">
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
                                    <span>We are </span>
                                    <span className="text-blue-500">awesome team </span>
                                    <br />
                                    <span>for your business dream</span>
                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="p-12 bg-white shadow rounded">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                                    <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/eating.svg" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">Project Initialization</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Project initiation ensures that you lay a strong foundation for a new project in your company our team.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="p-12 bg-white shadow rounded">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                                    <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/space.svg" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">Project planning</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">A project plan is essential to keep everything related to the project organized, methodical, and on track.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                                    <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/tasks.svg" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">Project organization</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Moving forward you will be able to keep yourself and your team on track, and address challenges early.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20">
                    <div className="container text-center">
                        <div className="max-w-lg mx-auto mb-16">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl"> About Our Expert</span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                                Entrust Your Project To Our <span className="text-blue-500"> Specialists </span>
                            </h2>
                            <p className="text-blueGray-400 leading-loose">Our IT services converge business and technology experts to help to manage business categories</p>
                        </div>
                        <div className="flex flex-wrap -mx-5">
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                    <p className="text-gray-500 text-xs mt-3">CEO, Co Founders</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                                    <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                                    <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                                    <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-5.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Al-amin Bishash</strong>
                                    <p className="text-gray-500 text-xs mt-3">Director</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-6.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Sanuya Santa</strong>
                                    <p className="text-gray-500 text-xs mt-3">Marketing</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-7.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Steven Job</strong>
                                    <p className="text-gray-500 text-xs mt-3">Designer</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-8.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Romario</strong>
                                    <p className="text-gray-500 text-xs mt-3">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-20">
                    <div className="container">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="max-w-md mb-8 mx-auto">
                                <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                    Contact Us
                                </span>
                                <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".s">
                                    We will <span className="text-blue-500">be glad</span> to hear from you!
                                </h2>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-4 text-sm wow animate__animatedanimated animate__fadeIn" data-wow-delay=".5s">
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
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Subject" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Name" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <textarea className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Message..."></textarea>
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="flex px-2 bg-blueGray-50 rounded">
                                            <input className="hidden" type="file" name="Choose file" />
                                            <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Browse</span>
                                        </label>
                                    </div>
                                    <div className="flex justify-between items-center wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <label>
                                            <input className="mr-1" type="checkbox" name="terms" value="1" />
                                            <span className="text-sm font-semibold">I agree to terms and conditions.</span>
                                        </label>
                                        <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
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

                {/* <section className="relative">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
                    <div className="container">
                        <div className="relative flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                                <Link href="/"><a className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".1s">
                                    <img className="h-10" src="/assets/imgs/logos/monst-logo.svg" alt="Monst" />
                                </a></Link>
                                <div className="mt-12 mb-16">
                                    <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".1s">Subscribe and stay fully connected with product.</p>
                                    <div className="flex flex-wrap lg:flex-nowrap items-center wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".3s">
                                        <div className="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-blueGray-50 rounded">
                                            <svg className="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                            <input className="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none" type="text" placeholder="Type your e-mail" />
                                        </div>
                                        <button className="hover-up-2 w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Sign Up</button>
                                    </div>
                                </div>
                                <div className="hidden lg:block wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".5s">
                                    <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                                    <div className="-mx-2 mt-4">
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                        </a></Link>
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                                        </a></Link>
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
                                <div className="flex flex-row flex-wrap justify-around mb-12">
                                    <div className="w-1/2 lg:w-auto mb-12 wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".1s">
                                        <h5 className="mb-6 text-lg font-bold font-heading">About</h5>
                                        <ul className="space-y-3">
                                            <li><Link href="/about"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">About us</a></Link></li>
                                            <li><Link href="/portfolio"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Portfolio</a></Link></li>
                                            <li><Link href="/services"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Services</a></Link></li>
                                            <li><Link href="/contact"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Contact</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="w-1/2 lg:w-auto mb-12 wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".3s">
                                        <h5 className="mb-6 text-lg font-bold font-heading">Quick links</h5>
                                        <ul className="space-y-3">
                                            <li><Link href="/team"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Team</a></Link></li>
                                            <li><Link href="/pricing"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Pricing</a></Link></li>
                                            <li><Link href="/testimonials"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Testimonials</a></Link></li>
                                            <li><Link href="/faqs"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Faqs</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-auto mb-4 wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".5s">
                                        <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                                        <ul className="space-y-3">
                                            <li><Link href="/blog"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Bussiness</a></Link></li>
                                            <li><Link href="/blog-2"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Marketing</a></Link></li>
                                            <li><Link href="/blog-single"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Single</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="lg:hidden text-center">
                                    <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                                    <div className="-mx-2 mt-4">
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                        </a></Link>
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                                        </a></Link>
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </Layout>
        </>
    );
};

export default About;
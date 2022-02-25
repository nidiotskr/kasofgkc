import React from 'react';
import Layout from '../components/layout/Layout';

const Team = () => {
    return (
        <>
        <Layout>
       
           <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
                <div className="container text-center">
                    <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Our Team</h1>
                    <ul className="mx-auto text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                        <li className="inline-flex items-center">
                            <a href="#" className="hover:text-blue-500 text-gray-800">Home</a>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </li>
                        <li className="inline-flex items-center text-gray-400">
                            <span>Portfolio</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-20 bg-blueGray-50">
                <div className="container">
                    <div className="max-w-lg mx-auto mb-12 text-center">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Our Team Leader</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            Meet Your <span className="text-blue-500">Experts</span> <br />
                            Team Member
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Our Customers Very Happy With Our Services.</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                    <div className="pl-4">
                                        <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                        <p className="text-gray-500 text-xs mt-3">CEO, Co Founders</p>
                                    </div>
                                </div>
                                <p className="leading-loose text-blueGray-400 mb-5">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                <div className="flex space-x-2">
                                    <a href="#">
                                        <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                    <div className="pl-4">
                                        <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                                        <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                                    </div>
                                </div>
                                <p className="leading-loose text-blueGray-400 mb-5">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                <div className="flex space-x-2">
                                    <a href="#">
                                        <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                                    <div className="pl-4">
                                        <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                                        <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                                    </div>
                                </div>
                                <p className="leading-loose text-blueGray-400 mb-5">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                <div className="flex space-x-2">
                                    <a href="#">
                                        <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                                    <div className="pl-4">
                                        <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                                        <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                                    </div>
                                </div>
                                <p className="leading-loose text-blueGray-400 mb-5">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                <div className="flex space-x-2">
                                    <a href="#">
                                        <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20">
                <div className="container text-center">
                    <div className="max-w-lg mx-auto mb-12">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Our Team</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            Our Awesome <br />
                            <span className="text-blue-500">Creative</span> Team Member
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".4s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Geraldine Tusoy</strong></p>
                            <p className="text-gray-500 text-xs mb-4">CEO, Co Founders</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Clara Kolawole</strong></p>
                            <p className="text-gray-500 text-xs mb-4">CEO-Founder</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Chris Fulton</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Project-Manager</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".7s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Dany Connolly</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Direct-Founder</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-5.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Al-amin Bishash</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Director</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-6.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Sanuya Santa</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Marketing</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-7.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Steven Job</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Designer</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".7s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-8.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Romario</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Designer</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20">
                <div className="container">
                    <div className="max-w-2xl lg:max-w-3xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Get in touch!</h2>
                            <p className="text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">We will be glad to hear from you</p>
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
                                    <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Submit</button>
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

export default Team;
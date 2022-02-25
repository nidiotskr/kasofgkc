import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const BlogSingle = () => {
    return (
        <>
            <Layout>
                <section className="pb-20">
                    <div className="pt-20 pb-8 mb-12 bg-cover bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/placeholders/img-14.jpg')" }}>
                        <div className="container">
                            <div className="max-w-2xl mx-auto">
                                <div className="text-center mb-6">
                                    <span className="text-base md:text-lg">
                                        <Link href="/blog">
                                            <a className="text-blueGray-200 hover:underline">
                                                <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">Bussiness</span>
                                            </a>
                                        </Link>
                                        <span className="text-blueGray-200 text-sm">24 Jan, 2021</span>
                                    </span>
                                    <h2 className="text-4xl md:text-5xl mt-4 text-white font-bold font-heading">Best Tailwind CSS template for your SASS landing site</h2>
                                </div>
                                <div className="flex justify-center mb-8">
                                    <img className="w-12 h-12 object-cover rounded-full" src="/assets/imgs/placeholders/avatar-8.png" alt="Monst" />
                                    <div className="pl-4">
                                        <p className="text-blueGray-100 mb-1">Alice Bradley</p>
                                        <p className="text-xs text-blueGray-200 font-semibold">Co Founders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="max-w-2xl mx-auto">
                            <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.
                            </p>
                            <div className="w-full mx-auto px-12 pt-5 pb-10 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                <div className="w-full mb-6 border-l-4 border-gray-100">
                                    <p className="text-lg text-gray-600 px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
                                </div>
                                <div className="w-full pl-6">
                                    <p className="text-md text-indigo-500 font-bold">Scott Windon</p>
                                    <p className="text-xs text-gray-500">@scott.windon</p>
                                </div>
                            </div>
                            <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt lorem cursus suscipit. Integer scelerisque sem et sem porta, eu volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam mattis, sapien a commodo ultrices, nunc orci tincidunt ante, tempus tempus turpis metus laoreet lacus. Praesent condimentum, arcu ut fringilla tincidunt, augue diam pretium augue, sit amet vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget,
                                consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
                            </p>
                            <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
                            </p>
                            <a href="#" target="_blank" className="inline-flex items-center text-gray-600 dark:text-gray-200 hover:underline mt-8 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                                    <title>Logo Twitter</title>
                                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                                </svg>
                                <span className="mx-2">Share on twitter</span>
                            </a>

                            <div className="flex flex-wrap mt-12 mb-12">
                                <div className="w-full">
                                    <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                        <div className="flex items-center mb-4">
                                            <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                            <div className="pl-4">
                                                <strong className="mt-6 mb-1 text-md">Geraldine Tusoy</strong>
                                                <p className="text-xs mt-3">CEO, Co Founders</p>
                                            </div>
                                        </div>
                                        <p className="leading-loose mb-5 text-sm">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="antialiased mx-auto max-w-screen-sm">
                                <h3 className="mb-6 text-3xl font-semibold text-gray-900">Comments</h3>
                                <div className="space-y-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-3">
                                            <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                        </div>
                                        <div className="flex-1 border border-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                            <strong>Kolawole</strong>
                                            <span className="text-xs text-gray-400">3:34 PM</span>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex -space-x-2 mr-2">
                                                    <img className="rounded-full w-6 h-6 border border-white" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                                                    <img className="rounded-full w-6 h-6 border border-white" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                                                </div>
                                                <div className="text-sm text-gray-500 font-semibold">5 Replies</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-3">
                                            <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="/assets/imgs/placeholders/avatar-5.png" alt="Monst" />
                                        </div>
                                        <div className="flex-1 border border-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                            <strong>Fulton</strong>
                                            <span className="text-xs text-gray-400">3:34 PM</span>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                            <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</h4>
                                            <div className="space-y-4">
                                                <div className="flex">
                                                    <div className="flex-shrink-0 mr-3">
                                                        <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src="/assets/imgs/placeholders/avatar-6.png" alt="Monst" />
                                                    </div>
                                                    <div className="flex-1 bg-gray-50 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                                        <strong>Clara </strong>
                                                        <span className="text-xs text-gray-400">3:34 PM</span>
                                                        <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="flex-shrink-0 mr-3">
                                                        <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src="/assets/imgs/placeholders/avatar-7.png" alt="Monst" />
                                                    </div>
                                                    <div className="flex-1 bg-gray-50 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                                        <strong>Dany </strong>
                                                        <span className="text-xs text-gray-400">3:34 PM</span>
                                                        <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 mt-12">
                                <form className="w-full max-w-xl bg-white rounded-lg">
                                    <div className="flex flex-wrap mb-6">
                                        <h2 className="pt-3 pb-2 text-gray-800 text-lg font-bold">Add a new comment</h2>
                                        <div className="w-full md:w-full mb-2 mt-2">
                                            <textarea className="bg-gray-100 rounded border border-gray-100 leading-normal resize-none w-full h-32 py-4 px-3 focus:outline-none focus:bg-white text-sm" name="body" placeholder="Type Your Comment" required></textarea>
                                        </div>
                                        <div className="w-full md:w-full flex items-start md:w-full px-1">
                                            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                                <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-xs md:text-xs pt-px">Some HTML is okay.</p>
                                            </div>
                                        </div>
                                        <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 block p-4 text-center text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded mt-6">Post Comment</button>
                                    </div>
                                </form>
                            </div>
                            <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center mt-12">
                                <Link href="/blog">
                                    <a className="px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform border border-gray-100 rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"> Read More Articles </a>
                                </Link>
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
            </Layout>
        </>
    );
};

export default BlogSingle;
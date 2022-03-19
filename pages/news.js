import React from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from '../components/elements/Counterup';

const News = () => {
  return (
    <>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-slate-400">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              한인회 소식
            </h1>
          </div>
        </section>

        <section className="pt-20 pb-24 bg-blueGray-50">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12"></div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-12 bg-white shadow rounded">
                  <img
                    className="h-24 mx-auto my-4"
                    src="/assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                    alt="Monst"
                  />

                  <p className="text-lg text-blueGray-400 leading-relaxed">
                    03/19/2022
                  </p>
                  <h2 className="text-sm mb-2 font-bold font-heading text-xl">
                    103rd Korean Independence Movement Day
                  </h2>
                </div>
              </div>
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="p-12 bg-white shadow rounded">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    2
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="Monst"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Project planning
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    A project plan is essential to keep everything related to
                    the project organized, methodical, and on track.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                <div
                  className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    3
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/tasks.svg"
                    alt="Monst"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Project organization
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Moving forward you will be able to keep yourself and your
                    team on track, and address challenges early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-16 xl:bg-contain bg-top bg-no-repeat">
          <div className="container">
            <div className="text-center mb-16">
              <h2
                className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <span>Start saving time today and</span>
                <span className="text-blue-500"> choose </span>
                <span>your best plan</span>
              </h2>
              <p
                className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown"
                data-wow-delay=".5s"
              >
                Best for freelance developers who need to save their time
              </p>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 border border-gray-200 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/startup.svg"
                    alt="Monst"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Startup
                  </h3>
                  <span className="text-4xl text-blue-500 font-bold font-heading">
                    $45.99
                  </span>
                  <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-blueGray-400">
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>3 Emails</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>1 Datebases</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>10 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      href="#"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/agency.svg"
                    alt="Monst"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Agency
                  </h3>
                  <span className="text-4xl font-bold font-heading">
                    $65.99
                  </span>
                  <p className="mt-2 mb-8">user per month</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul>
                      <li className="flex items-center mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>6 Emails</span>
                      </li>
                      <li className="flex items-center mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>4 Datebases</span>
                      </li>
                      <li className="flex items-center mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>35 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded"
                      href="#"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border border-blue-400 hover:border-blue-400 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 border border-gray-200 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".6s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/enterprise.svg"
                    alt="Monst"
                  />
                  <h3 className="mb-2 text-4xl font-bold font-heading">
                    Enterprise
                  </h3>
                  <span className="text-4xl text-blue-500 font-bold font-heading">
                    $85.99
                  </span>
                  <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-blueGray-400">
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>12 Emails</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>8 Datebases</span>
                      </li>
                      <li className="flex mb-3">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="w-6 h-6 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>50 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      href="#"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default News;

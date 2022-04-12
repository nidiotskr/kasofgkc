import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const News = () => {
  return (
    <>
      <Layout>
        <section
          className="-mt-24 pt-48 pb-12 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/sunflower3.jpg')",
          }}
        >
          <div className="container">
            <h1 className="text-3xl text-center lg:text-6xl text-white mb-5 wow animate__animated animate__fadeIn animated">
              한인회 활동
            </h1>
          </div>
        </section>

        <section className="pt-12 pb-24 bg-blueGray-50">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12"></div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="p-8 bg-white shadow rounded">
                  <img
                    className="h-36 w-full object-cover object-top"
                    src="/assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                    alt="Monst"
                  />
                  <p className="text-lg text-blueGray-400 leading-relaxed">
                    03/19/2022
                  </p>
                  <a
                    className="text-sm mb-2 font-bold font-heading text-xl hover:text-blue-800"
                    href="/news_template"
                  >
                    103rd Korean Independence Movement Day
                  </a>
                </div>
              </div>

              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="p-8 bg-white shadow rounded">
                  <img
                    className="h-36 w-full object-cover object-top"
                    src="/assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                    alt="Monst"
                  />
                  <p className="text-lg text-blueGray-400 leading-relaxed">
                    03/19/2022
                  </p>
                  <a
                    className="text-sm mb-2 font-bold font-heading text-xl hover:text-blue-800"
                    href="/about"
                  >
                    103rd Korean Independence Movement Day2
                  </a>
                </div>
              </div>

              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="p-8 bg-white shadow rounded">
                  <img
                    className="h-36 w-full object-cover object-top"
                    src="/assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                    alt="Monst"
                  />
                  <p className="text-lg text-blueGray-400 leading-relaxed">
                    03/19/2022
                  </p>
                  <a
                    className="text-sm mb-2 font-bold font-heading text-xl hover:text-blue-800"
                    href="/about"
                  >
                    103rd Korean Independence Movement Day3
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12"></div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-8 bg-white shadow rounded">
                  <img
                    className="h-36 w-full object-cover object-top"
                    src="/assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                    alt="Monst"
                  />
                  <p className="text-lg text-blueGray-400 leading-relaxed">
                    03/19/2022
                  </p>
                  <h2 className="text-sm mb-2 font-bold font-heading text-xl">
                    103rd Korean Independence Movement Day4
                  </h2>
                </div>
              </div>

              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-8 bg-white shadow rounded">
                  <img
                    className="h-36 w-full object-cover object-top"
                    src="/assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                    alt="Monst"
                  />
                  <p className="text-lg text-blueGray-400 leading-relaxed">
                    03/19/2022
                  </p>
                  <h2 className="text-sm mb-2 font-bold font-heading text-xl">
                    103rd Korean Independence Movement Day5
                  </h2>
                </div>
              </div>

              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-8 bg-white shadow rounded">
                  <img
                    className="h-36 w-full object-cover object-top"
                    src="/assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                    alt="Monst"
                  />
                  <p className="text-lg text-blueGray-400 leading-relaxed">
                    03/19/2022
                  </p>
                  <h2 className="text-sm mb-2 font-bold font-heading text-xl">
                    103rd Korean Independence Movement Day6
                  </h2>
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

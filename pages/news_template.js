import React from 'react';
import Layout from '../components/layout/Layout';
import Slider3 from '../components/slider/Slider3';
import TextEffect from '../components/elements/TextEffect';
import Link from 'next/link';

const news_template = () => {
  return (
    <>
      <Layout>
        <section
          className="-mt-24 pt-28 bg-top bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/background6.jpg')",
          }}
        ></section>
        <section className="hero-3">
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-3/5 px-3 mb-12 lg:mb-0"></div>
            </div>
          </div>
        </section>
        {/* Main */}
        <section className="py-12 md:pt-20 md:pb-12" id="how-we-work">
          <div className="container">
            <div className="max-w-lg mx-auto mb-20 text-center">
              <h3
                className="my-3 text-3xl md:text-4xl text-blueGray-900 font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay="0"
              >
                103rd Korean Independence Movement Day
              </h3>
              <p
                className="text-blueGray-400 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                March 19, 2022
              </p>
            </div>
            <div
              className="flex flex-col justify-center relative max-w-6xl mx-auto bg-indigo-50 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <img
                className="m-12"
                src="/assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                alt="Monst"
              />

              <p
                className="text-slate-500 mx-24 mb-12 wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of
                duty or the obligations of business it will frequently occur
                that pleasures have to be repudiated and annoyances accepted.
                The wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to secure other
                greater pleasures, or else he endures pains to avoid worse
                pains.
              </p>
            </div>
          </div>
        </section>

        {/* newsletter subscription */}
        <section
          className="py-20 bg-top bg-no-repeat"
          style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}
        >
          <div className="container">
            <div className="relative py-20 px-4 lg:p-20">
              <div className="max-w-lg mx-auto text-center">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                  <span>Subscribe now to </span>
                  <span className="text-blue-500">Our Newsletter. </span>
                </h2>
                <p
                  className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  All your information is completely confidential
                </p>
                <div
                  className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                    <svg
                      className="h-6 w-6 my-auto text-blueGray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <input
                      className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="text"
                      placeholder="Type your e-mail"
                    />
                  </div>
                  <button
                    className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default news_template;

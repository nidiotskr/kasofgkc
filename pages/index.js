import React from 'react';
import Layout from '../components/layout/Layout';
import TextEffect from '../components/elements/TextEffect';
import Greeting from './greeting';
import Poster from './index_poster';
import Footer from '../components/layout/Footer';
import Welcome from './welcome';

const Home = () => {
  return (
    <>
      <Layout>
        <section
          className="w-full h-screen pb-40 bg-center bg-cover bg-no-repeat -mt-24 pt-36"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/sunflower1.jpg')",
          }}
        >
          <div className="container">
            <div className="py-12 mb-24">
              <div className="w-full mx-auto mb-8">
                <span className="text-color-primary text-5xl lg:text-7xl font-semibold font-heading">
                  캔사스 한인회
                </span>
                <br />
                <br />
                <h1 className="text-color-primary-200 text-2xl lg:text-4xl mb-4 font-semibold font-heading wow animate__animated animate__fadeIn">
                  The Korean American Association of
                </h1>
                <h1 className="text-color-primary-200 text-4xl lg:text-6xl font-semibold font-heading">
                  <TextEffect text="Greater Kansas City" />
                </h1>
              </div>
            </div>
          </div>
        </section>
        <Welcome />
        <Poster />
        <section
          id="contact-section"
          className="py-32 bg-theme-primary text-color-secondary"
        >
          <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2
                  className="text-4xl text-color-secondary font-bold font-heading wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  캔사스 한인회 연락하기
                </h2>
                <p
                  className="text-blueGray-400 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  We will be glad to hear from you
                </p>
              </div>
              <div className="flex flex-wrap -mx-3 text-center">
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-color-primary-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed text-blueGray-400">
                    <span className="text-sm">Phone</span>
                    <p>+ 1 913 000 0000</p>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-color-primary-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed text-blueGray-400">
                    <span className="text-sm">E-mail</span>
                    <p>kckasocity@gmail.com</p>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-color-primary-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed text-blueGray-400">
                    <span className="text-sm">Address</span>
                    <p>10322 Metcalf Ave</p>
                    <p>Overland Park(KS), 66212</p>
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

export default Home;

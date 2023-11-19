import React from 'react';
import path from 'path';
import fs from 'fs';
import Layout from '../components/layout/Layout';
import { Transition } from '@headlessui/react';
import TextEffect from '../components/elements/TextEffect';
import Poster from './index_poster';
import Welcome from './welcome';
import Footer from '../components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home = props => {
  const { t } = useTranslation('home');
  const { mostRecentPosterPath } = props;

  return (
    <>
      <Layout>
        <section
          className="w-full h-screen pb-40 bg-top 2xl:bg-center bg-cover bg-no-repeat -mt-24 pt-36"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/sunflower1-2.jpg')",
          }}
        >
          <div className="container">
            <div className="py-12 mb-24">
              <div className="w-full mx-auto mb-8 text-center">
                <div className="w-full h-full ">
                  <Transition
                    appear={true}
                    show={true}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    className="text-color-primary bg-opacity-50 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold  font-notoserif-kr wow animate__animated animate__fadeIn"
                  >
                    <h1>캔사스시티 한인회</h1>
                  </Transition>
                  <br />
                  <br />
                  <h2
                    className="text-color-primary-200 bg-opacity-50 text-lg tracking-tighter lg:tracking-normal sm:text-3xl lg:text-3xl 2xl:text-4xl mb-4 font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    THE KOREAN AMERICAN SOCIETY OF
                  </h2>
                  <h1 className="text-color-primary-200 bg-opacity-50 text-2xl tracking-wide sm:tracking-tighter sm:text-5xl lg:text-5xl 2xl:text-6xl font-heading font-semibold">
                    <TextEffect text="GREATER KANSAS CITY" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Welcome />
        <Poster posterPath={mostRecentPosterPath} />
        <section
          id="donation-section"
          className="bg-slate-300 py-24 lg:py-36 px-4"
        >
          <div className="flex flex-col items-center hover-up-5">
            <div className="flex flex-col max-w-4xl gap-8 lg:gap-16">
              <div className="w-full">
                <p className="text-center wow animate__animated animate__fadeIn">
                  <span className="font-heading font-semibold text-3xl lg:text-5xl">
                    {t('donation')}
                  </span>
                </p>
              </div>
              <div className="flex flex-col m-auto max-w-sm lg:max-w-3xl px-4 lg:px-16">
                <div
                  className="wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <img
                    className="w-full object-cover rounded-md shadow-lg"
                    src={'/assets/imgs/elements/gofundme_poster.jpeg'}
                    alt="gofundme poster"
                  />
                </div>
                <div
                  className="w-full flex flex-col items-center pt-6 lg:pt-12 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <img
                    className="w-[200px] rounded-md shadow-lg"
                    src={'/assets/imgs/elements/gofundme.jpeg'}
                    alt="gofundme poster"
                  />
                  <p className="font-heading font-semibold text-sm lg: text-md pt-4 lg:pt-8">
                    Please scan the barcode to start a donation today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact-section"
          className="pt-24 pb-6 lg:pt-36 lg:pb-24 bg-theme-primary text-color-secondary"
        >
          <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-2xl lg:text-4xl text-color-secondary font-bold font-heading wow animate__animated animate__fadeIn animated">
                  {t('contact')}
                </h2>
                <p
                  className="pt-2 text-blueGray-400 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  We will be glad to hear from you.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center -mx-3 text-center">
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".2s"
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
                    <p>+ 1 913 909 0604</p>
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
                    <p>kckasociety@gmail.com</p>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".4s"
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
                    <p>10609 Floyd St</p>
                    <p>Overland Park(KS), 66212</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer page="main" />
    </>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => {
  const rootPath = path.join(process.cwd(), 'public/assets/imgs/posters');
  const posterNames = fs.readdirSync(rootPath).sort((a, b) => {
    return b - a;
  });

  const today = new Date()
    .toJSON()
    .slice(0, 10)
    .replace('-', '')
    .replace('-', '');
  let diff_max = 1000;
  let mostRecentPosterName = '';

  posterNames.map(posterName => {
    let posterNameParsed = posterName.split('_')[0];
    let diff = parseInt(posterNameParsed) - parseInt(today);

    if (diff < diff_max && diff >= 0) {
      diff_max = diff;
      mostRecentPosterName = posterName;
    }
  });

  const mostRecentPosterPath = mostRecentPosterName
    ? path.join('assets/imgs/posters', mostRecentPosterName)
    : null;

  return {
    props: {
      mostRecentPosterPath,
      ...(await serverSideTranslations(locale, [
        'home',
        'header',
        'greeting',
        'poster',
        'mobilemenu',
      ])),
    },
  };
};

import React from 'react';

import Layout from '../../components/layout/Layout';

import path from 'path';
import fs from 'fs';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function DynamicPage(props) {
  const { t } = useTranslation('news');
  const router = useRouter();
  const { eventName } = router.query;
  const event = props.events.find(event => event.eventName === eventName);

  const is_previous_news_click_disabled = () => {
    const event_index = props.events.findIndex(
      event => event.eventName === eventName,
    );

    return event_index === 0;
  };

  const is_next_news_click_disabled = () => {
    const num_events = props.events.length;
    const event_index = props.events.findIndex(
      event => event.eventName === eventName,
    );

    return event_index === num_events - 1;
  };

  const handle_previous_news_click = () => {
    const event_index = props.events.findIndex(
      event => event.eventName === eventName,
    );
    const prev_eventName = props.events[event_index - 1].eventName;

    router.push(`/news/${prev_eventName}`);
  };

  const handle_next_news_click = () => {
    const event_index = props.events.findIndex(
      event => event.eventName === eventName,
    );
    const next_eventName = props.events[event_index + 1].eventName;

    router.push(`/news/${next_eventName}`);
  };

  const PrevButton = () => {
    if (is_previous_news_click_disabled()) {
      return (
        <button
          className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-gray-300 text-sm font-medium text-gray-500"
          disabled
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={handle_previous_news_click}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
        </button>
      );
    }
  };

  const NextButton = () => {
    if (is_next_news_click_disabled()) {
      return (
        <button
          className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-gray-300 text-sm font-medium text-gray-500"
          disabled
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={handle_next_news_click}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
      );
    }
  };

  return (
    <>
      <Layout>
        <section
          className="-mt-24 pt-48 pb-12 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/assets/imgs/backgrounds/header9.png')",
          }}
        >
          <div className="container max-w-7xl">
            <h1 className="text-3xl text-center md:text-5xl lg:text-6xl text-white mb-5 wow animate__animated animate__fadeIn">
              {t('title')}
            </h1>
          </div>
        </section>
        <section className="py-12 lg:py-24 md:pt-20 md:pb-12" id="how-we-work">
          <div className="container">
            <div className="max-w-lg mx-auto mb-10 lg:mb-20 text-center">
              <h3
                className="my-3 text-3xl md:text-4xl text-blueGray-900 font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay="0"
              >
                {event.eventMeta.title}
              </h3>
              <p
                className="text-blueGray-400 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                {event.eventMeta.date}
              </p>
            </div>
            <div
              className="flex flex-col justify-center relative max-w-3xl mx-auto bg-slate-200 wow animate__animated animate__fadeIn rounded-md"
              data-wow-delay=".3s"
            >
              <img
                className="m-4 md:m-6 lg:m-12 rounded-md"
                src={event.eventMeta.img_path}
                alt="Monst"
              />
              {/* <p
                className="text-slate-500 mx-24 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                {event.eventMeta.description}
              </p> */}
              <div>
                <nav
                  className="pb-4 px-4 flex justify-between rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <PrevButton />
                  <NextButton />
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          className="py-12 bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('../assets/imgs/elements/blob.svg')",
          }}
        >
          <div className="container">
            <div className="relative py-20 px-4 lg:p-20">
              <div className="max-w-lg mx-auto text-center">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                  <span>Subscribe to new events from </span>
                  <span className="text-blue-500">KASGKC </span>
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
        </section> */}
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const rootPath = path.join(process.cwd(), 'public/assets/imgs/news');
  const eventNames = fs.readdirSync(rootPath);

  const events = eventNames.map(eventName => {
    const eventPath = path.join(rootPath, eventName);
    const fileNames = fs.readdirSync(eventPath);
    const [eventMetaFileName] = fileNames.filter(fileName => {
      return fileName.indexOf('.json') !== -1;
    });
    const eventMeta = JSON.parse(
      fs.readFileSync(path.join(eventPath, eventMetaFileName)),
    );

    return {
      eventName,
      eventMeta,
    };
  });

  return {
    props: {
      events,
      ...(await serverSideTranslations(locale, [
        'home',
        'header',
        'greeting',
        'poster',
        'mobilemenu',
        'news',
      ])),
    },
  };
}

export async function getStaticPaths() {
  const rootPath = path.join(process.cwd(), 'public/assets/imgs/news');
  const eventNames = fs.readdirSync(rootPath);
  let paths = [];
  eventNames.map(eventName => {
    paths.push({
      params: { eventName: eventName },
      locale: 'ko',
    });
    paths.push({
      params: { eventName: eventName },
      locale: 'en',
    });
  });

  return { paths, fallback: false };
}

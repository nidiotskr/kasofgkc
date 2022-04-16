import React from 'react';
import Layout from '../components/layout/Layout';
import News_card from './news/news_card';
import path from 'path';
import fs from 'fs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const News = props => {
  const events = props.events;
  return (
    <>
      <Layout>
        <section
          className="-mt-24 pt-48 pb-12 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/assets/imgs/backgrounds/sunflower3.jpg')",
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
              <News_card news={events} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default News;

export const getStaticProps = async ({ locale }) => {
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
    const imageNames = fileNames.filter(fileName => {
      return fileName.indexOf('.json') == -1;
    });

    const imagePaths = imageNames.map(imageName => {
      const imagePath = path.join('/assets/imgs/news', eventName, imageName);
      return imagePath;
    });

    return {
      eventName,
      eventMeta,
      imagePaths: imagePaths,
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
      ])),
    },
  };
};

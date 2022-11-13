import React from 'react';
import Layout from '../components/layout/Layout';
import NewsCard from '../components/NewsCard';
import path from 'path';
import fs from 'fs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Footer from '../components/layout/Footer';

const News = props => {
  const events = props.events;
  const { t } = useTranslation('news');

  return (
    <>
      <Layout>
        <section
          className="-mt-24 pt-48 pb-12 bg-top lg:bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/assets/imgs/backgrounds/header9.png')",
          }}
        >
          <div className="container max-w-7xl">
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl text-white mb-5 wow animate__animated animate__fadeIn animated">
              {t('title')}
            </h1>
          </div>
        </section>
        <section className="pt-8 lg:pt-24 pb-48 bg-slate-200">
          <div className="container max-w-6xl">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              {events.map((event, i) => {
                return <NewsCard news={event} key={i} />;
              })}
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default News;

export const getStaticProps = async ({ locale }) => {
  const rootPath = path.join(process.cwd(), 'public/assets/imgs/news');
  const eventNames = fs.readdirSync(rootPath).reverse();

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
        'mobilemenu',
        'news',
      ])),
    },
  };
};

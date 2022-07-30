import React from 'react';
import path from 'path';
import fs from 'fs';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Activities(props) {
  const events = props.events;
  const { t } = useTranslation('activities');

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
            <h1 className="text-3xl text-center md:text-5xl lg:text-6xl text-white mb-5 wow animate__animated animate__fadeIn animated">
              {t('title')}
            </h1>
          </div>
        </section>
        <section className="bg-slate-100">
          <div className="container max-w-6xl pt-6 lg:pt-12">
            <div className="flex flex-col justfy-center">
              {events.map((event, i) => {
                return (
                  <div
                    className="py-8 lg:py-12 text-center wow animate__animated animate__fadeIn animated"
                    key={i}
                  >
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                      {event.eventMeta.title}
                    </h2>
                    <p className="font-medium pt-4 text-sm md:text-lg lg:text-xl">
                      {event.eventMeta.date}
                    </p>
                    {event.eventMeta.description === '' ? (
                      <></>
                    ) : (
                      <p className="mx-4 lg:mx-12 pt-6 lg:pt-12 text-sm md:text-lg text-left">
                        {event.eventMeta.description}
                      </p>
                    )}
                    <div className="mx-4 lg:mx-12 pt-6 lg:pt-12 grid grid-cols-2 lg:grid-cols-3 gap-2 wow animate__animated animate__fadeIn animated">
                      {event.imagePaths.map((imagePath, i) => {
                        return (
                          <Image
                            key={i}
                            className="rounded-sm"
                            src={imagePath}
                            alt={imagePath}
                            width={500}
                            height={350}
                            quality={50}
                          ></Image>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
}

export default Activities;

export const getStaticProps = async ({ locale }) => {
  const rootPath = path.join(process.cwd(), 'public/assets/imgs/activities');
  const eventNames = fs.readdirSync(rootPath).sort((a, b) => {
    return b - a;
  });

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
      const imagePath = path.join(
        '/assets/imgs/activities',
        eventName,
        imageName,
      );
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
        'activities',
        'header',
        'mobilemenu',
      ])),
    },
  };
};

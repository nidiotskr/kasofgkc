import React from 'react';
import path from 'path';
import fs from 'fs';
import Image from 'next/image';
import Layout from '../components/layout/Layout';

function ImageGallery(props) {
  const events = props.events;
  console.log(events);

  return (
    <Layout>
      <section className="-mt-24 pt-40 pb-12 bg-slate-500">
        <div className="container">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            한인회 활동
          </h1>
        </div>
      </section>
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {events.map(event => {
            return (
              <>
                <div className="py-12 text-center wow animate__animated animate__fadeIn animated">
                  <h1 className="text-4xl font-bold">
                    {event.eventMeta.title}
                  </h1>
                  <p className="text-sm">{event.eventMeta.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 wow animate__animated animate__fadeIn animated">
                  {event.imagePaths.map(imagePath => {
                    return (
                      <Image
                        src={imagePath}
                        alt={imagePath}
                        width={500}
                        height={500}
                      ></Image>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default ImageGallery;

export async function getStaticProps() {
  const rootPath = path.join(process.cwd(), 'public/assets/imgs/activities');
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
    },
  };
}

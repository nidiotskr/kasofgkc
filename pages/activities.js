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
      <section className="bg-slate-100">
        <div className="container max-w-6xl">
          <div className="flex justfy-center">
            {events.map(event => {
              return (
                <div className="py-16 text-center wow animate__animated animate__fadeIn animated">
                  <h1 className="text-4xl font-bold">
                    {event.eventMeta.title}
                  </h1>
                  <p className="text-md">{event.eventMeta.date}</p>
                  <p className="pt-5 text-sm">{event.eventMeta.description}</p>
                  <div className="pt-12 grid grid-cols-3 gap-4 wow animate__animated animate__fadeIn animated">
                    {event.imagePaths.map(imagePath => {
                      return (
                        <Image
                          className="rounded-sm"
                          src={imagePath}
                          alt={imagePath}
                          width={500}
                          height={500}
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

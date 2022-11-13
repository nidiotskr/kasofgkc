import React from 'react';
import Link from 'next/link';

function NewsCard({ news }) {
  const event = news;
  return (
    <Link href={`news/${event.eventName}`}>
      <div
        className="hover-up-5 hover:cursor-pointer w-auto px-3 mb-6 wow animate__animated animate__fadeIn"
        data-wow-delay=".1s"
      >
        <div className="w-full h-full bg-white shadow rounded-md z-10 divide-y">
          <div>
            <img
              className="h-56 w-full object-cover object-top rounded-t-md"
              src={event.eventMeta.thumbnail_path}
              alt="Monst"
            />
          </div>
          <div className="py-6">
            <p className="text-md md:text-lg px-6 font-medium text-blueGray-600 leading-relaxed">
              {event.eventMeta.date}
            </p>
            <p className="px-12 text-lg md:text-xl font-bold font-heading hover:text-blue-800">
              {event.eventMeta.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;

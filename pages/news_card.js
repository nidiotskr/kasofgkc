import React from 'react';
import Link from 'next/link';

function NewsCard({ news }) {
  const event = news;
  return (
    <Link href={`news/${event.eventName}`}>
      <div
        className="hover-up-5 hover:cursor-pointer w-auto lg:w-96 px-3 mb-6 wow animate__animated animate__fadeIn"
        data-wow-delay=".1s"
      >
        <div className="w-full h-full p-8 bg-white shadow rounded">
          <img
            className="h-40 md:h-96 lg:h-48 w-full object-cover object-top"
            src={event.eventMeta.thumbnail_path}
            alt="Monst"
          />
          <p className="text-md pt-2 text-blueGray-400 leading-relaxed">
            {event.eventMeta.date}
          </p>
          <p className="text-md pt-2 font-bold font-heading hover:text-blue-800">
            {event.eventMeta.title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;

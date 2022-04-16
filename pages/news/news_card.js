import React from 'react';

function News_card({ news }) {
  if (Array.isArray(news)) {
    const [event] = news;
    return (
      <div
        className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
        data-wow-delay=".1s"
      >
        <div className="p-8 bg-white shadow rounded">
          <img
            className="h-36 w-full object-cover object-top"
            src={event.eventMeta.img_path}
            alt="Monst"
          />
          <p className="text-lg text-blueGray-400 leading-relaxed">
            {event.eventMeta.date}
          </p>
          <a
            className="text-sm mb-2 font-bold font-heading text-xl hover:text-blue-800"
            href="/news_template"
          >
            {event.eventMeta.title}
          </a>
        </div>
      </div>
    );
  }
  return <div>default</div>;
}

export default News_card;

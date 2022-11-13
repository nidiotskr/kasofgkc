import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

function Poster(props) {
  const { posterPath } = props;
  const { t } = useTranslation('poster');

  return (
    <section className="bg-slate-200 py-24 lg:py-36">
      <div className="flex flex-col items-center hover-up-5">
        <div className="flex flex-col max-w-4xl gap-12 lg:gap-24">
          <div className="w-full">
            <p className="text-center wow animate__animated animate__fadeIn">
              <span className="font-heading font-semibold text-4xl lg:text-7xl">
                {t('event')}
              </span>
            </p>
          </div>
          <div className="max-w-sm lg:max-w-3xl px-8 lg:px-16 mx-auto">
            <Link href="/blog-single">
              <div
                className="wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                {posterPath ? (
                  <img
                    className="w-full object-cover rounded-md shadow-lg"
                    src={posterPath}
                    alt="recent_news"
                  />
                ) : (
                  <img
                    className="w-full object-cover rounded-md shadow-lg"
                    src={'/assets/imgs/backgrounds/commingsoon.jpg'}
                    alt="recent_news"
                  />
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poster;

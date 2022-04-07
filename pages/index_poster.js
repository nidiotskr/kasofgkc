import React from 'react';
import Link from 'next/link';

function Poster() {
  return (
    <section className="bg-slate-200">
      <div className="flex flex-col items-center py-16 lg:py-24 hover-up-5">
        <div className="max-w-4xl">
          <div className="w-full mb-12">
            <p
              className="text-center wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <span className="font-heading font-semibold text-5xl lg:text-7xl">
                UPCOMING EVENT
              </span>
            </p>
          </div>
          <div className="max-w-2xl px-4 mx-auto">
            <Link href="/blog-single">
              <div
                className="wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="w-full object-cover rounded-xl shadow-lg"
                  src="assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
                  alt="recent_news"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
    // <section className="relative">
    //   <div className="bg-slate-100">
    //     <div className="flex justify-center py-20">
    //       <img
    //         src="assets/imgs/posters/adaptive_sports_festival_2020ver.JPG"
    //         alt="org_map"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}

export default Poster;

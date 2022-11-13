import React from 'react';
import Link from 'next/link';

const Footer = props => {
  const { page } = props;
  return (
    <>
      <section
        className={
          page === 'main' ? 'pt-4 pb-8 bg-slate-800' : 'pt-4 pb-8 bg-slate-800'
        }
      >
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-col items-center lg:justify-between">
            <div className="pt-3 -mx-2 mb-2 lg:mb-0">
              <a
                className="inline-block px-2"
                href="https://www.facebook.com/kasofgkc/"
              >
                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Nidiots" />
              </a>
              {/* <a className="inline-block px-2" href="https://twitter.com">
                <img src="/assets/imgs/icons/twitter-blue.svg" alt="Nidiots" />
              </a>
              <a className="inline-block px-2" href="https://www.instagram.com">
                <img
                  src="/assets/imgs/icons/instagram-blue.svg"
                  alt="Nidiots"
                />
              </a> */}
            </div>
            <div>
              <p className="text-sm text-blueGray-400">
                &copy; 2022. Nidiots. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

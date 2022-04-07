import React from 'react';
import Link from 'next/link';

const Footer = props => {
  const { page } = props;
  return (
    <>
      <section
        className={
          page === 'main' ? 'py-8 bg-theme-primary' : 'py-16 bg-slate-200'
        }
      >
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-blueGray-400">
              &copy; 2022. Nidiots. All rights reserved.
            </p>
            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
              <a className="inline-block px-2" href="https://facebook.com">
                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Nidiots" />
              </a>
              <a className="inline-block px-2" href="https://twitter.com">
                <img src="/assets/imgs/icons/twitter-blue.svg" alt="Nidiots" />
              </a>
              <a className="inline-block px-2" href="https://www.instagram.com">
                <img
                  src="/assets/imgs/icons/instagram-blue.svg"
                  alt="Nidiots"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';

const Header = ({ handleHidden }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? 'bg-theme-primary opacity-75 sticky-bar mt-4 stick text-white'
            : 'bg-transparent sticky-bar mt-4 text-white'
        }
      >
        <div className="container">
          <nav className="flex justify-between items-center py-3">
            <Link href="/">
              <a className="text-3xl font-semibold leading-none">LOGO</a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="/">
                  <a className="text-sm font-heading font-semibold hover:text-blueGray-500">
                    한인회 소개
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/greeting">
                      <a className="menu-sub-item text-sm text-black hover:text-blueGray-800">
                        취임사
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/organization">
                      <a className="menu-sub-item text-sm text-black hover:text-blueGray-800">
                        조직도
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/presidents">
                      <a className="menu-sub-item text-sm text-black hover:text-blueGray-800">
                        역대 회장
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/imageGallery">
                  <a className="text-sm font-semibold hover:text-blueGray-500">
                    한인회 활동
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/news">
                  <a className="text-sm font-semibold hover:text-blueGray-500">
                    한인회 소식
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/#contact-section" scroll>
                  <a className="text-sm font-semibold hover:text-blueGray-500">
                    한인회 문의
                  </a>
                </Link>
              </li>
            </ul>
            <div className="hidden lg:block">
              <Link href="/join">
                <a className="btn-accent hover-up-2">Join</a>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
                onClick={handleHidden}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

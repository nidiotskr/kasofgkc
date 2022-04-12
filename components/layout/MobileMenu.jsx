import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
  });

  const handleToggle = key => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className={`${hiddenClass} relative z-50`}>
        <div className="fixed inset-0 bg-blueGray-800 opacity-80"></div>
        <nav className="fixed opacity-80 top-24 left-0 bottom-0 flex flex-col w-full max-w-sm py-6 px-6 bg-theme-primary border-r overflow-y-auto mobile-transition">
          <div className="flex items-center">
            <a className="mr-auto" />
            <button className="navbar-close" onClick={handleRemove}>
              <svg
                className="h-6 w-6 text-color-secondary cursor-pointer hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              <li
                className={
                  isActive.key == 1
                    ? 'mb-1 menu-item-has-children rounded-xl active'
                    : 'mb-1 menu-item-has-children rounded-xl'
                }
                onClick={() => handleToggle(1)}
              >
                <span className="menu-expand text-color-secondary">+</span>
                <Link href="/">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    Home
                  </a>
                </Link>
                <ul className={isActive.key == 1 ? 'dropdown pl-5' : 'hidden'}>
                  <li>
                    <Link href="/index">
                      <a className="block p-3 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                        Home 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-2">
                      <a className="block p-3 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                        Home 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3">
                      <a className="block p-3 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                        Home 3
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-4">
                      <a className="block p-3 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                        Home 4
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-5">
                      <a className="block p-3 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                        Home 5
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-1 rounded-xl">
                <Link href="/about">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2 rounded-xl">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/services">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    Services
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/portfolio">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/pricing">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    Pricing
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/team">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    Team
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/#contact-section">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-6 border-t border-blueGray-100">
              <Link href="/login">
                <a className="block px-4 py-3 mb-2 text-xs text-center text-color-secondary hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded">
                  Log In
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-auto">
            <a className="inline-block px-1" href="https://facebook.com">
              <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
            </a>
            <a className="inline-block px-1" href="https://twitter.com">
              <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
            </a>
            <a className="inline-block px-1" href="https://www.instagram.com">
              <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
  });

  const { t } = useTranslation('mobilemenu');

  const router = useRouter();

  const handleLocaleChange = locale => {
    router.push(router.route, router.asPath, {
      locale: locale,
    });
  };

  function LocaleButton() {
    if (router.locale == 'ko') {
      return (
        <button
          className="m-4 underline underline-offset-1 text-color-secondary"
          onClick={() => handleLocaleChange('en')}
        >
          English
        </button>
      );
    } else {
      return (
        <button
          className="m-4 underline underline-offset-1 text-color-secondary"
          onClick={() => handleLocaleChange('ko')}
        >
          Korean
        </button>
      );
    }
  }

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
                className="h-6 w-6 text-color-secondary hover:text-color-secondary"
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
              <LocaleButton />
              <li className="mb-1 rounded-xl">
                <Link href="/">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    {t('home')}
                  </a>
                </Link>
              </li>
              <li className="mb-1 rounded-xl">
                <Link href="/about">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2 rounded-xl">
                    {t('about')}
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/news">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    {t('news')}
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/activities">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    {t('activities')}
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/#contact-section">
                  <a className="block p-4 text-sm text-color-secondary hover:underline hover:underline-offset-2">
                    {t('contact')}
                  </a>
                </Link>
              </li>
            </ul>
            {/* <div className="mt-4 pt-6 border-t border-blueGray-100">
              <Link href="/login">
                <a className="block px-4 py-3 mb-2 text-xs text-center text-color-secondary hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded">
                  Log In
                </a>
              </Link>
            </div> */}
          </div>
          <div className="mt-auto">
            <a
              className="inline-block px-1"
              href="https://www.facebook.com/kasofgkc/"
            >
              <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;

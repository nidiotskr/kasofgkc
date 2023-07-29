import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

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

  const router = useRouter();

  const handleLocaleChange = locale => {
    router.push(router.route, router.asPath, {
      locale: locale,
    });
  };

  const { t } = useTranslation('header');

  function LocaleButton() {
    if (router.locale == 'ko') {
      return (
        <button
          className="btn-accent hover-up-2"
          onClick={() => handleLocaleChange('en')}
        >
          English
        </button>
      );
    } else {
      return (
        <button
          className="btn-accent hover-up-2"
          onClick={() => handleLocaleChange('ko')}
        >
          Korean
        </button>
      );
    }
  }

  return (
    <>
      <header
        className={
          scroll
            ? 'bg-theme-primary opacity-70 sticky-bar stick mt-4 text-white'
            : 'bg-transparent sticky-bar mt-4 text-white'
        }
      >
        <div className="container">
          <nav className="flex justify-between items-center py-3">
            <Link href="/">
              <a className="flex">
                <img
                  className="w-12 pr-2"
                  src="/assets/imgs/logos/kasgkc-logo.svg"
                ></img>
                <p className="pt-4 pb-4 text-white">KASGKC</p>
              </a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="/about">
                  <a className="text-md hover:text-color-secondary hover:underline hover:underline-offset-4">
                    {t('about')}
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/news">
                  <a className="text-md hover:text-color-secondary hover:underline hover:underline-offset-4">
                    {t('news')}
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/activities">
                  <a className="text-md hover:text-color-secondary hover:underline hover:underline-offset-4">
                    {t('activities')}
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/#contact-section" scroll>
                  <a className="text-md hover:text-color-secondary hover:underline hover:underline-offset-4">
                    {t('contact')}
                  </a>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <a className="text-md hover:text-color-secondary hover:underline hover:underline-offset-4">
                  {t('organizations')}
                </a>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <a className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4">
                      캔사스 상록회
                    </a>
                  </li>
                  <li>
                    <a className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4">
                      캔사스 상공회
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://homepy.korean.net/~kckoreanschool/www/"
                      className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4"
                    >
                      캔사스 한국학교
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ko-kr.facebook.com/kansascitykoreanchoir/"
                      className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4"
                    >
                      캔사스 연합성가단
                    </a>
                  </li>
                  <li>
                    <a className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4">
                      캔사스 장로성가단
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ksainusa.net/"
                      className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4"
                    >
                      재미 대한체육회
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kpsausa.org/"
                      className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4"
                    >
                      재미 대한장애인체육회
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/kwf.in.kc/"
                      className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4"
                    >
                      KC KPOP
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://overseas.mofa.go.kr/us-chicago-ko/index.do"
                      className="menu-sub-item text-sm text-black hover:text-color-secondary hover:underline hover:underline-offset-4"
                    >
                      주시카고 대한민국 총영사관
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/#donation-section" scroll>
                  <a className="text-md hover:text-color-secondary hover:underline hover:underline-offset-4">
                    {t('donation')}
                  </a>
                </Link>
              </li>
            </ul>
            <div className="hidden lg:block">
              <LocaleButton />
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

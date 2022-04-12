import React, { useEffect, useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import Preloader from '../components/elements/Preloader';
import '../public/assets/css/animate.min.css';
import '../public/assets/css/tailwind-v3.css';
import 'swiper/css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);
  return <>{!loading ? <Component {...pageProps} /> : <Preloader />}</>;
}

export default appWithTranslation(MyApp);

import '../public/assets/css/animate.min.css'
import React, { useEffect, useState } from "react";
import '../public/assets/css/tailwind-built.css'
import Preloader from '../components/elements/Preloader';
import "swiper/css";

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default MyApp

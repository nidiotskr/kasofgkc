import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const TextEffect = ({ text }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      startDelay: 300,
      typeSpeed: 70,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TextEffect;

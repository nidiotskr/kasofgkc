import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
const TextEffect = ({ text }) => {
  return (
    <>
      <ReactTypingEffect text={[text]} typingDelay={1000} speed={250} />
    </>
  );
};

export default TextEffect;

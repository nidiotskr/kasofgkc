const Welcome = () => {
  return (
    <section className="py-24 lg:py-40 bg-theme-primary text-color-secondary">
      <div className="container max-w-4xl">
        <p
          className="text-center pb-12 wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <span className="font-heading font-semibold text-2xl lg:text-6xl">
            캔사스시티 한인회에
          </span>
        </p>
        <p
          className="text-center pb-12 wow animate__animated animate__fadeIn"
          data-wow-delay=".5s"
        >
          <span className="font-heading font-semibold text-2xl lg:text-6xl">
            방문하신 것을
          </span>
        </p>
        <p
          className="text-center wow animate__animated animate__fadeIn"
          data-wow-delay=".7s"
        >
          <span className="font-heading font-semibold text-3xl lg:text-7xl">
            환영합니다!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Welcome;

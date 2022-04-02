const Welcome = () => {
  return (
    <section className="py-32 bg-theme-primary text-color-secondary">
      <div className="container max-w-4xl mx-auto">
        <p
          className="text-center font-sans wow animate__animated animated__fadeIn"
          data-wow-delay=".8s"
        >
          <span className="font-semibold text-3xl lg:text-5xl">
            캔사스 한인회를 방문하신 것을
          </span>
          <br />
          <br />
          <br />
          <span className="font-semibold text-6xl lg:text-8xl">
            환영합니다!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Welcome;

import { useTranslation } from 'next-i18next';

const Welcome = () => {
  const { t } = useTranslation('greeting');

  return (
    <section className="flex flex-col items-center px-8 py-16 lg:py-32 bg-theme-primary text-color-secondary">
      <div className="max-w-3xl">
        <p className="text-center pb-8 lg:pb-12 wow animate__animated animate__fadeIn">
          <span className="font-heading font-semibold text-3xl lg:text-5xl">
            {t('greeting1')}
          </span>
        </p>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-delay=".1s"
        >
          <span className="text-md lg:text-xl text-white opacity-80">
            {t('greeting2')}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Welcome;

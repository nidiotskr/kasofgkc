import { useTranslation } from 'next-i18next';

const Welcome = () => {
  const { t } = useTranslation('greeting');

  return (
    <section className="py-24 lg:py-36 bg-theme-primary text-color-secondary">
      <div className="container max-w-4xl">
        <p className="text-center pb-8 lg:pb-12 wow animate__animated animate__fadeIn">
          <span className="tracking-tight font-heading font-semibold text-2xl lg:text-6xl">
            {t('greeting1')}
          </span>
        </p>
        <p
          className="text-center wow animate__animated animate__fadeIn"
          data-wow-delay=".1s"
        >
          <span className="tracking-tight font-heading font-semibold text-2xl lg:text-6xl">
            {t('greeting2')}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Welcome;

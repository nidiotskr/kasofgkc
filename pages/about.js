import React from 'react';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <>
      <Layout>
        <section
          className="-mt-24 pt-48 pb-12 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/assets/imgs/backgrounds/header2.jpg')",
          }}
        >
          <div className="container">
            <h1 className="font text-3xl text-center md:text-5xl lg:text-6xl text-white mb-5 wow animate__animated animate__fadeIn animated">
              {t('title')}
            </h1>
          </div>
        </section>
        <section className="py-24 lg:py-36">
          <div className="container max-w-4xl mx-8">
            <h2
              className="text-3xl text-center lg:text-5xl mb-5 font-bold wow animate__animated animate__fadeIn animated"
              data-wow-delay=".3s"
            >
              제34대 한인회장 취임사
            </h2>
            <div className="grid justify-items-center items-start">
              <div
                className="my-8 lg:my-16 wow animate__animated animated__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="w-48 rounded-xl"
                  src="/assets/imgs/placeholders/president_profile_picture.jpg"
                  alt="PPP"
                />
              </div>
              <p
                className="lg:w-2/3 mx-4 lg:mx-8 font-sans wow animate__animated animated__fadeIn"
                data-wow-delay=".8s"
              >
                <span className="font-semibold text-lg font-heading">
                  존경하는 캔사스 한인동포 여러분,
                </span>
                <br></br>
                <br></br>2022년 임인년 새해를 맞이하여 제34대 한인회가 출범
                했습니다. 먼저 코로나19가 또다른 오미크론이라는 새로운
                바이러스로 재확산되고 있는 위험한 환경에서 저희 교민들을
                안전하게 지켜주신 하나님께 먼저 감사 드립니다. 캔사스한인회가
                섬기는 각 교회 및 기관단체장님들과 지도자 여러분들, 특별히
                한인회동포 여러분들께 감사드리며 환영합니다. 훌륭하신 한인회
                여러 임원분들이 계심에도 불구하고 제가 중책을 맡아 송구스럽고
                책임감에 어깨가 무겁습니다.
                <br />
                <br />
                캔사스한인회는 지난 여러해 동안 여러 선배님들의 헌신적인 수고와
                노력으로 여기까지 발전할 수 있었습니다. 그동안 한인회를
                섬겨주셨던 많은 선배님들의 수고를 기억하면서 저는 그동안 이
                지역에서 깨닫고 배운 많은 현장경험을 통하여 한인사회를 섬기고자
                합니다. 우리 캔사스한인회의 오랜 숙원인 한인회관 건립을 적극
                추진하는 것에 초점을 맞출것이며 여러행사를 계획하기보다는 실행할
                수 있는 일을 추진하여 회원들의 친목과 화합, 유대 강화에 전념을
                다 할것입니다.
                <br /> <br /> 특별히 미주류사회 정치, 문화 행사에 1.5세 ,
                2세들과 함께 적극 참여하여 차세대와 한인문화를 홍보 하는데
                전념을 다할 것입니다. 이곳 캔사스에는 많은 한인들이 계시지만
                바쁜 일상생활로 혹은 제도상의 부족함으로 인하여 한인회와 함께
                하지 못하는 분들이 많이 계신 줄 압니다. 또한 직종별, 세대별
                차이로 대화가 원활하지 못한 부분들을 파악하여 긴밀한 관계를
                유지하고 개선하여 소통, 화합을 이루어 함께 가도록 하겠습니다.
                특별히 어린이로부터 청년에 이르기까지 다음 세대를 미주류사회에
                경쟁력 있는 리더로 양육하는 일을 한인회가 중심이 되어 이루어 갈
                수 있도록 할 것입니다.
                <br />
                <br /> 우리 캔사스 한인회는 봉사단체로서의 면모를 새롭게
                이어나갈 것입니다. 그러기 위해 더 많은 한인들이 한인회를 향한
                관심과 신뢰를 바탕으로 한인회의 목적에 부합한 활동을 전개해 나갈
                것이며 모든 활동이 한인회 홈페이지를 통하여 소통되도록 적극 활용
                하도록 하겠습니다. 한인회 모든사업과 예산집행은 투명 하게 운영
                되도록 하겠습니다. 저의 마음은 제34대 한인회가 출범식에서 다짐한
                바와 같이 임기가 끝나는 날까지 초심을 잃지않고 기도하는 마음으로
                낮은 자세로 최선을 다해 섬기겠습니다.
                <br />
                <br />
                캔사스한인동포여러분! 제34대 한인회는 나이드신 어르신들의
                가르침을 얻고 차세대 젊은이들과 소통하며 화합을 이루어 미래
                지향적인 한인회로 나아갈수 있도록 여러분의 성원과 관심을
                부탁드립니다. 감사합니다.
                <br></br>
                <br></br>
                <br></br>
                <span className="font-semibold text-lg">
                  캔사스 제34대 한인회장 김성배 배상
                </span>
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
        </section>
        <section className="py-24 lg:py-36 bg-slate-100">
          <div className="container max-w-4xl mx-8">
            <h2
              className="text-3xl text-center font-bold lg:text-5xl mb-16 lg:mb-24 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".3s"
            >
              {t('vision_mission_session_title')}
            </h2>
            <div className="grid justify-items-center items-start">
              <div className="lg:w-2/3 mx-4 lg:mx-8">
                <div
                  className="flex flex-row items-center wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".2s"
                >
                  <div className="w-8 mb-5">
                    <span className="py-2 px-3 text-xs font-semibold bg-theme-primary text-white rounded">
                      1
                    </span>
                  </div>
                  <h2 className="font-heading font-semibold text-2xl mb-4 ml-2">
                    {t('vision_title')}
                  </h2>
                </div>
                <ul
                  className="mb-12 lg:mb-16 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".4s"
                >
                  <li>{t('vision_content')}</li>
                </ul>
                <div
                  className="flex flex-row items-center wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".6s"
                >
                  <div className="w-8 mb-5">
                    <span className="py-2 px-3 text-xs font-semibold bg-theme-primary text-white rounded">
                      2
                    </span>
                  </div>
                  <h2 className="font-heading font-semibold text-2xl mb-4 ml-2">
                    {t('mission_title')}
                  </h2>
                </div>
                <ul
                  className="wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".8s"
                >
                  <li className="pb-6">{t('mission_content_1')}</li>
                  <li className="pb-6">{t('mission_content_2')}</li>
                  <li className="pb-6">{t('mission_content_3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24 lg:pt-36 pb-6 lg:pb-12">
          <div className="container max-w-4xl mx-auto">
            <h2
              className="font-bold text-3xl text-center lg:text-5xl mb-5 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              한인회 조직도
            </h2>
            <div className="flex justify-center">
              <img
                src="/assets/imgs/placeholders/제34대 조직도_20220918.svg"
                alt="org_map"
              />
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default About;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'about',
      'header',
      'mobilemenu',
    ])),
  },
});

import { useRouter } from 'next/router';

const news = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>news: {pid}</p>;
};

export default news;

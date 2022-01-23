import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {useLayoutEffect} from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push('/login');
  });
  return <div></div>;
};

export default Home;

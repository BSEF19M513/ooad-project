import { FC } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const AppLayout: FC = ({ children }) => {
  return (
    <div
      // className='container'
      style={ {
        // width: '1000px',
        // margin: 'auto',
      } }
    >
      <Header />
      { children }
      <Footer />
    </div>
  );
};

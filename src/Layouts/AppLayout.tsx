import {FC} from 'react';
import {Header} from '../components/header';

export const AppLayout: FC = ({children}) => {
  return (
    <div
      style={{
        width: '1000px',
        margin: 'auto',
      }}
    >
      <Header />
      {children}
    </div>
  );
};

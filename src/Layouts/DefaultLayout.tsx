import {styled} from '@stitches/react';
import {FC} from 'react';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

const links = [
  {
    url: '',
    name: '',
  },
];

const Box = styled('div', {});

export const DefaultLayout: FC = ({children}) => {
  return (
    <Box
      css={{
        display: 'grid',
        minHeight: '100vh',
        gridTemplateRows: '100px 1fr 250px',
      }}
    >
      <Header links={links} loginpage={true}/>
      <Box
        css={{
          width: '1000px',
          margin: 'auto',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

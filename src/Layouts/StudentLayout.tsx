import {styled} from '@stitches/react';
import {FC} from 'react';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

const links = [
  {
    url: '/student/checkattendence.tsx',
    name: 'Check Attendance',
  },
  {
    url: '/student/studentgrades',
    name: 'Check Grades',
  },
  {
    url: '/student/degreeClearance.tsx',
    name: 'Degree clearance',
  },
];

const Box = styled('div', {});

export const StudentLayout: FC = ({children}) => {
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateRows: '100px auto 200px',
      }}
    >
      <Header links={links} />
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

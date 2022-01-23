import {styled} from '@stitches/react';
import {FC} from 'react';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

const links = [
  {
    url: '/student/checkattendence',
    name: 'Check Attendance',
  },
  {
    url: '/student/grades',
    name: 'Check Grades',
  },
  {
    url: '/student/degreeClearance',
    name: 'Degree clearance',
  },
];

const Box = styled('div', {});

export const StudentLayout: FC = ({children}) => {
  return (
    <Box
      css={{
        display: 'grid',
        minHeight  : '100vh',
        gridTemplateRows: '100px 1fr 200px',
      }}
    >
      <Header links={links} loginpage={false} />
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

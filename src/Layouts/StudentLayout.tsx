import {styled} from '@stitches/react';
import {FC} from 'react';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

const links = [
  {
    url: '/student/checkattendence',
    name: 'Check Attendance',
    exist: true,
    icon: 'bi bi-card-checklist pe-2',
  },
  {
    url: '/student/grades',
    name: 'Check Grades',
    exist: true,
    icon: 'bi bi-journal-check pe-2',
  },
  {
    url: '/student/degreeClearance',
    name: 'Degree clearance',
    exist: true,
    icon: 'bi bi-mortarboard pe-2',
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

import {styled} from '@stitches/react';
import {FC} from 'react';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

const links = [
  {
    url: '/teacher/addattendence',
    name: 'Mark Attendance',
    exist: true,
    icon: 'bi bi-card-checklist pe-2',
  },
  {
    url: '/teacher/studentgrades',
    name: 'Student Grades',
    exist: true,
    icon: 'bi bi-journal-check pe-2',
  },
];

const Box = styled('div', {});

export const TeacherLayout: FC = ({children}) => {
  return (
    <Box
      css={{
        display: 'grid',
        minHeight: '100vh',
        gridTemplateRows: '100px auto 200px',
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

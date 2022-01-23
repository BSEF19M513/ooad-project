import {styled} from '@stitches/react';
import {FC} from 'react';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

const links = [
  {
    url: '/teacher/addattendence',
    name: 'Mark Attendance',
  },
  {
    url: '/teacher/studentgrades',
    name: 'Student Grades',
  },
];

const Box = styled('div', {});

export const TeacherLayout: FC = ({children}) => {
  return (
    <Box
      css={{
        display: 'grid',
        minHeight: '100vh',
        gridTemplateRows: '100px auto 250px',
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

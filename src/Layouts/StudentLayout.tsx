import {FC} from 'react';
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

export const StudentLayout: FC = ({children}) => {
  return (
    <div
      style={{
        width: '1000px',
        margin: 'auto',
      }}
    >
      <Header links={links} />
      {children}
    </div>
  );
};

import {FC} from 'react';
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

export const TeacherLayout: FC = ({children}) => {
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

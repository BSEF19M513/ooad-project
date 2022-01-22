import {Button} from '@nextui-org/react';
import Image from 'next/image';
import {Nav} from '../nav';

const navLinksForTeachers = [
  {
    url: '/teacher/addattendence',
    name: 'Mark Attendance',
  },
  {
    url: '/teacher/studentgrades',
    name: 'Student Grades',
  },
];

export const Header = () => {
  return (
    <header>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <div className="header_logo">
            <Image
              width={50}
              height={50}
              objectFit="cover"
              src="/images/pu.png"
              alt="pu logo"
            />
          </div>
          <Nav links={navLinksForTeachers} />
        </div>
        <div className="logout_button">
          <Button bordered auto>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

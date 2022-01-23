import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { Nav } from '../nav';

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
    <header className='sticky-top'>
      <div
        className='bg-dark'
        style={ {
          display: 'flex',
          width: '100%',
          height: '70px',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 20,
        } }
      >
        <div
          style={ {
            display: 'flex',
            gap: '10px',
          } }
        >
          <div className="header_logo" style={ { paddingLeft: 20 } }>
            <Image
              width={ 50 }
              height={ 50 }
              objectFit="cover"
              src="/images/pu.png"
              alt="pu logo"
            />
          </div>
          <Nav links={ navLinksForTeachers } />
        </div>
        <div className="logout_button" style={ { paddingRight: 20, paddingBottom: 20 } }>
          {/* <Button bordered auto>
            Logout
          </Button> */}
          <button className='btn btn-dark text-light'>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

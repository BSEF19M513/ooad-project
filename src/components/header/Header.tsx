import {Button} from '@nextui-org/react';
import Image from 'next/image';
import {Nav} from '../nav';


type Links = {
  url: string;
  name: string;
};
type Props = {
  links: Links[];
};

export const Header = ({links}: Props) => {
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
          <Nav links={links} />
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

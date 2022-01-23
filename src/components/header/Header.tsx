import Image from 'next/image';
import {useRouter} from 'next/router';
import {Nav} from '../nav';

type Links = {
  url: string;
  name: string;
};
type Props = {
  links: Links[];
  loginpage: boolean;
};

export const Header = ({links, loginpage}: Props) => {
  const router = useRouter();

  return (
    <header className="sticky-top">
      <div
        className="bg-dark"
        style={{
          display: 'flex',
          width: '100%',
          height: '70px',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <div className="header_logo" style={{paddingLeft: 20}}>
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
        <div
          className="logout_button"
          style={{paddingRight: 20, paddingBottom: 20}}
        >
          {!loginpage && (
            <button
              className="btn btn-dark text-light"
              onClick={() => router.push('/login')}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

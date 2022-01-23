import Image from 'next/image';
import {useRouter} from 'next/router';
import {Nav} from '../nav';

type Links = {
  url: string;
  name: string;
  exist: boolean;
  icon: string;
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
          // justifyContent: 'space-between',
          paddingTop: 20,
        }}
      >
        <div
          onClick={()=> {
            router.push('https://pucit.edu.pk');
          }}
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <div className="header_logo " style={{paddingLeft: 20}}>
            <Image
              width={50}
              height={50}
              objectFit="cover"
              src="/images/pu.png"
              alt="pu logo"
            />
          </div>
          <div style={{marginLeft: -16}} className='text-light h6 btn btn-dark text-light me-3'>PUCIT</div>
        </div>
          <Nav links={links} />
        <div
          className="logout_button text-end"
          style={{paddingRight: 20, paddingBottom: 20, flex: 1}}
        >
          {!loginpage && (
            <button
              className="btn btn-dark text-light"
              onClick={() => router.push('/login')}
            >
              <i className="bi bi-box-arrow-right text-danger pe-2"></i>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

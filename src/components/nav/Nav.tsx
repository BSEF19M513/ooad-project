import Link from 'next/link';

type Link = {
  url: string;
  name: string;
};

type NavProps = {
  links: Link[];
};

export const Nav = ({ links }: NavProps) => {
  return (
    <div>
      <ul
        style={ {
          display: 'flex',
          gap: '20px',
          color: '#0070f3',
          marginTop: '12px',
        } }
      >
        { links.map((link, i) => {
          return (
            <li key={ link.name + i }>
              <Link href={ link.url }>
                <a className='text-decoration-none btn btn-dark text-light'>{ link.name }</a>
              </Link>
            </li>
          );
        }) }
      </ul>
    </div>
  );
};

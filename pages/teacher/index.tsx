import {styled} from '@stitches/react';
import Image from 'next/image';
import Link from 'next/link';

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Box = styled('div', {});

const TeacherHome = () => {
  return (
    <Flex as="section" css={{flexDirection: 'row', gap: '100px'}}>
      <Card
        src="/images/attendence.png"
        label="Update student attendence"
        path="/teacher/addattendence"
      />
      <Card
        src="/images/grades.png"
        label="Update student grades"
        path="/teacher/studentgrades"
      />
    </Flex>
  );
};

type CardProps = {
  src: string;
  label: string;
  path: string;
};

export const Card = ({src, label, path}: CardProps) => {
  return (
    <Flex
      css={{
        marginTop: '100px',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
        borderRadius: '20px',
      }}
    >
      <Link href={path}>
        <a>
          <Box
            css={{
              padding: '20px 30px',
              width: '300px',
              height: '300px',
            }}
          >
            {/* <Image */}
            {/*   width={300} */}
            {/*   height={300} */}
            {/*   objectFit="cover" */}
            {/*   src={src} */}
            {/*   alt={label} */}
            {/* /> */}
          </Box>
        </a>
      </Link>
      <Box css={{color: 'black', fontSize: '1rem'}}>{label}</Box>
    </Flex>
  );
};

TeacherHome.person = 'teacher';

export default TeacherHome;

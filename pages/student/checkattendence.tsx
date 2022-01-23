import {Text} from '@nextui-org/react';
import {styled} from '@stitches/react';
import {clear} from 'console';
import React from 'react';

// const attendence = [
//   'present',
//   'present',
//   'present',
//   'absent',
//   'absent',
//   'absent',
// ];

const Attendence = styled('div', {});

const Row = styled('div', {
  display: 'grid',
  borderRadius: '10px',
  padding: '10px ',
  gridTemplateColumns: 'repeat(6,1fr)',
  width: '100%',
  border: '1px solid rgba(0,0,0,0.1)',
});
const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '50px',
});

const Box = styled('div', {});

const CheckAttendence = () => {

  const getDate = (i: number) => {
    const date = new Date();
    const newDate = new Date(date.getTime() - i * 24 * 60 * 60 * 1000);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <Section>
        <Row>
          <Text weight="bold" size="1rem">
            Date
          </Text>
          <Text weight="bold" size="1rem">
            Web engineering
          </Text>
          <Text weight="bold" size="1rem">
            Computer Networking
          </Text>
          <Text weight="bold" size="1rem">
            Psychology
          </Text>
          <Text weight="bold" size="1rem">
            OOAD
          </Text>
          <Text weight="bold" size="1rem">
            AOA
          </Text>
        </Row>
        {new Array<number>(20).fill(1).map((value, i) => {
          return (
            <Row key={i}>
              <Text>{getDate(i + 1)}</Text>
              <Text>present</Text>
              <Text>present</Text>
              <Text>present</Text>
              <Text>present</Text>
              <Text>present</Text>
            </Row>
          );
        })}
      </Section>
    </div>
  );
};

CheckAttendence.person = 'student';

export default CheckAttendence;

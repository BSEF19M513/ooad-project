import {Text} from '@nextui-org/react';
import {styled} from '@stitches/react';

const data = [
  {
    subject: 'Web engineering',
    mid: 30,
    sessional: 23,
    final: 36,
    grade: 'A+',
  },
  {
    subject: 'OOAD',
    mid: 20,
    sessional: 13,
    final: 30,
    grade: 'B+',
  },
  {
    subject: 'Psychology',
    mid: 28,
    sessional: 25,
    final: 33,
    grade: 'A',
  },
  {
    subject: 'Computer network',
    mid: 29,
    sessional: 20,
    final: 38,
    grade: 'A+',
  },
  {
    subject: 'Analysis of algorithms',
    mid: 31,
    sessional: 25,
    final: 37,
    grade: 'A+',
  },
];

const Row = styled('div', {
  display: 'grid',
  borderRadius: '10px',
  padding: '10px ',
  gridTemplateColumns: 'repeat(5,1fr)',
  width: '100%',
  border: '1px solid rgba(0,0,0,0.1)',
});

const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const CheckGrades = () => {
  return (
    <div>
      <Section>
        <Row>
          <Text>Subjects</Text>
          <Text>Mid marks</Text>
          <Text>sessional marks</Text>
          <Text>final marks</Text>
          <Text>Grade</Text>
        </Row>
        {data.map((subject) => {
          return (
            <Row key={subject.subject}>
              <Text>{subject.subject}</Text>
              <Text>{subject.mid}</Text>
              <Text>{subject.sessional}</Text>
              <Text>{subject.final}</Text>
              <Text>{subject.grade}</Text>
            </Row>
          );
        })}
      </Section>
    </div>
  );
};

CheckGrades.person = 'student';

export default CheckGrades;

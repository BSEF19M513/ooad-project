import {Row as RowPrimitive} from './addattendence';
import {useState} from 'react';
import {students} from '../../src/data/studentList';
import {styled} from '@stitches/react';

const Row = styled(RowPrimitive, {
  gridTemplateColumns:
    '50px 1fr 1fr minmax(max-content,100px) minmax(max-content,100px) minmax(max-content,100px)',
  gap: '20px',
});

const Input = styled('input', {
  all: 'unset',
  width: '50px',
});

type Marks = {
  rollNumber: string;
  name: string;
  midMarks: number;
  setionalMarks: number;
  finalMarks: number;
};
const SetStudentsGrades = () => {
  const [marks, setMarks] = useState<Marks[]>(
    students.map((student) => {
      return {...student, midMarks: 0, finalMarks: 0, setionalMarks: 0};
    })
  );
  return (
    <div style={{marginBottom: '50px'}}>
      <Row>
        <div>#</div>
        <div>Roll number</div>
        <div>name</div>
        <div>mid marks</div>
        <div>setional marks</div>
        <div>final marks</div>
      </Row>
      <section>
        {marks.map((marks, i) => {
          return (
            <Row key={marks.rollNumber + i}>
              <div>{i + 1}</div>
              <div>{marks.rollNumber}</div>
              <div>{marks.name}</div>
              <Input
                min={0}
                max={35}
                type="number"
                defaultValue={marks.midMarks}
              />
              <Input
                min={0}
                max={25}
                type="number"
                defaultValue={marks.setionalMarks}
              />
              <Input
                min={0}
                max={40}
                type="number"
                defaultValue={marks.finalMarks}
              />
            </Row>
          );
        })}
      </section>
    </div>
  );
};

export default SetStudentsGrades;

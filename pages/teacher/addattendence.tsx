import { Button } from '@nextui-org/react';
import { styled } from '@stitches/react';
import { useState } from 'react';
import { CheckBox } from '../../src/components/checkbox';
import { students } from '../../src/data/studentList';

export const Row = styled('div', {
  display: 'grid',
  gridTemplateColumns: '100px 1fr 1fr 50px',
  alignItems: 'center',
  justifyContent: 'start',
  border: '1px solid rgba(0,0,0,0.2)',
  padding: '10px 50px',
  borderRadius: '10px',
  width: '100%',
  '& + *': {
    marginTop: '10px',
  },
});

const Item = styled('div', {});

type Attendence = {
  rollNumber: string;
  name: string;
  attendence?: boolean;
};

const TeacherAddAttendence = () => {
  const [ selectAll, setSelectAll ] = useState(true);
  const [ attendence, setAttendence ] = useState<Attendence[]>(
    students.map((student) => {
      return { ...student, attendence: false };
    })
  );

  return (
    <div
      className='mt-3 mb-3'
      style={ {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      } }
    >
      <Button
        auto
        css={ { alignSelf: 'end' } }
        onClick={ () => {
          setSelectAll(!selectAll);
          setAttendence((state) =>
            state.map((s) => {
              return { ...s, attendence: selectAll };
            })
          );
        } }
      >
        { selectAll ? 'select all' : 'unselect All' }
      </Button>

      <section
        style={ {
          display: 'flex',
          flexDirection: 'column',
        } }
      >
        { attendence.map((student, i) => {
          return (
            <Row key={ student.rollNumber + 1 }>
              <Item>{ i + 1 }</Item>
              <Item>{ student.rollNumber }</Item>
              <Item>{ student.name }</Item>
              <Item>
                <CheckBox
                  checked={ student.attendence }
                  onCheckedChange={ () => {
                    setAttendence((list) => {
                      return list.map((l) => {
                        return l.rollNumber === student.rollNumber
                          ? { ...l, attendence: !l.attendence }
                          : l;
                      });
                    });
                  } }
                />
              </Item>
            </Row>
          );
        }) }
      </section>
      <div style={ { display: 'flex', gap: '20px', alignSelf: 'end' } }>
        <Button auto css={ { alignSelf: 'center' } }>
          Edit
        </Button>
        <Button auto css={ { alignSelf: 'center' } }>
          Submit
        </Button>
      </div>
    </div>
  );
};

TeacherAddAttendence.person = 'teacher'

export default TeacherAddAttendence;

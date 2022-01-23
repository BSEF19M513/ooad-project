import {Button, Input} from '@nextui-org/react';
import {styled} from '@stitches/react';

const Form = styled('form', {
  display: 'flex',
  flexDirection: ' column',
  alignItems: 'start',
  gap: '20px',
});

const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Box = styled('div', {
  // width: 'min(300px,100%)',
  margin: 'auto',
});

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  borderBottom: '1px solid rgba(0,0,0,0.3)',
  padding: '10px 50px',
});

const DegreeClearance = () => {
  return (
    <Box>
      <Box
        css={{
          border: '1px solid rgba(0,0,0,0.3)',
          padding: '50px',
          borderRadius: '10px',
        }}
      >
        <Form>
          <Label>
            <span>Name</span>
            <Input underlined type="text" required />
          </Label>
          <Label>
            <span>College ID</span>
            <Input underlined type="text" required />
          </Label>
          <label>
            <span style={{marginRight: 10}}>Degree</span>
            <select>
              <option defaultChecked>select degree</option>
              <option>BSSE</option>
              <option>BSCS</option>
              <option>BSIT</option>
            </select>
          </label>

          <Label>
            <span style={{marginRight: 10}}>Duration</span>
            <div>
              <span>from </span>
              <Input underlined type="number" min="1900" max="2099" step="1" />
            </div>
            <div>
              <span>to</span>
              <Input underlined type="number" min="1900" max="2099" step="1" />
            </div>
          </Label>
        </Form>
      </Box>

      <Box
        css={{
          border: '1px solid rgba(0,0,0,0.3)',
          marginTop: '30px',
          borderRadius: '10px',
          marginBottom: '50px',
        }}
      >
        <Flex>
          <span>Degree Coordinator</span>
          <Button auto>Send email</Button>
        </Flex>
        <Flex>
          <span>Head of Deparment</span>
          <Button auto>Send email</Button>
        </Flex>
        <Flex>
          <span>Librarian</span>
          <Button auto>Send email</Button>
        </Flex>
        <Flex>
          <span>Hostel Warden (optional)</span>
          <Button auto>Send email</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default DegreeClearance;

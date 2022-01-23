import React, {useState} from 'react';
import {styled} from '@stitches/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Tick} from './tick_svg';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  overflow: 'hidden',
  width: 20,
  height: 20,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid rgb(66, 135, 245)',

  '&:focus-visible': {
    outline: '2px solid rgb(66, 135, 245)',
    outlineOffset: '2px',
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  width: '100%',
  backgroundColor: 'rgb(66, 135, 245)',
});

const CheckboxIndicator = StyledIndicator;

export type CheckBoxTypes = React.ComponentProps<typeof StyledCheckbox>;

export const CheckBox = ({checked, onCheckedChange}: CheckBoxTypes) => {
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <StyledCheckbox
      defaultChecked
      checked={checked}
      css={{backgroundColor: checked ? '$outlineColor' : 'transparent'}}
      onCheckedChange={onCheckedChange}
    >
      <CheckboxIndicator>
        <Tick />
      </CheckboxIndicator>
    </StyledCheckbox>
  );
};

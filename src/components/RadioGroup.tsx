import React from "react";

import { RadioItemWrapper, RadioLabel } from "./styles.styled";
import { RadioGroupProps, RadioProps } from "./types";

const Radio: React.FC<RadioProps> = ({ ...props }) => (
  <RadioItemWrapper checked={props.checked}>
    <input
      id={props.id}
      onChange={props.changed}
      value={props.value}
      type="radio"
      checked={props.checked}
      data-testid="radio-test"
    />
    <RadioLabel htmlFor={props.id}>{props.label}</RadioLabel>
  </RadioItemWrapper>
);

const RadioGroup: React.FC<RadioGroupProps> = ({ ...props }) => {
  return (
    <div>
      {!props.userTypes.length && 'No User Types available'}
      {props.userTypes.map((type: string, idx: any) => (
        <Radio
          key={idx}
          id={idx}
          changed={props.changed}
          value={type}
          checked={props.selectedValue === type}
          label={type}
        />
      ))}
    </div>
  );
};

export default RadioGroup;

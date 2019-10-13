import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Label = styled.label`
  color: #52606d;
  font-size: 1.2rem;
`;
const Input = styled.input`
  background-color: ${props => (props.invalid ? '#facdcd' : 'none')};
  border: 3px solid #cbd2d9;
  border-radius: 10px;
  color: #52606d;
  font-size: 2rem;
  width: 300px;
  height: 80px;
  text-align: center;

  &:focus {
    box-shadow: 0 0 5px #19216c;
    border-radius: 10px;
    padding: 3px 0px 3px 3px;
    outline: none;
    border: 1px solid #19216c;
  }
`;

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin'
};

function TemperatureInput(props) {
  function handleChange(e) {
    props.onTemperatureChange(e.target.value);
  }

  const temperature = props.temperature;
  const scale = props.scale;
  const onKeyDown = props.onKeyDown;
  const invalid = props.invalid;

  return (
    <Wrapper>
      <Label htmlFor={scaleNames[scale].toLowerCase()}>
        Temperature in {scaleNames[scale]} ({scale !== 'k' && <span>°</span>}
        {scale.toUpperCase()}):
      </Label>
      <Input
        id={scaleNames[scale].toLowerCase()}
        type="number"
        name={scaleNames[scale].toLowerCase()}
        value={temperature}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        invalid={invalid}
      />
    </Wrapper>
  );
}

export default TemperatureInput;

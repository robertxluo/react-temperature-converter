import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Label = styled.label`
  color: #52606d;
  font-size: 1.2rem;
`;
const Input = styled.input`
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
    margin: 5px 1px 3px 0px;
    outline: none;
    border: 1px solid #19216c;
  }
`;

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      min: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

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
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default TemperatureInput;

import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Label = styled.label`
  font-size: 1.2rem;
`;
const Input = styled.input`
  border: none;
  color: '#9aa5b1';
  font-size: 2rem;
  width: 100vw;
  height: 10vh;
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
      temperature: ''
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
        <Label>Enter temperature in {scaleNames[scale]}:</Label>
        <Input value={temperature} onChange={this.handleChange} type="text" />
      </Wrapper>
    );
  }
}

export default TemperatureInput;

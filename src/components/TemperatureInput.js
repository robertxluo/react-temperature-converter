import React from 'react';

import Wrapper from './Wrapper';

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
        <label>Enter temperature in {scaleNames[scale]}:</label>
        <input value={temperature} onChange={this.handleChange} />
      </Wrapper>
    );
  }
}

export default TemperatureInput;

import React from 'react';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import Wrapper from './Wrapper';

function toCelsiusWithFahrenheit(fahrenheit) {
  if (fahrenheit < -459.67) return 'Invalid';
  return ((fahrenheit - 32) * 5) / 9;
}

function toCelsiusWithKelvin(kelvin) {
  if (kelvin < 0) return 'Invalid';
  return kelvin - 273.15;
}

function toFahrenheitWithCelsius(celsius) {
  if (celsius < -273.15) return 'Invalid';
  return (celsius * 9) / 5 + 32;
}

function toFahrenheitWithKelvin(kelvin) {
  if (kelvin < 0) return 'Invalid';
  return (kelvin - 273.15) * (9 / 5) + 32;
}

function toKelvinWithCelsius(celsius) {
  if (celsius < -273.15) return 'Invalid';
  return celsius + 273.15;
}

function toKelvinWithFahrenheit(fahrenheit) {
  if (fahrenheit < -459.67) return 'Invalid';
  return (fahrenheit + 459.67) * (5 / 9);
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { temperature: '', scale: 'c' };

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleKelvinChange = this.handleKelvinChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  handleKelvinChange(temperature) {
    this.setState({
      scale: 'k',
      temperature
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f'
        ? tryConvert(temperature, toCelsiusWithFahrenheit)
        : scale === 'k'
        ? tryConvert(temperature, toCelsiusWithKelvin)
        : temperature;

    const fahrenheit =
      scale === 'c'
        ? tryConvert(temperature, toFahrenheitWithCelsius)
        : scale === 'k'
        ? tryConvert(temperature, toFahrenheitWithKelvin)
        : temperature;

    const kelvin =
      scale === 'c'
        ? tryConvert(temperature, toKelvinWithCelsius)
        : scale === 'f'
        ? tryConvert(temperature, toKelvinWithFahrenheit)
        : temperature;

    return (
      <Wrapper>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
          onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
          onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        />
        <TemperatureInput
          scale="k"
          temperature={kelvin}
          onTemperatureChange={this.handleKelvinChange}
          onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
          fahrenheit={parseFloat(fahrenheit)}
          kelvin={parseFloat(kelvin)}
        />
      </Wrapper>
    );
  }
}

export default Calculator;

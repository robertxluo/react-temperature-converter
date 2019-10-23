import React, { useState } from 'react';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import Wrapper from './Wrapper';

function toCelsiusWithFahrenheit(fahrenheit) {
  if (fahrenheit < -459.68) return '.';
  return ((fahrenheit - 32) * 5) / 9;
}

function toCelsiusWithKelvin(kelvin) {
  if (kelvin < 0) return '.';
  return kelvin - 273.15;
}

function toFahrenheitWithCelsius(celsius) {
  if (celsius < -273.15) return '.';
  return (celsius * 9) / 5 + 32;
}

function toFahrenheitWithKelvin(kelvin) {
  if (kelvin < 0) return '.';
  return (kelvin - 273.15) * (9 / 5) + 32;
}

function toKelvinWithCelsius(celsius) {
  if (celsius < -273.15) return '.';
  return celsius + 273.15;
}

function toKelvinWithFahrenheit(fahrenheit) {
  if (fahrenheit < -459.68) return '.';
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

function Calculator() {
  const [scale, setScale] = useState('c');
  const [temperature, setTemperature] = useState('');

  function handleCelsiusChange(temperature) {
    setScale('c');
    setTemperature(temperature);
  }

  function handleFahrenheitChange(temperature) {
    setScale('f');
    setTemperature(temperature);
  }

  function handleKelvinChange(temperature) {
    setScale('k');
    setTemperature(temperature);
  }

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
        onTemperatureChange={handleCelsiusChange}
        onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        invalid={celsius < -273.15}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
        onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        invalid={fahrenheit < -459.67}
      />
      <TemperatureInput
        scale="k"
        temperature={kelvin}
        onTemperatureChange={handleKelvinChange}
        onKeyDown={e => e.keyCode === 69 && e.preventDefault()}
        invalid={kelvin < 0}
      />
      <BoilingVerdict
        celsius={parseFloat(celsius)}
        fahrenheit={parseFloat(fahrenheit)}
        kelvin={parseFloat(kelvin)}
      />
    </Wrapper>
  );
}

export default Calculator;

import React from 'react';
import styled from 'styled-components';

import BoilingVerdict from './BoilingVerdict';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { temperature: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;

    return (
      <Wrapper>
        <label>Enter temperature in Celsius:</label>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </Wrapper>
    );
  }
}

export default Calculator;

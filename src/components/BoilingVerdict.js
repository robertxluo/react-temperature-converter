import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const VerdictDescription = styled.p`
  color: ${props => (props.primary ? '#ba2525' : '#4c63b6')};
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1.5rem;
  text-align: center;
`;

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return (
      <Wrapper>
        <VerdictDescription primary>
          Water would boil here, it will eventually be mist...
        </VerdictDescription>
      </Wrapper>
    );
  } else if (props.celsius < -273.15 || props.fahrenheit < -459.67 || props.kelvin < 0) {
    return (
      <VerdictDescription>This is an invalid temperature, try something higher.</VerdictDescription>
    );
  } else if (props.celsius === -273.15) {
    return <VerdictDescription>Absolute zero.</VerdictDescription>;
  } else if (props.celsius <= 0 && props.celsius > -273.15) {
    return <VerdictDescription>Water would freeze here, it will be ice-olated.</VerdictDescription>;
  }
  return null;
}

export default BoilingVerdict;

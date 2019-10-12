import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const VerdictDescription = styled.p`
  color: ${props =>
    props.primary
      ? '#ba2525'
      : props.secondary
      ? '#4c63b6'
      : props.invalid
      ? '#d64545'
      : '#1f2933'};
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1.5rem;
  text-align: center;
`;

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return (
      <VerdictDescription primary>
        Water would boil here, it will eventually be mist...
      </VerdictDescription>
    );
  } else if (props.celsius < -273.15 || props.fahrenheit < -459.67 || props.kelvin < 0) {
    return (
      <VerdictDescription invalid>
        This is an invalid temperature, try something higher.
      </VerdictDescription>
    );
  } else if (props.celsius === -273.15) {
    return <VerdictDescription>This is... absolute zero!</VerdictDescription>;
  } else if (props.celsius <= 0 && props.celsius > -273.15) {
    return (
      <VerdictDescription secondary>
        Water would freeze here, it will be ice-olated.
      </VerdictDescription>
    );
  }
  return null;
}

export default BoilingVerdict;

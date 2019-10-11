import React from 'react';
import styled from 'styled-components';

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
      <VerdictDescription primary>
        The water is boiling, it will eventually be mist...
      </VerdictDescription>
    );
  } else if (props.celsius <= 0) {
    return <VerdictDescription>Freeze! Put your hands up!</VerdictDescription>;
  }

  return null;
}

export default BoilingVerdict;

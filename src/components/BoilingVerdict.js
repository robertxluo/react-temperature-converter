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
        Water would boil here, it will eventually be mist...
      </VerdictDescription>
    );
  } else if (props.celsius <= 0) {
    return <VerdictDescription>Water would freeze here, it will be ice-olated.</VerdictDescription>;
  }

  return null;
}

export default BoilingVerdict;

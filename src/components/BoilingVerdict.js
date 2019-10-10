import React from 'react';

//#BA2525
//#4C63B6

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water will boil at this temperature!</p>;
  }
  return <p>This water ain't gonna boil itself!</p>;
}

export default BoilingVerdict;

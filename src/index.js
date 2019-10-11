import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

import Button from './components/Button';
import Calculator from './components/Calculator';
import Wrapper from './components/Wrapper';

const Title = styled.h1`
  color: #f9703e;
  font-size: 2rem;
  line-height: 1.1;
  margin: 2rem;
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <Title>Temperature Converter</Title>
      <Calculator />
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Wrapper>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

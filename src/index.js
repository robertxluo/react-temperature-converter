import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'modern-css-reset/dist/reset.min.css';
import './index.css';
import styled from 'styled-components';

import Calculator from './components/Calculator';
import Wrapper from './components/Wrapper';

const Title = styled.h1`
  color: #f35627;
  font-size: 2rem;
  line-height: 1.1;
  margin: 2rem;
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <Title>
        <span role="img" aria-label="Thermometer">
          🌡️
        </span>{' '}
        Temperature Converter
      </Title>
      <Calculator />
    </Wrapper>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();

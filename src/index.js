import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

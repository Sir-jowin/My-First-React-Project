import React from 'react';
import Hello from './components/Hello';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hello />
      </BrowserRouter>
    </div>
  );
}

export default App;

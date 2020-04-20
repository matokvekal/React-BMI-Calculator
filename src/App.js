import React from 'react';
import './App.css';
import BmiCalculator from './components/BMI';

const App = () => {
  return (
    <div className="App">
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-lg-offset-3'>
          <BmiCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;

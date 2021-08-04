/* eslint-disable consistent-return */

import '../App.css';
import Display from './Display';
import ButtonsPanel from './ButtonPanel';
import Calculator from '../logic/calculate';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Display />
      <ButtonsPanel />
      <Calculator />
    </header>
  </div>
);

export default App;

/* eslint-enable consistent-return */

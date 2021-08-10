/* eslint-disable consistent-return, react/destructuring-assignment, react/no-unused-state, max-len, react/no-access-state-in-setstate */
import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Quote from './Quote';
import Home from './Home';
import CalculatorPage from './Calculator';

const App = () => (
  <main>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={CalculatorPage} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </main>

);

export default App;

/* eslint-enable consistent-return */

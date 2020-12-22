import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import NumberBaseball from '../3-numberBaseball/NumberBaseball';
import RSP from '../5-mukchipa/RSP';
import Lotto from '../6-lotto/Lotto';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/number-baseball' component={NumberBaseball} />
        <Route path='/rock-scissors-paper' component={RSP} />
        <Route path='/lotto-generator' component={Lotto} />
      </div>
    </BrowserRouter>
  );
};

export default Games;

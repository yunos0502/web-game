import React, { Component } from 'react';
import NumberBaseball from '../3-numberBaseball/NumberBaseball_class';
import RSP from '../5-mukchipa/RSP_class';
import Lotto from '../6-lotto/Lotto_class';

class GameMatcher extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <NumberBaseball />
        <RSP />
        <Lotto />
      </>
    );
  }
}

export default GameMatcher;

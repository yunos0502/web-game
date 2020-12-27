import React, { Component } from 'react';
import NumberBaseball from '../3-numberBaseball/NumberBaseball_class';
import RSP from '../5-mukchipa/RSP_class';
import Lotto from '../6-lotto/Lotto_class';

class GameMatcher extends Component {
  render() {
    let urlSearchParams = new URLSearchParams(
      this.props.location.search.slice(1)
    );
    console.log(urlSearchParams.get('name'));
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />;
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />;
    }

    return <div>일치하는 게임이 없습니다.</div>;
  }
}

export default GameMatcher;

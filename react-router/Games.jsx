import React from 'react';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import GameMatcher from './GameMatcher';

const Games = () => {
  return (
    <BrowserRouter>
      <Link to='/game/number-baseball?id=1&name=baseball'>숫자야구</Link>&nbsp;
      <Link to='/game/rock-scissors-paper?id=2&name=rsp'>가위바위보</Link>&nbsp;
      <Link to='/game/lotto-generator?id=3&name=lotto'>로또생성기</Link>&nbsp;
      <Link to='/game/index'>게임 매쳐</Link>
      <div>
        <Route path='/game/:name' component={GameMatcher} />
      </div>
    </BrowserRouter>
  );
};

export default Games;

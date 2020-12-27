import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import GameMatcher from './GameMatcher';

const Games = () => {
  return (
    <BrowserRouter>
      <Link to='/game/number-baseball?id=1&name=baseball'>숫자야구</Link>&nbsp;
      <Link to='/game/rock-scissors-paper?id=2&name=rsp'>가위바위보</Link>&nbsp;
      <Link to='/game/lotto-generator?id=3&name=lotto'>로또생성기</Link>&nbsp;
      <Link to='/game/index'>게임 매쳐</Link>
      <div>
        {/* <Route path='/game/:name' component={GameMatcher} /> */}

        {/* props 넘기는 방법 1 : component */}
        {/* <Route
          path='/game/:name'
          component={() => <GameMatcher props='12345' />}
        /> */}
        {/* props 넘기는 방법 2 : render를 이용하면 부모의 props를 props.abc처럼 보내줄 수 있음 */}
        {/* props를 목적으로 넘기는거라면 render를 이용하는 편이 좋음 */}
        {/* <Route
          path='/game/:name'
          render={(props) => <GameMatcher props={props.abc} />}
        /> */}

        {/* 동적 라우팅과 정적 라우팅을 같이 이용하는 경우 */}
        {/* Switch는 첫번째 일치한 path만 보여줌 : 동시에 라우트 여러 개가 렌더링 되는 것을 막아줌 */}
        {/* <Switch>
          <Route
            path='/game/:name'
            render={(props) => <GameMatcher {...props} />}
          />
          <Route
            path='/game/number-baseball'
            render={(props) => <GameMatcher {...props} />}
          />
        </Switch> */}

        {/*'/game/:name'도 '/'를 인식하여 같이 호출되기 때문에 상위 주소와 하위 주소가 있는 경우 Switch도 소용없음 */}
        {/* => path='/'(상위 주소)에 exact를 붙여줘야 동시에 라우트 여러 개가 렌더링 되는 것을 막아줌 */}
        <Route exact path='/' render={(props) => <GameMatcher {...props} />} />
        <Route
          path='/game/:name'
          render={(props) => <GameMatcher {...props} />}
        />
      </div>
    </BrowserRouter>
  );
};

export default Games;

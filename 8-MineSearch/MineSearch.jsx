import React, { useReducer } from 'react';
import Table from './Table';
import Form from './Form';

const initialState = {
  tableDate: [],
  timer: 0,
  result: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case value:
      break;

    default:
      state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </>
  );
};

export default MineSearch;

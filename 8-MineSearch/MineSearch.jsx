import React, { useReducer, createContext, useMemo } from 'react';
import Table from './Table';
import Form from './Form';

export const CODE = {
  MINE: -7,
  NORAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION: -4,
  FLAG_MINE: -4,
  CLICKED_MINE,
};

const TableContext = createContext({
  tableData: [
    [-1, -1, -1, -1, -1, -1, -1],
    [-7, -1, -1, -1, -1, -1, -1],
    [-1, -7, -1, -7, -7, -1, -1],
    [],
    [],
  ],
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0,
  result: '',
};

export const START_GAME = 'START_GAME';

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      };
    default:
      state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ tableData: state.tableData, dispatch }), [
    state.tableData,
  ]);

  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  );
};

export default MineSearch;

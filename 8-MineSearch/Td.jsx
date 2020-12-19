import React, { useContext, memo } from 'react';
import { CODE, TableContext } from './MineSearch';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.OPENED:
      return {
        background: '#FFF',
      };

    default:
      return {
        background: '#FFF',
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'X';
    default:
      return '';
  }
};

const Td = memo(({ rowIndex, cellIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
});

export default Td;

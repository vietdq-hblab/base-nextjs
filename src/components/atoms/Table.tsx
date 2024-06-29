import { Table, TableProps } from '@mui/material';
import { FC } from 'react';

const TableCustom: FC<TableProps> = (props) => {
  return <Table {...props} />;
};

export default TableCustom;

import {
  TableCell,
  TableContainer,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const TableCellStyled = styled(TableCell)(() => ({
  color: '#434343',
  fontWeight: 800,
  fontSize: '16px'
}));

const TableCellRowStyled = styled(TableCell)(() => ({
  color: '#737373',
  borderBottom: '1px solid #ededed',
  fontSize: '14px'
}));

const TableContainerStyled = styled(TableContainer)(() => ({
  border: '1px solid #ededed'
}));

export {
  TableCellStyled,
  TableCellRowStyled,
  TableContainerStyled
}
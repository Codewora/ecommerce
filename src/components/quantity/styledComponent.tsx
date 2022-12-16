import { styled, Box } from '@mui/material';

const ProductSize = styled('span')(() => ({
  height: '30px',
  width: '30px',
  background: '#f2f4f3',
  padding: '4px',
  borderRadius: '7px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px',
  cursor: 'pointer'
}));

const ProductContainer = styled(Box)(() => ({
  display: 'flex',
}));

export {
  ProductSize,
  ProductContainer
}
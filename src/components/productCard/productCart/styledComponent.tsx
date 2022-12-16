import { styled, Box } from '@mui/material';

const Container = styled(Box)(() => ({
  display: 'flex',
}));

const ProductContainer = styled(Box)(() => ({
  width: '100px',
  height: '100px',
  padding: '20px',
  background: '#edf1f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px'
}));

const TextContainer = styled(Box)(() => ({
  marginLeft: '20px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));


const Image = styled('img')(() => ({
  width: '100%',
}));

const ProductTitle = styled('p')(() => ({
  fontWeight: 800,
  padding: '20px 0 5px 0',
  color: '#434343',
  '&:hover': {
    color: '#737373',
  }
}));

const ProductColor = styled('span')(() => ({
  fontWeight: 800,
}));

const ProductSize = styled('span')(() => ({
  background: '#f2f4f3',
  padding: '4px',
  borderRadius: '7px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ProductTextContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export {
  Container,
  ProductContainer,
  TextContainer,
  Image,
  ProductTitle,
  ProductColor,
  ProductSize,
  ProductTextContainer
}
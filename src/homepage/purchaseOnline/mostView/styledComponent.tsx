import { styled, Box } from '@mui/material';

const ProductContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '1300px',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  }
}));

const ProductsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only('lg')]: {
    flex: '0 1 30%',
  },
  [theme.breakpoints.only('xl')]: {
    flex: '0 1 25%',
  },
  [theme.breakpoints.only('md')]: {
    flex: '0 1 35%',
  },
  [theme.breakpoints.only('sm')]: {
    flex: '0 1 50%',
  },
  [theme.breakpoints.only('xs')]: {
    flex: '0 1 80%',
  },
}));

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
}));

export {
  ProductContainer,
  ProductsContainer,
  Container
}
import { styled, Box } from '@mui/material';

const ProductContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: '0 40px',
  },
}));

export {
  FilterContainer,
  Container,
  ProductContainer,
}
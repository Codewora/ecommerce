import { styled, Box } from '@mui/material';

const ProductContainer = styled(Box)(() => ({
  height: '450px',
  width: '100%',
  padding: '20px',
}));

const Heading = styled('p')(() => ({
  fontWeight: 800,
  color: '#3AAFA9',
  margin: '0 0 20px 0',
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    background: '#DEF2F1',
    width: '50px',
    height: '4px',
    bottom: '-4px',
    borderRadius: '20px',
  },
}));

export {
  ProductContainer,
  Heading
}
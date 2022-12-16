import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Box)<any>(({ width, margin, boxShadow }: any) => ({
  width: width,
  padding: '20px',
  background: '#ffffff',
  margin: margin || '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  border: '1px solid #f2f4f3',
  borderRadius: '7px',
  transition: 'all .5s ease-in-out',
  '&:hover': {
    boxShadow: boxShadow || '1px 25px 54px rgb(0 0 0 / 12%)',
  },
}));

const ProductContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: '250px',
  background: '#edf1f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  padding: '40px',
}));

const ProductValueContainer = styled(Box)<any>(({ show }: any) => ({
  position: 'absolute',
  width: '100%',
  background: '#edf1f5',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '10px 0',
  bottom: show ? '0' : '-40px',
  transition: 'all .5s ease-in-out',
  color: '#737373',
}));

const Image = styled('img')(() => ({
  width: '100%',
}));

const ProductTitle = styled('p')(() => ({
  fontWeight: 800,
  padding: '20px 0',
  color: '#434343',
  fontSize: '16px',
  '&:hover': {
    color: '#737373',
  }
}));

const ProductPrice = styled('p')(() => ({
  color: '#3AAFA9',
}));

const ProductType = styled('p')(() => ({
  color: '#737373',
  fontSize: '14px'
}));

const ProductRating = styled(Box)(() => ({
  color: '#3AAFA9',
}));

const ProductDetailsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
}));

export {
  Container,
  ProductContainer,
  Image,
  ProductValueContainer,
  ProductTitle,
  ProductPrice,
  ProductType,
  ProductRating,
  ProductDetailsContainer
}
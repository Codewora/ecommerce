import { styled,  Box } from '@mui/material';

const ProductViewMainContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
}));

const ProductViewContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1400px',
  border: '1px solid #ededed',
  padding: '20px',
  borderRadius: '10px',
}));

const ProductTitle = styled('p')(() => ({
  fontWeight: 800,
  padding: '0 0 10px 0',
  color: '#434343',
}));

const ProductPrice = styled('p')(() => ({
  fontWeight: 800,
  padding: '10px 0',
  color: '#3AAFA9',
}));

const ProductDescription = styled('p')(() => ({
  padding: '10px 0',
  color: '#00000070',
  fontSize: '14px',
}));

const ProductDetailsContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const ProductContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px 0',
}));

const TextContainer = styled(Box)(() => ({
  display: 'flex',
}));

const ColorStyled = styled(Box)<any>(({ backgroundColor }) => ({
  height: '20px',
  width: '20px',
  margin: '0 5px',
  backgroundColor,
}));

const Title = styled('p')(() => ({
  fontWeight: 800,
  color: '#434343',
}));

const SizeLable = styled(Box)(() => ({
  color: '#3AAFA9',
  height: '30px',
  width: '30px',
  borderRadius: '11px',
  backgroundColor: '#e7ecf2',
  margin: '0 5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  fontWeight: 800,
}));

const Image = styled('img')(({ theme, height }) => ({
  width: '100%',
  height: height || '600px',
  [theme.breakpoints.down('sm')]: {
    height: height || '300px',
  },
  objectFit: 'cover',
}));

const ProductRating = styled('div')(() => ({
  padding: '0 0 20px 0',
  color: '#3AAFA9',
}));

const SliderProduct = styled(Box)(() => ({
  padding: '0 20px',
  outline: 'none',
}));

const ProductDetailContainer = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const Heading = styled('p')(() => ({
  fontWeight: 800,
  margin: '20px 0',
  color: '#3AAFA9',
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
  ProductViewMainContainer,
  ProductViewContainer,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductDetailsContainer,
  ProductDetailContainer,
  SliderProduct,
  ProductRating,
  Image,
  SizeLable,
  Heading,
  Title,
  ColorStyled,
  TextContainer,
  ProductContainer
}
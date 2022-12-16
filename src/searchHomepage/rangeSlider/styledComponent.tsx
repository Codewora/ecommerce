import { Box, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

const MainContainer = styled(Box)(({theme}) => ({
  border: '1px solid #ededed',
  margin: '20px 0',
  width: '300px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

const Container = styled(Box)(({theme}) => ({
  width: '300px',
  background: '#ffffff',
  padding: '0 20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

const PriceContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '20px 0',
  color: '#434343',
  fontSize: '14px'
}));

const HeaderContainer = styled(Box)(({theme}) => ({
  width: '300px',
  padding: '10px',
  background: '#ffffff',
  borderBottom: '1px solid #ededed',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

const HeadingStyled = styled('p')(() => ({
  color: '#737373',
  fontWeight: '800',
  padding: '10px 0',
  fontSize: '16px'
}));

const PriceText = styled('span')(() => ({
  fontWeight: 900,
  paddingRight: '10px',
  color: '#737373'
}));

const PriceSliderContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const PriceSlider = styled(Slider)(() => ({
  width: '90%',
  color: '#3AAFA9'
}));


export {
  MainContainer,
  Container,
  PriceContainer,
  HeaderContainer,
  HeadingStyled,
  PriceText,
  PriceSliderContainer,
  PriceSlider
}
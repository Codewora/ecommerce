import { Box, Button, styled } from '@mui/material';

const ContainerStyled = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  height: '500px',
  borderRadius: '10px',
  width: '100%',
  position: 'relative',
  margin: '20px',
  overflow: 'hidden'
}));

const BannerStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SaleStyled = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  height: '80px',
  width: '80px',
  borderRadius: '100%',
  background: '#3AAFA9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  fontWeight: 800
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  position: 'absolute',
  bottom: '50px',
  right: '50px',
  background: '#3AAFA9',
  color: '#ffffff',
  fontWeight: 800,
  fontSize: '14px',
  '&:hover': {
    background: '#ffffff',
    color: '#3AAFA9',
  }
}));

const DiscountTitleStyled = styled('p')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  position: 'absolute',
  bottom: '50px',
  left: '50px',
  padding: '20px 0',
  fontSize: '35px',
  fontWeight: 800,
  color: '#3AAFA9', 
  textShadow: '-4px 2px 14px rgba(58, 175, 169,0.5)'
}));

export {
  ContainerStyled,
  BannerStyled,
  SaleStyled,
  ButtonStyled,
  DiscountTitleStyled
}
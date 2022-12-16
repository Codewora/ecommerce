import { Box, Button, styled } from '@mui/material';

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 'calc(100% - 160px)',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column-reverse',
    width: '100%'
  },
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '29%',
    padding: '20px',
    flexDirection: 'column',
    height: '100%'
  },
  [theme.breakpoints.only('md')]: {
    width: '100%',
    flexDirection: 'row',
    height: 'auto'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    flexDirection: 'row',
    padding: '20px'
  },
  justifyContent: 'space-between',
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap'
}));

const LeftInnerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '4px',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    width: '100%',
    height: '45%'
  },
  [theme.breakpoints.only('md')]: {
    width: '50%',
    height: '100%',
    padding: '20px'
  },
  [theme.breakpoints.down('md')]: {
    width: '50%',
    padding: '10px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const RightContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '70%',
    height: '100%',
    padding: '20px 0 20px 20px',
  },
  [theme.breakpoints.only('md')]: {
    width: '100%',
    padding: '20px',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '100%',
    padding: '20px',
  },
}));

const SocialMedia = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px'
}));

const LoginContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px'
}));

const IconContainer = styled(Box)(() => ({
  padding: '20px 0',
  cursor: 'pointer',
  color: '#434343'
}));

const Container = styled(Box)(({theme}) => ({
  display: 'flex',
  height: '100%',
  [theme.breakpoints.down('lg')]: {
    height: 'auto',
  },
}));

const FeatureProductContainer = styled(Box)(() => ({
  padding: '40px 0'
}));

const ButtonStyled = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  background: '#3AAFA9',
  border: '2px solid #3AAFA9',
  color: '#ffffff',
  fontSize: '13px',
  fontWeight: 800,
  '&:hover': {
    color: '#ffffff',
    background: '#3AAFA9',
  }
}));

export {
  ImageContainer,
  LeftContainer,
  LeftInnerContainer,
  RightContainer,
  LoginContainer,
  IconContainer,
  Container,
  SocialMedia,
  FeatureProductContainer,
  ButtonStyled
}
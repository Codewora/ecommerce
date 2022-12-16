import { styled, Box  } from '@mui/material';
import {
  ICONS
} from '../../components';

const { FaCcPaypalIcon, RiVisaLineIcon } = ICONS;

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

const Container = styled(Box)(() => ({
  display: 'flex',
  maxWidth: '1400px',
  borderRadius: '10px',
  padding: '20px',
  border: '1px solid #ededed'
}));

const ButtonContainer = styled(Box)(() => ({
  padding: '20px 0',
}));

const FaCcPaypalStyled = styled(FaCcPaypalIcon)(() => ({
  
}));

const RiVisaLineStyled = styled(RiVisaLineIcon)(() => ({
  margin: '0 0 0 10px'
}));

const Heading = styled('p')(() => ({
  fontWeight: 800,
  margin: '20px 0',
  color: '#3AAFA9',
  position: 'relative',
  fontSize: '16px',
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

const Text = styled('p')(() => ({
  color: '#a7a7a7',
  fontSize: '14px'
}));

export {
  MainContainer,
  Container,
  ButtonContainer,
  FaCcPaypalStyled,
  RiVisaLineStyled,
  Heading,
  Text
}
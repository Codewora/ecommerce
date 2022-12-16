import {
  Accordion,
  Typography,
  styled
} from '@mui/material';

const AccordianTitle = styled(Typography)(() => ({
  color: '#434343',
  fontWeight: 700,
  fontSize: '15px'
}));

const AccordianStyled = styled(Accordion)(() => ({
  boxShadow: 'none',
  border: '1px solid #ededed'
}));

export {
  AccordianTitle,
  AccordianStyled
}
import { styled, Button } from '@mui/material';

const ButtonStyled = styled(Button)(() => ({
  background: '#3AAFA9',
  color: '#ffffff',
  fontWeight: 800,
  outline: 'none',
  border: 'none',
  fontSize: '15px',
  '&:hover': {
    background: '#ffffff',
    color: '#3AAFA9',
    border: '2px  solid #3AAFA9',
  }
}));

export {
  ButtonStyled
}
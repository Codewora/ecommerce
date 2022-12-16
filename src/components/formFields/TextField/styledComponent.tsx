import { TextField, styled } from '@mui/material';

const TextFieldStyled = styled(TextField)(() => ({
  margin: '20px 0',
  '.MuiFilledInput-input': {
    color: '#aba9a9',
    
  },
  '.MuiInputLabel-root': {
    color: '#737373 !important',
    fontSize: '16px'
  },
  '.MuiFilledInput-underline': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  '.Mui-focused.MuiFilledInput-underline': {
    backgroundColor: 'transparent',
  },

  '.MuiFilledInput-root': {
    '&:before': {
      borderBottom: '1px solid #f2f4f3 !important'
    },
    '&:hover': {
      borderBottom: '1px solid #3AAFA9 !important'
    },
    '&:after': {
      borderBottom: '1px solid #3AAFA9 !important'
    },
  }
 
}));

export {
  TextFieldStyled
}
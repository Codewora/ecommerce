import { styled, Box } from '@mui/material';

const Container = styled(Box)(() => ({
  height: '300px',
  width: '500px',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  padding: '20px 40px',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const LoginTitle = styled('p')(() => ({
  color: '#3AAFA9',
  fontWeight: 900,
}));

const IconsContainer = styled('span')(() => ({
  color: '#434343',
  fontWeight: 900,
}));


export {
  Container,
  LoginTitle,
  IconsContainer
}
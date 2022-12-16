import { styled, Box, Tabs, Tab  } from '@mui/material';

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TabsStyled = styled(Tabs)(() => ({
  '.Mui-selected': {
    color: '#3AAFA9 !important',
  },
  '.MuiTabs-indicator': {
    background: '#3AAFA9 !important',
  },
}));

const TabStyled = styled(Tab)(() => ({
  fontSize: '14px',
}));

const Link = styled('p')(() => ({
  color: '#737373',
  cursor: 'pointer',
  fontSize: '15px',
}));

export {
  Container,
  TabsStyled,
  Link,
  TabStyled
}
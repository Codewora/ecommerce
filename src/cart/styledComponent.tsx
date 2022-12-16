import { styled, Tabs, Tab, Box } from '@mui/material';

const CustomTabs = styled(Tabs)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  '.MuiTabs-flexContainer': {
    flexWrap: 'wrap',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  '.MuiTabs-indicator': {
    display: 'none',
  },
}));

const CustomTab = styled(Tab)(({theme}) => ({
  background: '#edf1f5',
  marginTop: '10px',
  borderRadius: '10px',
  fontWeight: 800,
  width: '200px',
  color: '#3AAFA9',
  fontSize: '14px',
  '&.Mui-selected': {
    background: '#3AAFA9',
    color: '#ffffff',
  },
  [theme.breakpoints.down('sm')]: {
    width: '95%',
  }
}));

const Container = styled(Box)(() => ({
  width: '100%',
}));

export {
  CustomTabs,
  CustomTab,
  Container
}
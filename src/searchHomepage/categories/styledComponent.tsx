import {
  styled, Box, ListItemButton, ListItemText
} from '@mui/material';

const MainContainer = styled(Box)(({theme}) => ({
  margin: '20px 0 0 0',
  border: '1px solid #ededed',
  width: '300px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

const Container = styled(Box)(({theme}) => ({
  width: '300px',
  padding: ' 0 10px 10px 10px',
  background: '#ffffff',
  height: '350px',
  overflowY: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

const CustomListText = styled(ListItemText)(() => ({
  paddingLeft: '10px',
  color: '#737373',
  'span': {
    fontSize: '14px',
    fontWeight: 600
  }

}));

const CustomListButton = styled(ListItemButton)(() => ({
  padding: '0 16px 0 16px !important',
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

const ListItemTextHeading = styled(ListItemText)(() => ({
  color: '#3AAFA9',
  'span': {
    fontSize: '15px',
    fontWeight: '800'
  }
}));

export {
  MainContainer,
  Container,
  CustomListText,
  ListItemTextHeading,
  HeadingStyled,
  HeaderContainer,
  CustomListButton
}
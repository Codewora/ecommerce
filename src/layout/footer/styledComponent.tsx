import { Box, Card, styled } from '@mui/material';

const MainContainer = styled(Box)(({theme}) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'whitesmoke',
  position: 'relative',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '150px',
    marginTop: '90px',
  },
  [theme.breakpoints.up('xs')]: {
    paddingTop: '75px',
    marginTop: '150px',
  }
}));

const Container = styled(Box)(() => ({
  width: '100%',
}));

const FooterContainer = styled(Box)(() => ({
  width: '100%',
  padding: '20px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const ListItem = styled(Box)<any>(({ fontWeight, padding, theme, color }) => ({
  width: '50%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  wordBreak: 'break-all',
  padding,
  fontWeight,
  color,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexDirection: 'column',
    padding: '10px 0'
  }
}));

const FollowText = styled('p')(({ theme }) => ({
  fontSize: '16px',
  color: '#737373',
  fontWeight: 900
}));

const List = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  padding: '8px',
  color: '#737373',
  fontSize: '18px',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}));

const HeaderIcon = styled('img')(() => ({
  height: '100px',
}));

const LogoContainer = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Heading = styled('p')(({theme}) => ({
  fontWeight: 800,
  margin: '20px 0',
  color: '#3AAFA9',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    background: '#DEF2F1',
    width: '50px',
    height: '4px',
    bottom: '-4px',
    borderRadius: '20px',
  }
}));

const CustomerCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '-100px',
  boxShadow: 'none',
  border: '1px solid #ededed',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  [theme.breakpoints.up('xs')]: {
    width: '60%',
  }
}));

const SubscribeButton = styled(Box)(({theme}) => ({
  margin: '0 20px',
  [theme.breakpoints.down('sm')]: {
    margin: '0',
  },
}));

export {
  MainContainer,
  Container,
  FooterContainer,
  List,
  ListItem,
  FollowText,
  HeaderIcon,
  LogoContainer,
  CustomerCard,
  Heading,
  SubscribeButton
}
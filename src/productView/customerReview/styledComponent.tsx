import { styled, Box } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const UserDetailsContainer = styled(Box)(() => ({
  width: '100%',
  padding: '20px'
}));


const CustomerName = styled('p')(() => ({
  fontWeight: 800,
  padding: '0 0 5px 0',
  color: '#434343',
  fontSize: '20px'
}));

const ReviewDate = styled('p')(() => ({
  fontWeight: 800,
  padding: '0 0 10px 0',
  color: '#737373',
  fontSize: '14px'
}));

const ReviewComment = styled('p')(() => ({
  fontWeight: 800,
  padding: '0 0 10px 0',
  color: '#00000070',
  fontSize: '14px'
}));


const Image = styled('img')(() => ({
  width: '100px',
  height: '130px',
  objectFit: 'cover',
  borderRadius: '10px'
}));


const ImageContainer = styled(Box)(() => ({
  padding: '20px'
}));


export {
  Container,
  UserDetailsContainer,
  CustomerName,
  ReviewDate,
  ReviewComment,
  Image,
  ImageContainer
}
import { styled, Box } from '@mui/material';

const Container = styled(Box)(() => ({
  height: 'calc(100vh - 100px)',
  overflow: 'auto'
}));

const ImageContainer = styled('div')(() => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgb(246 246 246 / 0%)',
    top: 0,
    left: 0,
    zIndex: 10,
  },
}));
const Image = styled('img')(() => ({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
}));

export {
  Container,
  ImageContainer,
  Image
}
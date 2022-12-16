import { Box, styled, Skeleton } from '@mui/material';

const ImageContainer = styled(Box)(() => ({
  position: 'relative',
  height: '100%',
  width: '100%',
}));

const SkeletonStyled = styled(Skeleton)(() => ({
  height: '100%',
  width: '100%',
}));

const ImageContainerStyled = styled(Box)<any>(({isLoading}) => ({
  height: '100%',
  width: '100%',
  display: isLoading ? 'none !important' : ''
}));


const Image = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  userSelect: 'none'
}));

export {
  ImageContainer,
  Image,
  SkeletonStyled,
  ImageContainerStyled
}
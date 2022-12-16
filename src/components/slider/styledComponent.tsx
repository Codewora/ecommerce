import Slider from "react-slick";
import {styled} from '@mui/material';


const CustomSlider = styled(Slider)(({showButton}: any) => ({
  height: '100%',
  '.slick-list': {
    height: '100%'
  },
  '.slick-track': {
    height: '100%',
    '.slick-slide': {
      'div:first-child': {
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }
  },
  '.slick-next': {
    right: 0,
    zIndex: 2,
    display: showButton ? '' : 'none !important',
    '&::before': {
      color: '#3AAFA9'
    }
  },
  '.slick-prev': {
    left: 0,
    zIndex: 2,
    display: showButton ? '' : 'none !important',
    '&::before': {
      color: '#3AAFA9'
    }
  },
  '.slick-dots': {
    bottom: '14px'
  }
}));

export {
  CustomSlider
}
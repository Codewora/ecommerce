import { styled, Box } from '@mui/material';
import {  
  ICONS
} from '../../icons';
const {
  AddShoppingCartIcon,
  FavoriteBorderIcon,
  SavedSearchIcon,
} = ICONS;

const AddShoppingCartIconStyled = styled(AddShoppingCartIcon)(() => ({
  '&:hover': {
    color: '#737373'
  }
}));

const FavoriteBorderIconStyled = styled(FavoriteBorderIcon)(() => ({
  '&:hover': {
    color: '#737373'
  }
}));

const SavedSearchIconStyled = styled(SavedSearchIcon)(() => ({
  '&:hover': {
    color: '#737373'
  }
}));

const Container = styled(Box)(({boxShadow}) => ({
  width: '350px',
  padding: '20px',
  background: '#ffffff',
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #f2f4f3',
  borderRadius: '7px',
  transition: 'all .5s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: boxShadow || '1px 25px 54px rgb(0 0 0 / 12%)'
  }
}));

const ProductContainer = styled(Box)(() => ({
  width: '100%',
  height: '300px',
  background: '#edf1f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px'
}));

const ProductValueContainer = styled(Box)(() => ({
  width: '100%',
  background: '#edf1f5',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '10px 0',
  color: '#9d9d9d',
  cursor: 'pointer'

}));

const Image = styled('img')(() => ({
  width: '100%',
}));

const ProductTitle = styled('p')(() => ({
  fontWeight: 800,
  padding: '20px 0',
  color: '#434343',
  '&:hover': {
    color: '#737373',
  }
}));


const ProductRating = styled('div')(() => ({
  padding: '0 0 20px 0',
  color: '#3AAFA9'
}));

export {
  Container,
  ProductContainer,
  ProductValueContainer,
  Image,
  ProductTitle,
  ProductRating,
  AddShoppingCartIconStyled,
  FavoriteBorderIconStyled,
  SavedSearchIconStyled
}
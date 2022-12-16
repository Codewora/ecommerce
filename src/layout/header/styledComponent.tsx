import { styled, Box } from '@mui/material';
import { ICONS } from '../../components';

const {  ShoppingCartIcon , MenuIcon } = ICONS;

const HeaderContainer = styled(Box)(() => ({
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  height: '100px'
}));

const ShoppingCartIconStyled = styled(ShoppingCartIcon)(() => ({
  color: '#737373',
  cursor: 'pointer'
}));

const MenuIconStyled = styled(MenuIcon)(() => ({
  color: '#737373',
  cursor: 'pointer'
}));

const HeaderIcon = styled('img')(() => ({
  height: '100px',
  cursor: 'pointer'
}));


export {
  HeaderContainer,
  ShoppingCartIconStyled,
  MenuIconStyled,
  HeaderIcon
}
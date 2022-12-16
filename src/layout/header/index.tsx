import { routeName } from '../../constant';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../image';
import {
  HeaderContainer,
  ShoppingCartIconStyled,
  MenuIconStyled,
  HeaderIcon
} from './styledComponent';

const Header = ({setIsOpen}: any) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <MenuIconStyled onClick={() => setIsOpen(true)}/>
      <HeaderIcon src={Logo} onClick={() => navigate(routeName.HOMEPAGE)} />
      <ShoppingCartIconStyled onClick={() => navigate(routeName.CART)} />
    </HeaderContainer>
  )
}

export default Header;
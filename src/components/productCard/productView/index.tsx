import { ICONS } from '../../icons';
import { useNavigate } from 'react-router-dom';
import { routeName } from '../../../constant';
import {
  Container,
  ProductContainer,
  ProductValueContainer,
  Image,
  ProductTitle,
  ProductRating,
  AddShoppingCartIconStyled,
  FavoriteBorderIconStyled,
  SavedSearchIconStyled,
} from './styledComponent';

const { StarBorderIcon, StarHalfIcon, StarIcon } = ICONS;

type Props = {
  details: {
    name: string;
    image: string;
  };
};

const ProductCard = ({ details }: Props) => {
  const { name, image } = details;
  const navigation = useNavigate();
  return (
    <Container>
      <ProductContainer>
        <Image src={image} />
      </ProductContainer>
      <ProductTitle onClick={() => navigation(routeName.PRODUCTVIEW)}>
        {name}
      </ProductTitle>
      <ProductRating>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalfIcon />
        <StarBorderIcon />
      </ProductRating>
      <ProductValueContainer>
        <FavoriteBorderIconStyled />
        <div>|</div>
        <AddShoppingCartIconStyled onClick={() => navigation(routeName.CART)} />
        <div>|</div>
        <SavedSearchIconStyled />
      </ProductValueContainer>
    </Container>
  );
};

export default ProductCard;

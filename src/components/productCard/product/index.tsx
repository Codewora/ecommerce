import { useState } from 'react';
import { ICONS } from '../../icons';
import { useNavigate } from 'react-router-dom';
import { routeName } from '../../../constant';
import {
  Container,
  ProductContainer,
  Image,
  ProductValueContainer,
  ProductTitle,
  ProductPrice,
  ProductType,
  ProductRating,
  ProductDetailsContainer,
} from './styledComponent';
const {
  AddShoppingCartIcon,
  FavoriteBorderIcon,
  SavedSearchIcon,
  StarBorderIcon,
  StarHalfIcon,
  StarIcon,
} = ICONS;

type Props = {
  details: {
    name: string;
    image: string;
  };
  width?: string;
  margin?: string;
  boxShadow?: string;
};

const ProductCard = ({ details, width, margin, boxShadow }: Props) => {
  const { name, image } = details;
  const [show, setShow] = useState<boolean>(false);
  const navigation = useNavigate();

  return (
    <Container
      width={width}
      margin={margin}
      boxShadow={boxShadow}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <ProductContainer>
        <Image src={image} />
        <ProductValueContainer show={show}>
          <FavoriteBorderIcon />
          <div>|</div>
          <AddShoppingCartIcon onClick={() => navigation(routeName.CART)} />
          <div>|</div>
          <SavedSearchIcon />
        </ProductValueContainer>
      </ProductContainer>
      <ProductDetailsContainer>
        <ProductTitle onClick={() => navigation(routeName.PRODUCTVIEW)}>
          {name}
        </ProductTitle>
        <ProductType>Technology</ProductType>
      </ProductDetailsContainer>
      <ProductDetailsContainer>
        <ProductPrice>$56</ProductPrice>
        <ProductRating>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarBorderIcon />
        </ProductRating>
      </ProductDetailsContainer>
    </Container>
  );
};

export default ProductCard;

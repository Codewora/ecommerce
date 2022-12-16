import { useNavigate } from 'react-router-dom';
import { routeName } from '../../../constant';
import {
  Container,
  ProductContainer,
  TextContainer,
  Image,
  ProductTitle,
  ProductColor,
  ProductSize,
  ProductTextContainer,
} from './styledComponent';

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
      <TextContainer>
        <ProductTitle onClick={() => navigation(routeName.PRODUCTVIEW)}>
          {name}
        </ProductTitle>
        <ProductTextContainer>
          <ProductColor>color</ProductColor> : Black
        </ProductTextContainer>
        <ProductTextContainer>
          <ProductColor>Size</ProductColor> :<ProductSize> XL</ProductSize>
        </ProductTextContainer>
      </TextContainer>
    </Container>
  );
};

export default ProductCard;

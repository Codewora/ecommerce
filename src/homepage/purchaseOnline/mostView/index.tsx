import { Product } from '../../../components';
import { mostViewedProductDetails } from '../../../dummyText';
import {
  ProductContainer,
  ProductsContainer,
  Container
} from './styledComponent';

const PurchaseOnlineProducts = () => {
  return <Container>
    <ProductContainer>
      {mostViewedProductDetails.map((item, index) => (
      <ProductsContainer> 
        <Product details={item} key={index} />
      </ProductsContainer>
    ))}
      
    </ProductContainer>
  </Container>
}

export default PurchaseOnlineProducts;
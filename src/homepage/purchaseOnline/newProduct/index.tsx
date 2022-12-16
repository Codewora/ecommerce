import { Product } from '../../../components';
import { newProductDetails } from '../../../dummyText';
import {
  ProductContainer,
  ProductsContainer,
  Container
} from './styledComponent';

const PurchaseOnlineProducts = () => {
  return <Container>
    <ProductContainer>
      {newProductDetails.map((item, index) => (
      <ProductsContainer> 
        <Product details={item} key={index} />
      </ProductsContainer>
    ))}
      
    </ProductContainer>
  </Container>
}

export default PurchaseOnlineProducts;
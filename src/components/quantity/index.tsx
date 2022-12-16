import {
  ProductSize,
  ProductContainer
} from './styledComponent';

type Props = {
  value?: number
}

const CartQuantity = ({value=1}: Props) => {
  return (
    <ProductContainer>
      <ProductSize>-</ProductSize>
      <ProductSize>{value}</ProductSize>
      <ProductSize>+</ProductSize>
    </ProductContainer>
  )
}

export default CartQuantity;
import { productCardHeader, productCardRow } from './productCart';
import {ProductTable} from '../../components';

const ShoppingCart = () => {

  return <ProductTable
    header={productCardHeader}
    row={productCardRow} />;
};

export default ShoppingCart;

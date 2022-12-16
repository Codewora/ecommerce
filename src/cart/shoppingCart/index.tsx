import {ProductTable} from '../../components';
import { productCardHeader, productCardRow } from './productCart';

const ShoppingCart = () => {

  return (<ProductTable
    header={productCardHeader}
    row={productCardRow}
  />
  );
};

export default ShoppingCart;

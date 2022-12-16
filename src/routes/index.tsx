import { ReactNode } from 'react';
import ProductView from '../productView';
import SearchProductHomepage from '../searchHomepage';
import CartSection from '../cart';
import Homepage from '../homepage';
import { routeName } from '../constant';

type IRoute = {
  pathName: string,
  component: JSX.Element | JSX.Element[] | ReactNode
}[]

export const routes: IRoute = [
  {
    pathName: routeName.HOMEPAGE,
    component: <Homepage />,
  },
  {
    pathName: routeName.CART,
    component: <CartSection />,
  },
  {
    pathName: routeName.SEARCHPRODUCT,
    component: <SearchProductHomepage/>,
  },
  {
    pathName: routeName.PRODUCTVIEW,
    component: <ProductView />,
  }
];
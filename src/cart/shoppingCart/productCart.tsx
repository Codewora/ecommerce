import { ReactNode } from 'react';
import { Quantity, ICONS, ProductCart } from '../../components';
import { AppleImage, EarPhoneImage, GoogleImage} from '../../image';

const { CloseIcon } = ICONS;

type IProduct = {
  name: string,
  image: string
}[]

type IProductCard = {
  'Product' : JSX.Element | JSX.Element[] | ReactNode,
  'Price': string,
  'Quantity':  JSX.Element | JSX.Element[] | ReactNode,
  'Total': string,
  'Remove': any
}[]

const productDetails: IProduct = [
  {
    name: 'Dummy Product',
    image: AppleImage
  },
  {
    name: 'Dummy Product',
    image: EarPhoneImage
  },
  {
    name: 'Dummy Product',
    image: GoogleImage
  },
];

export const productCardHeader: string[] = ['Product', 'Price', 'Quantity', 'Total', 'Remove']

export const productCardRow:IProductCard = [
  {
    'Product' : <ProductCart details={productDetails[0]} />,
    'Price': '$59',
    'Quantity': <Quantity />,
    'Total': '569',
    'Remove': <CloseIcon />
  },
  {
    'Product' : <ProductCart details={productDetails[1]} />,
    'Price': '$59',
    'Quantity': <Quantity />,
    'Total': '569',
    'Remove': <CloseIcon />
  },
  {
    'Product' : <ProductCart details={productDetails[2]} />,
    'Price': '$59',
    'Quantity': <Quantity />,
    'Total': '569',
    'Remove': <CloseIcon />
  },

];
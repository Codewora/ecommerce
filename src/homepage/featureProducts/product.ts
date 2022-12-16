import {
  AppleImage,
  EarPhoneImage,
  GoogleImage,
  HeadPhoneImage,
  FidgetImage,
  IOSImage
} from '../../image';

type IProduct = {
  name: string,
  image: string
}[]

export const slides: any = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 4,
};

export const productDetails: IProduct = [
  {
    name: 'Apple',
    image: AppleImage,
  },
  {
    name: 'Earphone',
    image: EarPhoneImage,
  },
  {
    name: 'Google',
    image: GoogleImage,
  },
  {
    name: 'Headphone',
    image: HeadPhoneImage,
  },
  {
    name: 'Fidget',
    image: FidgetImage,
  },
  {
    name: 'Mobile',
    image: IOSImage,
  },
];

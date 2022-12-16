import {
  AppleImage,
  EarPhoneImage,
  GoogleImage,
  FidgetImage,
  HeadPhoneImage,
  IOSImage
} from '../image';

type ISearchProduct = {
  name: string,
  image: string
}[]

export const searchProductDetails:ISearchProduct = [
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
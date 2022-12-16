import {
  AppleImage,
  EarPhoneImage,
  FidgetImage,
  GoogleImage,
  HeadPhoneImage,
  IOSImage,
  MiniBotImage,
  MosquitoImage,
  TechnologyImage,
} from '../image';

type IProduct = {
  name: string,
  image: string
}[]

export const productDetails: IProduct = [
  {
    name: 'Mouse',
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
    name: 'Head phone',
    image: HeadPhoneImage,
  },
  {
    name: 'IOS',
    image: IOSImage,
  },
  {
    name: 'Fidget',
    image: FidgetImage,
  },
  {
    name: 'Minibot',
    image: MiniBotImage,
  },
  {
    name: 'Mosquito',
    image: MosquitoImage,
  },
  {
    name: 'Technology',
    image: TechnologyImage,
  },
];

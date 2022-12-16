import { FormFields } from '../../constant';

type IForm = {
  name: string,
  label: string,
  IDENTIFIER: string
}[]

type IProductCard = {
  Price: string,
  Total: string,
}[]

const billingFormDetails:IForm = [
  {
    name: 'name',
    label: 'Your Name',
    IDENTIFIER: FormFields.TEXTFIELD,
  },
  {
    name: 'email',
    label: 'Email',
    IDENTIFIER: FormFields.TEXTFIELD,
  },
  {
    name: 'mobileNumber',
    label: 'Mobile Number',
    IDENTIFIER: FormFields.TEXTFIELD,
  },
  {
    name: 'company',
    label: 'Company Name',
    IDENTIFIER: FormFields.TEXTFIELD,
  },
];

const shippingFormDetails:IForm = [
  {
    name: 'name',
    label: 'Your Name',
    IDENTIFIER: FormFields.TEXTFIELD,
  },
  {
    name: 'email',
    label: 'Email',
    IDENTIFIER: FormFields.TEXTFIELD,
  },
  {
    name: 'mobileNumber',
    label: 'Mobile Number',
    IDENTIFIER: FormFields.TEXTFIELD,
  },
  {
    name: 'company',
    label: 'Company Name',
    IDENTIFIER: FormFields.TEXTFIELD,
  },
];

const productCardHeader: string[] = ['Price', 'Total'];

const productCardRow: IProductCard = [
  {
    Price: '$59',
    Total: '569',
  },
  {
    Price: '$59',
    Total: '569',
  },
  {
    Price: '$59',
    Total: '569',
  },
];

export {
  billingFormDetails,
  shippingFormDetails,
  productCardHeader,
  productCardRow
}
import { Grid  } from '@mui/material';
import {
  FormFieldsComponent, Accordian, ProductTable, PrimaryButton
} from '../../components';
import {
  billingFormDetails,
  shippingFormDetails,
  productCardHeader,
  productCardRow
} from './details';
import {
  MainContainer,
  Container,
  ButtonContainer,
  FaCcPaypalStyled,
  RiVisaLineStyled,
  Heading,
  Text
} from './styledComponent';

const CheckoutCart = () => {

  const renderFormFields = (item: any) => {
    try {
      const Field = FormFieldsComponent[item.IDENTIFIER];
      return <Field label={item?.label} />;
    } catch (e) {
      console.log('Error', e);
    }
  };

  return (
    <MainContainer>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Heading>Billing Details</Heading>
            {billingFormDetails.map((item) => renderFormFields(item))}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Heading>Ship to Different Address</Heading>
            {shippingFormDetails.map((item) => renderFormFields(item))}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Heading>Our Order</Heading>
            <ProductTable header={productCardHeader} row={productCardRow} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Heading>Payment Method</Heading>
            <Accordian title='DIRECT BANK TRANSFER'>
              <Text>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won't be
                shipped until the funds have cleared in our account.
              </Text>
            </Accordian>

            <Accordian title='CHEQUE PAYMENT'>
              <Text>
                Please send your cheque to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </Text>
            </Accordian>

            <Accordian title='PAYPAL'>
              <Text>
                Pay via PayPal; you can pay with your credit card if you don’t
                have a PayPal account.
              </Text>
              <div>
                <FaCcPaypalStyled />
                <RiVisaLineStyled />
              </div>
            </Accordian>
            <ButtonContainer>
              <PrimaryButton name='Place Order' />
            </ButtonContainer>
          </Grid>
        </Grid>
      </Container>
    </MainContainer>
  );
};

export default CheckoutCart;

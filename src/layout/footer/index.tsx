import { Grid } from '@mui/material';
import {Logo} from '../../image';
import { PrimaryButton, FormFieldsComponent } from '../../components';
import { FormFields } from '../../constant';
import {
  MainContainer,
  Container,
  FooterContainer,
  List,
  ListItem,
  FollowText,
  HeaderIcon,
  LogoContainer,
  CustomerCard,
  Heading,
  SubscribeButton
} from './styledComponent';

const TextFieldComponent = FormFieldsComponent[FormFields.TEXTFIELD]


const Footer = () => {
  return (
    <MainContainer>
      <CustomerCard>
      <TextFieldComponent
            label='Enter your email address'
        />
        <SubscribeButton>
        <PrimaryButton name='Subscribe'/>
        </SubscribeButton>
      </CustomerCard>
      <FooterContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <LogoContainer>
              <HeaderIcon src={Logo} />
              <FollowText>Follow us for more</FollowText>
            </LogoContainer>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Container>
              <Heading>Contact Us</Heading>
              <List>
                <ListItem fontWeight='800' color='#434343'>Address</ListItem>
                <ListItem padding='0 0 0 10px'>
                  112 National Highway Kurukshetra Harayan, India
                </ListItem>
              </List>
              <List>
                <ListItem fontWeight='800' color='#434343'>Cell-Phone</ListItem>
                <ListItem padding='0 0 0 10px'>987654312</ListItem>
              </List>
              <List>
                <ListItem fontWeight='800' color='#434343'>Email</ListItem>
                <ListItem padding='0 0 0 10px'>codewora@develper.com</ListItem>
              </List>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <Container>
              <Heading>Account</Heading>
              <List>Account</List>
              <List>Wishlist</List>
              <List>Cart</List>
              <List>Checkout</List>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <Container>
              <Heading>Shipping</Heading>
              <List>New Products</List>
              <List>Top Sellers</List>
              <List>Suppliers</List>
              <List>Specials</List>
            </Container>
          </Grid>
        </Grid>
      </FooterContainer>
    </MainContainer>
  );
};

export default Footer;

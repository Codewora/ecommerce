import Layout from '../layout/productLayout';
import { Grid, Box } from '@mui/material';
import { ClothesImage } from '../image';
import { useScreenSize } from '../customHook';
import CustomerReview from './customerReview';
import { searchProductDetails } from '../dummyText';
import {
  PrimaryButton,
  ICONS,
  FormFieldsComponent,
  Slider
} from '../components';
import { FormFields } from '../constant';
import {
  ProductViewMainContainer,
  ProductViewContainer,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductDetailsContainer,
  ProductDetailContainer,
  SliderProduct,
  ProductRating,
  Image,
  SizeLable,
  Heading,
  Title,
  ColorStyled,
  TextContainer,
  ProductContainer
} from './styledComponent';
const { StarBorderIcon, StarHalfIcon, StarIcon } = ICONS;
const TextField = FormFieldsComponent[FormFields.TEXTFIELD];


const App = () => {
  const screen = useScreenSize();

  const slides: any = {
    xs: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  };
  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProductViewMainContainer>
            <ProductViewContainer>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
                  <Image src={ClothesImage} />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
                  <ProductDetailContainer>
                    <Box>
                      <ProductDetailsContainer>
                        <Box>
                          <ProductTitle>Dummy Product Name</ProductTitle>
                          <ProductPrice>$150</ProductPrice>
                        </Box>
                        <ProductRating>
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarHalfIcon />
                          <StarBorderIcon />
                        </ProductRating>
                      </ProductDetailsContainer>
                      <Box>
                        <ProductDescription>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </ProductDescription>
                      </Box>
                      <Box>
                        <ProductContainer>
                          <Title>Color</Title>
                          <TextContainer>
                            <ColorStyled backgroundColor='#434343' />
                            <ColorStyled backgroundColor='grey' />
                            <ColorStyled backgroundColor='whitesmoke' />
                          </TextContainer>
                        </ProductContainer>
                      </Box>
                      <Box>
                        <ProductContainer>
                          <Title>Size</Title>
                          <TextContainer>
                            <SizeLable>M</SizeLable>
                            <SizeLable>S</SizeLable>
                            <SizeLable>SL</SizeLable>
                            <SizeLable>XL</SizeLable>
                          </TextContainer>
                        </ProductContainer>
                      </Box>
                    </Box>
                    <Box>
                      <Slider
                        slidesToShow={slides[screen]}
                        slidesToScroll={slides[screen]}
                        showButton
                      >
                        {searchProductDetails.map((item, index) => (
                          <SliderProduct>
                            <Image src={ClothesImage} height='250px' />
                          </SliderProduct>
                        ))}
                      </Slider>
                    </Box>
                  </ProductDetailContainer>
                </Grid>
              </Grid>
            </ProductViewContainer>
          </ProductViewMainContainer>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProductViewMainContainer>
            <ProductViewContainer>
              <Heading>Customer Review</Heading>
              <CustomerReview />
              <CustomerReview />

              <Heading>Leave Your Review</Heading>

              <TextField
                label='Your review here...'
              />
              <PrimaryButton name='Submit Review'/>
            </ProductViewContainer>
          </ProductViewMainContainer>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default App;

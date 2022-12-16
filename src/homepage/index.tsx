
import {
  ShoeImage,
  PaggiaroImage,
  CoatImage,
  WalletImage,
  BohleImage,
  ClothesImage
} from '../image';
import { Image, ICONS, Slider } from '../components';
import {
  ImageContainer,
  LeftContainer,
  LeftInnerContainer,
  RightContainer,
  LoginContainer,
  IconContainer,
  Container,
  SocialMedia,
  FeatureProductContainer,
  ButtonStyled
} from './styledComponent';
import { useScreenSize } from '../customHook';
import LoginFrom from './loginForm';
import FeatureProducts from './featureProducts';
import PurchaseOnlineProducts from './purchaseOnline';
import ProductBanner from './banner';
import HomepageLayout from '../layout/homepageLayout';

const {   ImLinkedin2Icon, ImFacebookIcon, ImGooglePlusIcon, ImTwitterIcon } = ICONS;

const Homepage = () => {
  const screen = useScreenSize();
  
  return (
    <HomepageLayout>
      <Container>
        {
          !['xs', 'sm', 'md'].includes(screen) && (
            <SocialMedia>
          <IconContainer>
            <ImLinkedin2Icon />
          </IconContainer>
          <IconContainer>
            <ImTwitterIcon />
          </IconContainer>
          <IconContainer>
            <ImFacebookIcon />
          </IconContainer>
          <IconContainer>
            <ImGooglePlusIcon />
          </IconContainer>
            </SocialMedia>
          )
        }
        <ImageContainer>
          <LeftContainer>
            <LeftInnerContainer>
              <Image imageUrl={CoatImage} />
              <ButtonStyled>
                Buy Now
              </ButtonStyled>
            </LeftInnerContainer>
            <LeftInnerContainer>
              <Image imageUrl={WalletImage} />
              <ButtonStyled>
                Buy Now
              </ButtonStyled>
            </LeftInnerContainer>
          </LeftContainer>
          <RightContainer>
            <Slider slidesToScroll={1} slidesToShow={1} infinite dots>
              <Image imageUrl={ShoeImage} />
              <Image imageUrl={BohleImage} />
              <Image imageUrl={ClothesImage} />
              <Image imageUrl={PaggiaroImage} />
            </Slider>
          </RightContainer>
        </ImageContainer>
        {
          !['xs', 'sm', 'md'].includes(screen) && (
            <LoginContainer>
              <IconContainer>
                <LoginFrom />
              </IconContainer>
            </LoginContainer>
          )
        }
      </Container>
      <FeatureProductContainer>
        <FeatureProducts />
      </FeatureProductContainer>
        <ProductBanner />
      <PurchaseOnlineProducts />
    </HomepageLayout>
  );
};

export default Homepage;

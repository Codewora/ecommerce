import { ClothesImage } from '../../image';
import Image from '../../components/imageComponent';
import {
  ContainerStyled,
  BannerStyled,
  SaleStyled,
  ButtonStyled,
  DiscountTitleStyled
} from './styledComponent';

const Banner = () => {
  return (
    <BannerStyled>
      <ContainerStyled>
        <Image imageUrl={ClothesImage} />
        <SaleStyled>Sale</SaleStyled>
          <DiscountTitleStyled>
            Discount 50%
          </DiscountTitleStyled>
           <ButtonStyled>
          Buy Now
        </ButtonStyled>
      </ContainerStyled>
    </BannerStyled>
  );
};

export default Banner;

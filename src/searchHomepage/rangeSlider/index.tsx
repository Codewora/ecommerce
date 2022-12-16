import { useState } from 'react';
import {
  MainContainer,
  Container,
  PriceContainer,
  HeaderContainer,
  HeadingStyled,
  PriceText,
  PriceSliderContainer,
  PriceSlider
} from './styledComponent';

const PriceRangeSlider = () => {
  const minDistance = 10;
  const [value1, setValue1] = useState<number[]>([50, 500]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <HeadingStyled>Product Price Range</HeadingStyled>
      </HeaderContainer>
      <Container>
          <PriceContainer>
            <PriceText>Price</PriceText>
            <p>
              {value1[0]}$ - {value1[1]}$
            </p>
          </PriceContainer>
          <PriceSliderContainer>
          <PriceSlider
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay='auto'
            min={50}
            step={200}
            max={3000}
            disableSwap
          />
          </PriceSliderContainer>
      </Container>
    </MainContainer>
  );
};

export default PriceRangeSlider;

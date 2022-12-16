import { useState } from 'react';
import {
  ImageContainer,
  Image,
  SkeletonStyled,
  ImageContainerStyled
} from './styledComponent';

type Props = {
  imageUrl: string;
};

const ImageComponent = ({ imageUrl }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const onLoadHanler = () => {
    setIsLoading(false);
  };
  return (
    <ImageContainer>
      <ImageContainerStyled isLoading={isLoading}>
      <Image src={imageUrl} onLoad={onLoadHanler} />
      </ImageContainerStyled>
      {isLoading && <SkeletonStyled />}
    </ImageContainer>
  );
};

export default ImageComponent;

import { useState , ReactNode} from 'react';
import { ClothesImage } from '../../image';
import {
  Container,
  ImageContainer,
  Image
} from './styledComponent';
import Footer from '../footer';
import Header from '../header';
import Drawer from '../sidemenu';

type Props = {
  children :  JSX.Element | JSX.Element[] | ReactNode,
}

const HomepageLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer
        isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
      <Header
        setIsOpen={setIsOpen}
      />
      <Container>
      <ImageContainer>
        <Image src={ClothesImage} />
      </ImageContainer>
      {children}
      <Footer />
      </Container>
    </>
  );
};

export default HomepageLayout;

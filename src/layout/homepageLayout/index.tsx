import { useState } from 'react';
import Footer from '../footer';
import Header from '../header';
import Drawer from '../sidemenu';
import { Container } from './styledComponent';

const HomepageLayout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
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
      {children}
      <Footer />
      </Container>
    </>
  );
};

export default HomepageLayout;

import { useState, SyntheticEvent } from 'react';
import BestSeller from './bestSeller';
import MostView from './mostView';
import NewProduct from './newProduct';
import { useNavigate } from 'react-router-dom';
import { routeName } from '../../constant';
import {
  Container,
  TabsStyled,
  Link,
  TabStyled
} from './styledComponent';

const PurchaseOnlineProducts = () => {
  const [value, setValue] = useState('1');
  const navigation = useNavigate();

  const activeTab: any = {
    1: <BestSeller />,
    2: <MostView />,
    3: <NewProduct />,
  };

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Container>
        <TabsStyled
          value={value}
          onChange={handleChange}
          textColor='secondary'
          indicatorColor='secondary'
          aria-label='secondary tabs example'
        >
          <TabStyled value='1' label='Best Seller' />
          <TabStyled value='2' label='Most View' />
          <TabStyled value='3' label='New Products' />
        </TabsStyled>
        {activeTab[value]}
      <Link onClick={() => navigation(routeName.SEARCHPRODUCT)}>View All</Link>
      </Container>
    </>
  );
};

export default PurchaseOnlineProducts;

import { useState, SyntheticEvent } from 'react';
import { Typography, Box } from '@mui/material';
import CheckoutCart from './checkout';
import ShoopingCart from './shoppingCart';
import WishListCart from './wishlist';
import HomepageLayout from '../layout/productLayout';
import {
  CustomTabs,
  CustomTab,
  Container
} from './styledComponent';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const ProductDetails = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <HomepageLayout>
      <Container>
        <CustomTabs  variant='scrollable' value={value} onChange={handleChange}>
          <CustomTab label='Shopping' />
          <CustomTab label='WishList' />
          <CustomTab label='Checkout' />
        </CustomTabs>
        <TabPanel value={value} index={0}>
          <ShoopingCart />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WishListCart />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CheckoutCart />
        </TabPanel>
      </Container>
    </HomepageLayout>
  );
};

export default ProductDetails;

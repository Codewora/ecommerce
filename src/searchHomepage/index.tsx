import {Grid } from '@mui/material';
import { ProductView } from '../components';
import CategoryCard from './categories';
import PriceRangeSlider from './rangeSlider';
import { productDetails, categoryDetails } from '../dummyText';
import { 
  FilterContainer,
  Container,
  ProductContainer,
} from './styledComponent';
import Layout from '../layout/productLayout';

const App = () => {
  return (
    <Layout>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={7} lg={8} xl={9}>
            <ProductContainer>
              {productDetails.map((item, index) => (
                <ProductView details={item} key={index} />
              ))}
            </ProductContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
            <FilterContainer>
              <CategoryCard categoryDetails={categoryDetails} />
              <PriceRangeSlider />
            </FilterContainer>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default App;

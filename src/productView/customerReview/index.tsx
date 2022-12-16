import { Box } from '@mui/material';
import { UserImage } from '../../image';
import {
  Container,
  UserDetailsContainer,
  CustomerName,
  ReviewDate,
  ReviewComment,
  Image,
  ImageContainer
} from './styledComponent';

const CustomerReview = () => {
  return (
    <Container>
      <ImageContainer>
      <Image src={UserImage} />
      </ImageContainer>
      <UserDetailsContainer>
        <Box>
        <CustomerName>Dummy User Name</CustomerName>
        <ReviewDate>27 Jun, 2021 at 2:30pm</ReviewDate>
        </Box>
        <Box>
          <ReviewComment>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </ReviewComment>
        </Box>
      </UserDetailsContainer>
    </Container>
  );
};

export default CustomerReview;

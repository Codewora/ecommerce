import {
 List, ListItem, ListItemButton
} from '@mui/material';
import {
  MainContainer,
  Container,
  CustomListText,
  ListItemTextHeading,
  HeadingStyled,
  HeaderContainer,
  CustomListButton
} from './styledComponent';


const CategorySection = ({ categoryDetails }: any) => {
  return (
    <MainContainer>
      <HeaderContainer>
      <HeadingStyled>Category</HeadingStyled>
      </HeaderContainer>
      <Container>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          aria-label='contacts'
        >
          {categoryDetails.map(({ name, children }: any) => (
            <>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemTextHeading primary={name} />
                </ListItemButton>
              </ListItem>
              {children.map((subList: any) => (
                <ListItem disablePadding>
                  <CustomListButton>
                    <CustomListText inset primary={subList} />
                  </CustomListButton>
                </ListItem>
              ))}
            </>
          ))}
        </List>
      </Container>
    </MainContainer>
  );
};

export default CategorySection;

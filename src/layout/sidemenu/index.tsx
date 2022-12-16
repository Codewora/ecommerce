import { Fragment } from 'react';
import {
  List,
  ListItemButton,
  Drawer
} from '@mui/material';
import {Logo} from '../../image';
import { sideMenuDetails } from './sidemenuList';
import {
  Container,
  HeaderIcon,
  SubHeadingStyled,
  ListItemIconStyled,
  ListItemTextStyled
} from './styledComponent';


const CustomDrawer = ({ isOpen, setIsOpen }: any) => {

  return (
    <Fragment>
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
      <HeaderIcon src={Logo} onClick={() => setIsOpen(false) } />
        <Container>
          {sideMenuDetails.map(({ subHeading, children }) => (
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  subHeading && (
                    <SubHeadingStyled id='nested-list-subheader'>
                      {subHeading}
                    </SubHeadingStyled>
                  )
                }
              >
                {children.map(({ name, icon }) => (
                  <ListItemButton>
                    {icon && <ListItemIconStyled>{icon}</ListItemIconStyled>}
                    <ListItemTextStyled primary={name} />
                  </ListItemButton>
                ))}
              </List>
            ))}
        </Container>
      </Drawer>
    </Fragment>
  );
};

export default CustomDrawer;

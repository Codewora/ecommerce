import {
  ListSubheader,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
} from '@mui/material';

const Container = styled(Box)(() => ({
  padding: '20px',
  minWidth: '300px',
}));

const HeaderIcon = styled('img')(() => ({
  height: '80px',
  cursor: 'pointer'
}));

const SubHeadingStyled = styled(ListSubheader)(() => ({
  color: '#3AAFA9',
  fontWeight: 900
}));

const ListItemIconStyled = styled(ListItemIcon)(() => ({
  color: '#737373',
  'svg': {
    fontSize: '25px'
  }
}));

const ListItemTextStyled = styled(ListItemText)(() => ({
  color: '#737373',

  'span': {
    fontSize: '17px'
  }

}));

export {
  Container,
  HeaderIcon,
  SubHeadingStyled,
  ListItemIconStyled,
  ListItemTextStyled
}
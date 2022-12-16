import { useState } from 'react';
import {
  Popover,
  ICONS,
  PrimaryButton,
  FormFieldsComponent,
} from '../../components';
import { FormFields } from '../../constant';
import {
  Container,
  LoginTitle,
  IconsContainer
} from './styledComponent';
const { ImUserIcon } = ICONS;
const TextFieldComponent = FormFieldsComponent[FormFields.TEXTFIELD];

const LoginForm = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <IconsContainer aria-describedby={id} onClick={handleClick}>
        <ImUserIcon />
      </IconsContainer>
      <Popover id={id} open={open} anchorEl={anchorEl}>
        <Container>
          <LoginTitle>Customer Login</LoginTitle>
          <TextFieldComponent label='Username' />
          <TextFieldComponent label='Password' />
          <PrimaryButton name='LOGIN' />
        </Container>
      </Popover>
    </div>
  );
};

export default LoginForm;

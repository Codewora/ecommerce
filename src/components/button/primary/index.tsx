import { ICONS } from '../../icons';
import { ButtonStyled } from './styledComponent';

type Props = {
  name: string,
  iconName?: string
}


const PrimaryButton = ({name, iconName}: Props) => {
  return (
      <ButtonStyled variant="outlined" endIcon={iconName && ICONS[iconName]}>
        {name}
      </ButtonStyled>
  );
}

export default PrimaryButton;
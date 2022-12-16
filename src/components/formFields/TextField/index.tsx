import { TextFieldStyled } from './styledComponent';

type Props = {
  label: string
}

const TextFieldComponent = ({ label }: Props) => {
  return <TextFieldStyled id="filled-basic" label={label} variant="filled" fullWidth/>
}

export default TextFieldComponent;
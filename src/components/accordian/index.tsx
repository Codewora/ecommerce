import { useState , ReactNode} from 'react';
import {
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';
import {
  AccordianTitle,
  AccordianStyled
} from './styledComponent';

type Props = {
  title: string,
  children:JSX.Element | JSX.Element[] | ReactNode
}

const Accordian = ({ title, children }: Props) => {
  const [expanded, setExpanded] = useState<Boolean>(false);

  const handleChange =
    () => {
      setExpanded(!expanded);
    };

  return (
    <AccordianStyled
      onChange={handleChange}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <AccordianTitle>{title}</AccordianTitle>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordianStyled>
  );
};

export default Accordian;

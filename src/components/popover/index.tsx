import { ReactNode } from 'react';
import { Popper } from '@mui/material';

type Props = {
  children:JSX.Element | JSX.Element[] | ReactNode,
  id: string | undefined,
  open: boolean,
  anchorEl: null | HTMLElement
}

const Popover = ({children, id, open, anchorEl}: Props) => {

  return (
    <div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="left"
      >
        {children}
      </Popper>
    </div>
  );
}

export default Popover;
  
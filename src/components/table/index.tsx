import {
  TableRow,
  TableHead,
  TableBody,
  Table
} from '@mui/material';
import  {
  TableCellStyled,
  TableCellRowStyled,
  TableContainerStyled
} from './styledComponent';

type Props = {
  header: string[],
  row: any[] 
}

const ProductTable = ({ header, row }: Props) => {
  return (
    <TableContainerStyled>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              header.map((header: any) => (
                <TableCellStyled key={header}>{header}</TableCellStyled>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((rowDetails:any, index:number) => (
            <TableRow
              key={index}
            >
              {
                Object.keys(rowDetails).map((item: any, index: any) => (
                <TableCellRowStyled component="th" scope="row" key={index + header[index]}>
                  {rowDetails[header[index]]}
                </TableCellRowStyled>
                ))
              }
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerStyled>
  );
}

export default ProductTable;
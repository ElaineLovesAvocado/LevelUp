import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'Date', label: 'Date', minWidth: 80 },
    { id: 'Jack', label: 'Jack', minWidth: 100, align: 'right' },
    { id: 'TJin', label: 'TJin', minWidth: 100, align: 'right' },
    { id: 'JoeS', label: 'JoeS', minWidth: 100, align: 'right' },
    { id: 'JoeZ', label: 'JoeZ', minWidth: 100, align: 'right' },
    { id: 'Chloe', label: 'Chloe', minWidth: 100, align: 'right' },
    { id: 'Elaine', label: 'Elaine', minWidth: 100, align: 'right' },
    { id: 'Linyi', label: 'Linyi', minWidth: 100, align: 'right' },
    { id: 'FirstPlace', label: 'FirstPlace', minWidth: 170, align: 'right' },
    { id: 'SecondPlace', label: 'SecondPlace', minWidth: 170, align: 'right' },
  ];
  
function createData(Date, Jack,	TJin,	JoeS,	JoeZ,	Chloe,	Elaine,	Linyi,  FirstPlace,	 SecondPlace,) {
      return {Date, Jack,	TJin,	JoeS,	JoeZ,	Chloe,	Elaine,	Linyi,	FirstPlace, SecondPlace};
}


const rows = [
    createData( '1-1-2024', '8', 'A+🌟', 'NA','9', 'A+🌟', 'A','7','TJ,Chloe', 'Elaine','NA','NA'),
    createData('1-1-2024', '8', 'A🌟', '8', '10+', '10', '9', '3', 'TJ', 'JoeZ', 'NA', 'NA'),
    createData('1-1-2024', '6', '6', 'A🌟', '9', 'J', 'K', '10', 'JoeS', 'Elaine', 'NA', 'NA'),
    createData('1-5-2024', 'A🌟', 'K', 'A+', 'A🌟', '10', 'A', 'J', 'Jack,JoeZ', 'JoeS', 'NA', 'NA'),
    createData('1-5-2024', '10', '10', '8', '4', 'A🌟', '4', 'Q', 'Chloe', 'Linyi', 'NA', 'NA'),
    createData('1-26-2024', '7', 'Q', '3+🌟', '8', '10', '8', 'K', 'JoeS', 'Linyi', 'NA', 'NA'),
    createData('1-26-2024', '5', '7', 'J', '4', '2+🌟', '2', '10', 'Chole', 'JoeS', 'NA', 'NA')
  ];

const Records = () => {

 const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table  stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.Date}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Records;

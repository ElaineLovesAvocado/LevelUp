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
    { id: 'FirstPlace', label: 'No.1', minWidth: 170, align: 'right' },
    { id: 'SecondPlace', label: 'No.2', minWidth: 170, align: 'right' },
  ];
  
function createData(Date, Jack,	TJin,	JoeS,	JoeZ,	Chloe,	Elaine,	Linyi,  FirstPlace,	 SecondPlace,) {
      return {Date, Jack,	TJin,	JoeS,	JoeZ,	Chloe,	Elaine,	Linyi,	FirstPlace, SecondPlace};
}


const rows = [
    createData( '3-8-2024', 'Q', 'Q', 'NA','2+🌟', 'NA', 'A+🌟','Q','Joe', 'Elaine','NA','NA'),
    createData('3-15-2024', 'K', 'K', '2+🌟', 'A', '5', '9', 'A', 'JoeS', 'JoeZ, Linyi', 'NA', 'NA' ),
    createData('3-15-2024', '8', '10🌟', '5', '7', '3', '9', '3', 'TJ', 'Elaine', 'NA', 'NA'),
    createData('3-23-2024', '2+', 'A', 'J', 'A', '5', '4', 'J', 'Jack', 'TJ,JoeZ', 'NA', 'NA'),
    createData('3-23-2024', 'Q', 'K', '7', '6', 'A', '6', '9', 'Chloe', 'TJ', 'NA', 'NA')
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

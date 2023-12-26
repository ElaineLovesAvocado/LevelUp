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
  { id: 'Date', label: 'Date', minWidth: 100 },
  { id: 'Jack', label: 'Jack', minWidth: 100, align: 'right' },
  { id: 'TJin', label: 'TJin', minWidth: 100, align: 'right' },
  { id: 'JoeS', label: 'JoeS', minWidth: 100, align: 'right' },
  { id: 'JoeZ', label: 'JoeZ', minWidth: 100, align: 'right' },
  { id: 'Chole', label: 'Chole', minWidth: 100, align: 'right' },
  { id: 'Elaine', label: 'Elaine', minWidth: 100, align: 'right' },
  { id: 'Linyi', label: 'Linyi', minWidth: 100, align: 'right' },
  { id: 'FirstPlace', label: 'FirstPlace', minWidth: 170, align: 'right' },
  { id: 'SecondPlace', label: 'SecondPlace', minWidth: 170, align: 'right' },

];

function createData(Date, Jack,	TJin,	JoeS,	JoeZ,	Chole,	Elaine,	Linyi,	FirstPlace,	 SecondPlace) {
    return {Date, Jack,	TJin,	JoeS,	JoeZ,	Chole,	Elaine,	Linyi,	FirstPlace,	 SecondPlace};
  }

const rows = [
    createData('2023-12-08', 'A',	'A',	'3 (2nd Round)',	'Q',	'3(2nd Round) 🌟',	'A',	'Q',	'Chole',	'Joe Sun'),
    createData('2023-12-08', '10?',	'10?',	'10?',	'10?',	'A (大光) 🌟', '10?',	'10?',	'Chole',	'N/A'),
    createData('2023-12-15', '9',	'2(2nd Round) 🌟',	'K',	'10',	'10', '6',	'7',	'TJ',	'Joe Sun'),
    createData('2023-12-15',	'Q',	'5',	'A',	'9',	'2(2nd Round) 🌟',	'Q',	'2',	'Chole',	'Joe Sun'),
    createData('2023-12-15',	'Q',	'J',	'2 (2nd Round)🌟',	'J',	'K',	'A',	'Q',			'Joe Sun',	'Elaine'),
    createData('2023-12-22',	'7',	'3 (2nd round)🌟',	'K',	'A',	'K',	'A',	'A',	'TJ',	'Joe Zhou, Elaine, Linyi'),
    createData('2023-12-22',	'10',	'J',	'3(2nd round) 🌟',	'Q',	'9',	'A',	'Q',	'Joe Sun',	'Elaine' ),
  ];

export default function StickyHeadTable() {
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
    <Paper sx={{ width: '50%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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
}

import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Jack</TableCell>
            <TableCell align="right">TJin</TableCell>
            <TableCell align="right">Joe Sun</TableCell>
            <TableCell align="right">Joe Zhou</TableCell>
            <TableCell align="right">Chole</TableCell>
            <TableCell align="right">Elaine</TableCell>
            <TableCell align="right">Linyi</TableCell>
            <TableCell align="right">First Place</TableCell>
            <TableCell align="right">Second Place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Date}
              </TableCell>
              <TableCell align="right">{row.Jack}</TableCell>
              <TableCell align="right">{row.TJin}</TableCell>
              <TableCell align="right">{row.JoeS}</TableCell>
              <TableCell align="right">{row.JoeZ}</TableCell>
              <TableCell align="right">{row.Chole}</TableCell>
              <TableCell align="right">{row.Elaine}</TableCell>
              <TableCell align="right">{row.Linyi}</TableCell>
              <TableCell align="right">{row.FirstPlace}</TableCell>
              <TableCell align="right">{row.SecondPlace}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
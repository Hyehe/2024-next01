import React from 'react';
import './detail.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

function Page({item}) {
  return (
    <>
      <h2 className=''>GuestBookDetail</h2>
      {/* 작성자 gb_name, 제목 gb_subject, 
      내용 gb_content, email gb_email, 비번 gb_pw */}
      <TableContainer component={Paper} className='table-container'>
        <Table className="custom-table">
          <TableBody>
              <TableRow>
                <TableCell className="table-cell">{item.gb_idx}</TableCell>
                <TableCell className="table-cell">{item.gb_name}</TableCell>
                <TableCell className="table-cell">{item.gb_subject}</TableCell>
                <TableCell className="table-cell">{item.gb_content}</TableCell>
                <TableCell className="table-cell">{item.gb_email}</TableCell>
                <TableCell className="table-cell">{item.gb_pw}</TableCell>
                <TableCell className="table-cell">{item.gb_regdate.substring(0,10)}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Page;
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';

const data = [
  { username: 'USERXYAHOO', nama: 'TESTUSER USERX', email: 'USERX@YAHOO.COM', aplikasi: 'Primary Care - BPJS', jenisPengguna: 'Eksternal' },
  { username: 'bia.icare', nama: 'KLINIK PT BIO INTI AGRINDO', email: 'biacare@gmail.com', aplikasi: 'Primary Care - BPJS, Virtual Claim (VClaim)', jenisPengguna: 'Eksternal' },
  { username: 'bia.pcare', nama: 'BIO INTI AGRINDO', email: 'bia@gmail.com', aplikasi: 'Primary Care - BPJS', jenisPengguna: 'Eksternal' },
  { username: 'bidan2', nama: 'bidan mobile', email: 'asdasjdljkasjdljpop@gmail.com', aplikasi: '', jenisPengguna: 'Eksternal' },
  { username: 'klinik.kinna', nama: 'clinic kinna', email: 'klinik.kinna@gmail.com', aplikasi: '', jenisPengguna: 'Eksternal' },
  { username: 'useretes.agats', nama: 'useretes agats', email: 'dummy19@gmail.com', aplikasi: 'Primary Care - BPJS, Paperless Voucher', jenisPengguna: 'Eksternal' },
  { username: '0001384260478', nama: 'kxmiur', email: 'indrasaputrawardhanaxox@gmail.com', aplikasi: 'Paperless Voucher, PESONA (MOBILE)', jenisPengguna: 'Eksternal' },
  { username: 'useretes.rsrbp', nama: 'useretes rsbp', email: 'testersbp@gmail.com', aplikasi: '', jenisPengguna: 'Eksternal' },
  { username: 'xxzz', nama: 'xxx zz', email: 'xxzz@gmail.com', aplikasi: 'Primary Care - BPJS', jenisPengguna: 'Eksternal' },
  { username: 'useretes.gudang', nama: 'gudang arang', email: 'dummy09@gmail.com', aplikasi: 'Pelayanan KC Sosial', jenisPengguna: 'Eksternal' },
];

export function OverviewAnalyticsView() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard Pengguna
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        + Tambah Data
      </Button>
      <Button variant="outlined" color="success" sx={{ ml: 2, mb: 2 }}>
        Export Excel
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>UserName</strong></TableCell>
              <TableCell><strong>Nama</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Aplikasi</strong></TableCell>
              <TableCell><strong>Jenis Pengguna</strong></TableCell>
              <TableCell align="center"><strong>Aksi</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.aplikasi}</TableCell>
                <TableCell>{row.jenisPengguna}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="success" size="small">
                    ✔
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

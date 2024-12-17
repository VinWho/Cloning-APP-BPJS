import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box, Menu, MenuItem, ButtonGroup, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem as SelectItem, InputLabel, FormControl, FormLabel } from '@mui/material';
import { useState, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<null | typeof data[0]>(null);
  const [openDialog, setOpenDialog] = useState(false); // State for dialog
  const [jenisPengguna, setJenisPengguna] = useState('');
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');

  const handleMenuOpen = (event: MouseEvent<HTMLElement>, row: typeof data[0]) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleExportExcel = () => {
    setOpenPasswordDialog(true);
  };

  const handlePasswordClose = () => {
    setOpenPasswordDialog(false);
    setPassword('');
  };

  const handlePasswordSubmit = () => {
    console.log('Export Excel dengan password:', password);
    handlePasswordClose();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard Pengguna
      </Typography>

      {/* Separated Buttons */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleDialogOpen}>
          + Tambah Data
        </Button>
        <Button variant="contained" color="success" onClick={handleExportExcel}>
          Export Excel
        </Button>
      </Box>

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
                  <ButtonGroup variant="contained" size="small">
                    <Button color="success">
                      <FontAwesomeIcon icon={faScrewdriverWrench} />
                    </Button>
                    <Button color="error" onClick={(event) => handleMenuOpen(event, row)}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Status Aktif</MenuItem>
        <MenuItem onClick={handleMenuClose}>Hak Akses</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mutasi</MenuItem>
        <MenuItem onClick={handleMenuClose}>Ubah Profil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Reset Password</MenuItem>
      </Menu>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>Tambah Pengguna</DialogTitle>
        <DialogContent sx={{ padding: 3 }}>
          <Box display="flex" flexDirection="column" gap={2} sx={{ width: '100%' }}>
            <Box display="flex" alignItems="center">
              <FormLabel sx={{ width: '30%' }}>Jenis Pengguna</FormLabel>
              <Select
                value={jenisPengguna}
                onChange={(e) => setJenisPengguna(e.target.value)}
                fullWidth
              >
                <SelectItem value="">-- SILAKAN PILIH JENIS PENGGUNA --</SelectItem>
                <SelectItem value="Internal">Internal</SelectItem>
                <SelectItem value="Eksternal">Eksternal</SelectItem>
              </Select>
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabel sx={{ width: '30%' }}>Nama Depan</FormLabel>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabel sx={{ width: '30%' }}>Nama Belakang</FormLabel>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabel sx={{ width: '30%' }}>Email</FormLabel>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabel sx={{ width: '30%' }}>Username</FormLabel>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabel sx={{ width: '30%' }}>Nomor Kartu</FormLabel>
              <TextField fullWidth variant="outlined" />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabel sx={{ width: '30%' }}>Password</FormLabel>
              <TextField fullWidth type="password" variant="outlined" />
            </Box>
            <Box display="flex" alignItems="center">
              <FormLabel sx={{ width: '30%' }}>Konfirmasi Password</FormLabel>
              <TextField fullWidth type="password" variant="outlined" />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="error">
            Tutup
          </Button>
          <Button color="success" variant="contained">
            Simpan
          </Button>
        </DialogActions>
      </Dialog>

      {/* Password Dialog */}
      <Dialog open={openPasswordDialog} onClose={handlePasswordClose}>
        <DialogTitle>Password File</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            (min 8 karakter, min 1 uppercase, min 1 lowercase, min 1 angka, min 1 karakter khusus)
          </Typography>
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePasswordClose} color="error">
            Close
          </Button>
          <Button onClick={handlePasswordSubmit} color="success" variant="contained">
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

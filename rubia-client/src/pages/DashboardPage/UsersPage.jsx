import React, { useState, useMemo } from 'react';
import { 
  Box, Typography, Paper, Button, Stack, Dialog, DialogTitle, DialogContent, 
  TextField, MenuItem, FormControlLabel, Switch, DialogActions, Chip, Select, 
  InputAdornment, IconButton 
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import usersSeed from '../../data/users.json?raw'; 

const roles = ['admin', 'trainer', 'professor'];
const genders = ['male', 'female', 'other'];
const blankForm = { firstName: '', lastName: '', age: '', gender: '', contactNumber: '', email: '', role: '', username: '', password: '', address: '', isActive: true };

function UsersPage() {
  const [users, setUsers] = useState(JSON.parse(usersSeed));
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [showPassword, setShowPassword] = useState(false);
  
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = useMemo(() => {
    return users.filter(u => {
      const matchesSearch = [u.firstName, u.lastName, u.email, u.username].some(val => val?.toLowerCase().includes(search.toLowerCase()));
      const matchesRole = filterRole === 'all' || u.role === filterRole;
      const matchesStatus = filterStatus === 'all' || (filterStatus === 'active' ? u.isActive : !u.isActive);
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, filterRole, filterStatus]);

  const openModal = (user = null) => {
    setModal({ open: true, id: user?.id || null });
    setForm(user ? { ...user } : { ...blankForm });
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 8) return alert('Password must be at least 8 characters.');
    if (!/^\d{11}$/.test(form.contactNumber)) return alert('Contact number must be exactly 11 digits.');
    if (isNaN(form.age)) return alert('Age must be a number.');
    if (/\s/.test(form.username)) return alert('Username must not contain spaces.');

    setUsers(prev => modal.id 
      ? prev.map(u => u.id === modal.id ? { ...form, id: modal.id } : u)
      : [...prev, { ...form, id: prev.length + 1 }]
    );
    closeModal();
  };

  const toggleStatus = (id) => setUsers(prev => prev.map(u => u.id === id ? { ...u, isActive: !u.isActive } : u));

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First', flex: 0.8 },
    { field: 'lastName', headerName: 'Last', flex: 0.8 },
    { field: 'username', headerName: 'Username', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1.2 },
    { field: 'contactNumber', headerName: 'Contact', flex: 1 },
    { field: 'age', headerName: 'Age', width: 60 },
    { field: 'gender', headerName: 'Gender', width: 90 },
    { field: 'role', headerName: 'Role', width: 100 },
    { field: 'isActive', headerName: 'Status', width: 100, renderCell: (p) => (
        <Chip size="small" label={p.value ? 'Active' : 'Inactive'} color={p.value ? 'success' : 'default'} />
    )},
    { field: 'actions', headerName: 'Actions', width: 200, renderCell: (p) => (
        <Stack direction="row" spacing={1}>
            <Button size="small" variant="outlined" onClick={() => openModal(p.row)}>Edit</Button>
            <Button size="small" variant="contained" color={p.row.isActive ? 'warning' : 'success'} onClick={() => toggleStatus(p.row.id)}>
                {p.row.isActive ? 'Disable' : 'Activate'}
            </Button>
        </Stack>
    )}
  ];

  return (
    <Box sx={{ p: 3, bgcolor: '#f0f0f0', minHeight: '100vh' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase' }}>
          USER <span style={{ color: '#cc0000' }}>MANAGEMENT</span>
        </Typography>
       </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 3 }}>
        <TextField fullWidth label="Search (Name, Email, User)" onChange={(e) => setSearch(e.target.value)} sx={{ bgcolor: '#fff', borderRadius: 2 }} />
        <Select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} sx={{ minWidth: 150, bgcolor: '#fff', borderRadius: 2 }}><MenuItem value="all">All Roles</MenuItem>{roles.map(r => <MenuItem key={r} value={r}>{r}</MenuItem>)}</Select>
        <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} sx={{ minWidth: 150, bgcolor: '#fff', borderRadius: 2 }}><MenuItem value="all">All Status</MenuItem><MenuItem value="active">Active</MenuItem><MenuItem value="inactive">Inactive</MenuItem></Select>
        <Button variant="contained" onClick={() => openModal()} sx={{ minWidth: 150, bgcolor: '#cc0000', boxShadow: '3px 3px 0px #000', '&:hover': { bgcolor: '#a30000' } }}>Add User</Button>
      </Stack>

      <Paper sx={{ height: 500, width: '100%', borderRadius: 2, border: '2px solid #1A1A1A', boxShadow: '4px 4px 0px #000', overflow: 'hidden' }}>
        <DataGrid rows={filteredUsers} columns={columns} disableRowSelectionOnClick />
      </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <DialogTitle sx={{ fontWeight: 900 }}>{modal.id ? 'EDIT USER' : 'ADD NEW USER'}</DialogTitle>
          <DialogContent>
            <TextField fullWidth margin="dense" label="First Name" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} required />
            <TextField fullWidth margin="dense" label="Last Name" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} required />
            <TextField fullWidth margin="dense" label="Username" value={form.username} onChange={e => setForm({...form, username: e.target.value})} required />
            <TextField fullWidth margin="dense" label="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
            <TextField fullWidth margin="dense" label="Contact Number" value={form.contactNumber} onChange={e => setForm({...form, contactNumber: e.target.value})} required />
            <TextField fullWidth margin="dense" label="Age" value={form.age} onChange={e => setForm({...form, age: e.target.value})} required />
            
            <TextField select fullWidth margin="dense" label="Gender" value={form.gender} onChange={e => setForm({...form, gender: e.target.value})}>
                {genders.map(g => <MenuItem key={g} value={g}>{g}</MenuItem>)}
            </TextField>
            <TextField select fullWidth margin="dense" label="Role" value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
                {roles.map(r => <MenuItem key={r} value={r}>{r}</MenuItem>)}
            </TextField>

            <TextField 
              fullWidth margin="dense" type={showPassword ? 'text' : 'password'} label="Password" value={form.password} 
              onChange={e => setForm({...form, password: e.target.value})} required 
              InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment> }}
            />
            
            <FormControlLabel 
              control={<Switch checked={form.isActive} onChange={e => setForm({...form, isActive: e.target.checked})} color="error" />} 
              label={form.isActive ? "Status: Active" : "Status: Inactive"} 
            />
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={closeModal} sx={{ color: '#1A1A1A' }}>Cancel</Button>
            <Button type="submit" variant="contained" sx={{ bgcolor: '#cc0000', '&:hover': { bgcolor: '#a30000' } }}>Save User</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default UsersPage;
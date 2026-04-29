import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// Sample Data updated with your Trainer list
export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    sortable: false,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

export const rows = [
  { id: 1, lastName: 'Tkhrst', firstName: 'Mickael', age: 20 },
  { id: 2, lastName: 'Tajiri', firstName: 'Satoshi', age: 31 },
  { id: 3, lastName: 'Ketchum', firstName: 'Ash', age: 12 },
  { id: 4, lastName: 'Oak', firstName: 'Gary ', age: 12 },
  { id: 5, lastName: 'Shirona ', firstName: 'Cynthia ', age: 35 },
  { id: 6, lastName: 'Juniper', firstName: 'Professor Aurea' , age: 40 },
  { id: 7, lastName: 'Williams', firstName: 'Misty', age: 13 },
  { id: 8, lastName: 'Stone', firstName: 'Steven', age: 25 },
  { id: 9, lastName: 'Harrison', firstName: 'Brock', age: 15 },
];

function UsersPage() {
  // --- Logic Calculations ---
  const totalUsers = rows.length;
  
  const validAges = rows.filter(r => r.age !== null).map(r => r.age);
  const averageAge = validAges.length > 0 
    ? (validAges.reduce((a, b) => a + b, 0) / validAges.length).toFixed(1) 
    : 0;

  return (
    <Box sx={{ p: 3, bgcolor: '#f0f0f0', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, mb: 4, fontStyle: 'italic', textTransform: 'uppercase' }}>
        USER <span style={{ color: '#cc0000' }}>MANAGEMENT</span>
      </Typography>

      {/* Summary Cards Section */}
      <Grid container spacing={3} sx={{ mb: 4 }} alignItems="stretch">
        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
          <Paper 
            sx={{ 
              p: 2, 
              flexGrow: 1, 
              borderRadius: 2, 
              border: '2px solid #1A1A1A', 
              boxShadow: '4px 4px 0px #000',
              bgcolor: '#fff'
            }}
          >
            <Typography color="textSecondary" variant="overline" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
              Total Registered
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#1A1A1A' }}>
              {totalUsers}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
          <Paper 
            sx={{ 
              p: 2, 
              flexGrow: 1, 
              borderRadius: 2, 
              border: '2px solid #1A1A1A', 
              boxShadow: '4px 4px 0px #000',
              bgcolor: '#fff'
            }}
          >
            <Typography color="textSecondary" variant="overline" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
              Average Age
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#cc0000' }}>
              {averageAge}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* DataGrid Section */}
      <Paper 
        sx={{ 
          height: 500, 
          width: '100%', 
          borderRadius: 2, 
          border: '2px solid #1A1A1A', 
          boxShadow: '4px 4px 0px #000',
          overflow: 'hidden',
          bgcolor: '#fff'
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ 
            pagination: { 
              paginationModel: { pageSize: 5 } 
            } 
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: 'none',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f8f9fa',
              borderBottom: '2px solid #1A1A1A',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #eee',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '2px solid #1A1A1A',
            }
          }}
        />
      </Paper>
    </Box>
  );
}

export default UsersPage;
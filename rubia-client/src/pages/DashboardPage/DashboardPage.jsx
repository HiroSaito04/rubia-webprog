import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const DATA_STORE = {
  // Table Rows
  userRows: [
    { id: 1, lastName: 'Tkhrst', firstName: 'Mickael', age: 20 },
    { id: 2, lastName: 'Tajiri', firstName: 'Satoshi', age: 31 },
    { id: 3, lastName: 'Ketchum', firstName: 'Ash', age: 12 },
    { id: 4, lastName: 'Oak', firstName: 'Gary ', age: 12 },
    { id: 5, lastName: 'Shirona ', firstName: 'Cynthia ', age: 35 },
    { id: 6, lastName: 'Juniper', firstName: 'Professor Aurea' , age: 40 },
    { id: 7, lastName: 'Williams', firstName: 'Misty', age: 13 },
    { id: 8, lastName: 'Stone', firstName: 'Steven', age: 25 },
    { id: 9, lastName: 'Harrison', firstName: 'Brock', age: 15 },
  ],

  userColumns: [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ],

  // Data from Reports
  monthlyVolume: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    posts: [4, 6, 12, 8, 5, 10]
  },
  userDistribution: [
    { id: 0, value: 10, label: 'Admins', color: '#1A1A1A' },
    { id: 1, value: 100, label: 'Trainers', color: '#ff1c1c' },
    { id: 2, value: 20, label: 'Professors', color: '#00E5FF' },
  ],

  // Map Config
  mapCoords: [14.604253, 120.994314], // NU Manila
  mapLabel: "RotomPC Command Center"
};

function DashboardPage() {
  
  // Logic Calculations
  const totalUsers = DATA_STORE.userRows.length;
  const usersWithAge = DATA_STORE.userRows.filter((r) => r.age !== null);
  const averageAge = usersWithAge.length > 0 
    ? (usersWithAge.reduce((sum, r) => sum + r.age, 0) / usersWithAge.length).toFixed(1)
    : 0;

  // Visual Styling Constants (Design preserved)
  const PAPER_STYLE = {
    p: 3,
    border: '2px solid #1A1A1A',
    boxShadow: '4px 4px 0px #000',
    borderRadius: 2,
    bgcolor: '#fff'
  };

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, fontStyle: 'italic', textTransform: 'uppercase' }}>
        DASHBOARD <span style={{ color: '#cc0000' }}>OVERVIEW</span>
      </Typography>

      {/* 1. Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={PAPER_STYLE}>
            <Typography variant="overline" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Total Users</Typography>
            <Typography variant="h3" sx={{ fontWeight: 900 }}>{totalUsers}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={PAPER_STYLE}>
            <Typography variant="overline" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>Avg. Age</Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#cc0000' }}>{averageAge}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* 2. Charts Section (Replaced Content, Preserved Design) */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={7}>
          <Paper sx={PAPER_STYLE}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>MONTHLY POSTS (2026)</Typography>
            <Box sx={{ width: '100%' }}>
              <BarChart
                xAxis={[{ scaleType: 'band', data: DATA_STORE.monthlyVolume.months }]}
                series={[{ data: DATA_STORE.monthlyVolume.posts, label: 'Articles', color: '#1A1A1A' }]}
                height={300}
                width={600}
                margin={{ top: 20, bottom: 30, left: 40, right: 10 }}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Paper sx={{ ...PAPER_STYLE, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', width: '100%', mb: 2 }}>USER ROLES</Typography>
            <PieChart
              series={[{
                data: DATA_STORE.userDistribution,
                innerRadius: 50,
                paddingAngle: 5,
              }]}
              height={300}
              width={600}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* 3. DataGrid Section */}
      <Paper sx={{ ...PAPER_STYLE, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>USER OVERVIEW</Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={DATA_STORE.userRows}
            columns={DATA_STORE.userColumns}
            initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{ border: 'none' }}
          />
        </Box>
      </Paper>

      {/* 4. Map Section */}
      <Paper sx={{ ...PAPER_STYLE, overflow: 'hidden' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>REGIONAL SCANNER (GPS)</Typography>
        <Box sx={{ height: 400, width: '100%', borderRadius: 1, overflow: 'hidden', border: '1px solid #ddd' }}>
          <MapContainer 
            center={DATA_STORE.mapCoords} 
            zoom={15} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={DATA_STORE.mapCoords}>
              <Popup>
                <strong>{DATA_STORE.mapLabel}</strong> <br /> 
                National University - Manila
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Paper>
    </Box>
  );
}

export default DashboardPage;
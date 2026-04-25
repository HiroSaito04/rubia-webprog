import React from 'react';
import { Typography, Stack, Box, Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

function ReportsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Analytics & Reports</Typography>
      
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>
        {/* Article Engagement Bar Chart */}
        <Paper sx={{ p: 2, flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>Article Views per Quarter</Typography>
          <BarChart
            series={[
              { data: [2400, 1398, 9800, 3908], label: 'Total Views' },
              { data: [4000, 3000, 2000, 2780], label: 'Shares' },
            ]}
            height={300}
            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
          />
        </Paper>

        {/* User Demographics Pie Chart */}
        <Paper sx={{ p: 2, minWidth: 400 }}>
          <Typography variant="h6" gutterBottom>User Distribution</Typography>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 35, label: 'Admins' },
                  { id: 1, value: 45, label: 'Editors' },
                  { id: 2, value: 20, label: 'Subscribers' },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </Paper>
      </Stack>
    </Box>
  );
}

export default ReportsPage;
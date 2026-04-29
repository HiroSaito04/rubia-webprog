import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const reportData = {
  quarterlyEngagement: {
    xAxis: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      { data: [2400, 1398, 9800, 3908], label: 'Total Views', color: '#ff1c1c' },
      { data: [4000, 3000, 2000, 2780], label: 'Shares', color: '#00E5FF' },
    ]
  },
  userDistribution: [
    { id: 0, value: 10, label: 'Admins', color: '#1A1A1A' },
    { id: 1, value: 100, label: 'Trainers', color: '#ff1c1c' },
    { id: 2, value: 20, label: 'Professors', color: '#00E5FF' },
  ],
  monthlyVolume: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    posts: [4, 6, 12, 8, 5, 10]
  },
  contentPerformance: {
    categories: ['Video', 'Articles', 'News', 'Guides'],
    values: [85, 45, 60, 95]
  }
};


function ReportsPage() {
  
  const CARD_HEIGHT = 400;

  // Added missing paperStyle constant to fix the error in the 4th Grid item
  const paperStyle = { 
    p: 3, 
    height: CARD_HEIGHT, 
    borderRadius: 2, 
    border: '2px solid #1A1A1A', 
    boxShadow: '4px 4px 0px #000',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#f0f0f0', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, mb: 4, fontStyle: 'italic' }}>
        ANALYTICS <span style={{ color: '#cc0000' }}>& REPORTS</span>
      </Typography>

      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Paper sx={paperStyle}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>QUARTERLY VIEWS</Typography>
            <BarChart
              series={reportData.quarterlyEngagement.series}
              height={300}
              width={600}
              xAxis={[{ data: reportData.quarterlyEngagement.xAxis, scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={paperStyle}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>USER ROLES</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <PieChart
                series={[{
                  data: reportData.userDistribution,
                  innerRadius: 60,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 4,
                }]}
                width={600}
                height={280}
                slotProps={{ legend: { direction: 'row', position: { vertical: 'bottom', horizontal: 'middle' }, padding: 0 } }}
              />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={paperStyle}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>MONTHLY POSTS (2026)</Typography>
            <BarChart
              xAxis={[{ scaleType: 'band', data: reportData.monthlyVolume.months }]}
              series={[{ data: reportData.monthlyVolume.posts, label: 'Articles', color: '#1A1A1A' }]}
              height={300}
              width={600}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={paperStyle}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>CONTENT SCORE</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2 }}>Average engagement rating per category</Typography>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
              <BarChart
                layout="horizontal"
                yAxis={[{ scaleType: 'band', data: reportData.contentPerformance.categories }]}
                series={[{ data: reportData.contentPerformance.values, color: '#cc0000', label: 'Content' }]}
                height={280}
                width={600}
                margin={{ top: 10, bottom: 30, left: 50, right: 20 }}
              />
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

export default ReportsPage;
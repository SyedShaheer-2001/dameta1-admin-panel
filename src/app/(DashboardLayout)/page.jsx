'use client';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import PageContainer from '@/app/components/container/PageContainer';
import { Card, CardContent, Typography } from '@mui/material';
export default function Dashboard() {

  return (
    <div style={{ 
  maxWidth: 900, 
  margin: 'auto', 
  display: 'flex', 
  justifyContent: 'flex-start' 
}}>
      
      <PageContainer title="Dashboard" description="this is Dashboard">
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ p: 3, minHeight: 160, }} elevation={4}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 800 }}>This is App.js</Typography>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 600, mt: 0.5 }}>on / Url</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </div>
  );
}

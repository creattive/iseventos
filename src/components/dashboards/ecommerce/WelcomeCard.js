import React from 'react';
import { Box, Button, Typography, Card, CardContent, Grid } from '@mui/material';

import welcomeImg from 'src/assets/images/backgrounds/welcome-bg2.png';

const WelcomeCard = () => {
  return (
    <Card elevation={0} sx={{ backgroundColor: (theme) => theme.palette.primary.light, py: 0 }}>
      <CardContent sx={{ py: 2 }}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item sm={6} display="flex" alignItems="center">
            <Box
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              <Typography variant="h5">Bem vindo de volta Wagner!</Typography>
              <Typography variant="subtitle2" my={2} color="textSecondary">
              Você ganhou 54% a mais que no mês passado, o que é ótimo.
              </Typography>
              <Button variant="contained" color="primary">
                Checar
              </Button>
            </Box>
          </Grid>
          <Grid item sm={5}>
            <Box mb="-90px">
              <img src={welcomeImg} alt={welcomeImg} width={'300px'} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;

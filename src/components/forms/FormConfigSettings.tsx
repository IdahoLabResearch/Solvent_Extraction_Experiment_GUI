// React
import * as React from 'react';

// MUI Components
import {
  Box,
  Grid,
  FormControl,
  Button,
  TextField,
} from '@mui/material';

function FormConfigSettings() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      deepLynxUrl: data.get('deepLynxUrl'),
      deepLynxContainerName: data.get('deepLynxContainerName'),
      dataSourceName: data.get('dataSourceName'),
      deepLynxAppId: data.get('deepLynxAppId'),
      appUrl: data.get('appUrl'),
      deepLynxPollInterval: data.get('deepLynxPollInterval'),
      infoOutdatedTime: data.get('infoOutdatedTime'),
    });
  };

  return (
    <Box
      component="form"
      sx={{
        flexGrow: 1,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="deepLynxUrl"
              label="Deep Lynx URL"
              name="deepLynxUrl"
              type="text"
              autoFocus
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="deepLynxContainerName"
              label="Deep Lynx Container Name"
              name="deepLynxContainerName"
              type="text"
              autoFocus
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="dataSourceName"
              label="Data Source Name"
              name="dataSourceName"
              type="text"
              autoFocus
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="deepLynxAppId"
              label="Deep Lynx App ID"
              name="deepLynxAppId"
              type="text"
              autoFocus
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="appUrl"
              label="App URL"
              name="appUrl"
              type="text"
              autoFocus
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="deepLynxPollInterval"
              label="Deep Lynx Poll Interval"
              name="deepLynxPollInterval"
              type="text"
              autoFocus
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="infoOutdatedTime"
              label="Info Outdated Time (seconds)"
              name="infoOutdatedTime"
              type="text"
              autoFocus
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Save Changes
      </Button>
    </Box>
  );
}

export default FormConfigSettings;

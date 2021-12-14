import React from 'react'
import {  Typography } from '@mui/material';
import {createTheme,ThemeProvider} from "@mui/material/styles"

const theme = createTheme();

theme.typography.h6 = {
    color: "green",
    fontFamily: [
        'Inter', 'sans-serif'
    ].join(","),
    fontSize:"14px"
}

export default function Test() {

    return (
    <ThemeProvider theme={theme}>
      <Typography variant="h6">Responsive h3</Typography>
    </ThemeProvider>
  );
}

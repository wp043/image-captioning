import React, { useContext } from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from './ThemeContext';
import { useTheme } from '@mui/material/styles';
import Upload from './components/Upload';

function App() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Container maxWidth="sm" sx={{ marginTop: '20px' }}>
      <IconButton
        onClick={colorMode.toggleColorMode}
        sx={{ float: 'right' }}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      <Typography variant="h3" align="center" gutterBottom>
        AI-Powered Image Captioning
      </Typography>
      <Upload />
    </Container>
  );
}

export default App;
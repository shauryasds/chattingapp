import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Chat from './components/chat';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" sx={{ backgroundColor: '#25D366' }}>
          <Toolbar>
            <Typography variant="h6" component="div">
              Chat App
            </Typography>
          </Toolbar>
        </AppBar>
        <Chat />
      </Container>
    </Provider>
  );
};

export default App;

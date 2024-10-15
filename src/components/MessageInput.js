import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const MessageInput = ({ value, onChange, onSend }) => {
  return (
    <Box display="flex">
      <TextField
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder="Type a message"
        fullWidth
      />
      <Button variant="contained" onClick={onSend} sx={{ marginLeft: 1 }}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;

import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const MessageList = ({ messages }) => {
  return (
    <Box
      sx={{
        height: '400px',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: 2,
        padding: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      {messages.map((msg, index) => (
        <Box key={msg.id}>
          <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
            <strong>{msg.user}</strong> <span style={{ color: 'gray' }}>({msg.timestamp})</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ padding: 1, borderRadius: '4px', backgroundColor: msg.user === 'User1' ? '#e1f5fe' : '#ffe0b2' }}>
            {msg.text}
          </Typography>
          {index < messages.length - 1 && <Divider sx={{ my: 1 }} />} {/* Add divider between messages */}
        </Box>
      ))}
    </Box>
  );
};

export default MessageList;

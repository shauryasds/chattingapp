import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, receiveMessage } from '../features/chatSlice';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Box, Container } from '@mui/material';

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [newMessage, setNewMessage] = useState('');
  const endOfMessagesRef = useRef(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      dispatch(sendMessage(newMessage));
      setNewMessage('');

      setTimeout(() => {
        const mockMessage = {
          id: Date.now() + 1,
          text: 'Hello from User2!',
          user: 'User2',
          timestamp: new Date().toLocaleTimeString(),
        };
        dispatch(receiveMessage(mockMessage));
      }, 2000);
    }
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Container sx={{ padding: 2, maxWidth: '600px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
      <MessageList messages={messages} />
      <div ref={endOfMessagesRef} /> 
      <MessageInput
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onSend={handleSend}
      />
    </Container>
  );
};

export default Chat;

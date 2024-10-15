import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    currentUser: 'User1',
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload,
        user: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;

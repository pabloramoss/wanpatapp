import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation, Message } from "../../types";

interface ChatState {
  data: Conversation[];
}

const initialState: ChatState = {
  data: []
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConversations: (state, action: PayloadAction<Conversation[]>) => {
      state.data = action.payload;
    },
    addMessage: (state, action: PayloadAction<{ conversationId: string; message: Message }>) => {
      const { conversationId, message } = action.payload;
      const conversation = state.data.find((c) => c.id === conversationId);
      if (conversation) {
        conversation.messages.push(message);
      }
    }      
  }
});

export const { setConversations, addMessage } = chatSlice.actions;

export default chatSlice.reducer;


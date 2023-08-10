import { RootState } from '../../redux/store';

export const getConversations = (state: RootState) => state.conversations.data;

export const getMessages = (state: RootState, conversationId: string) => {
  const conversation = state.conversations.data.find(
    (conversation) => conversation.id === conversationId,
  );

  return conversation?.messages || [];
};

export const filterConversationsByUser = (state: RootState, email: string) => {
  return state.conversations.data.filter((conversation) => conversation.userEmail === email);
};

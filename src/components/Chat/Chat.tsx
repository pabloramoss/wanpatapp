import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setConversations } from '../../redux/slices/conversationsSlice';
import messages from '../../data/messages.json';
import { getUser } from '../../lib/auth/selectors';
import { getConversations } from '../../lib/conversations/selectors';
import { Conversation } from '../../types';

import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatSidebar from './ChatSidebar';
import { Container } from './Chat.styles';

const Chat: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  useEffect(() => {
    const initialMessages: Conversation[] = messages.filter(
      (message) => message.userEmail !== user!.email,
    );

    dispatch(setConversations(initialMessages));
  }, [dispatch, user]);

  const userConversations = useAppSelector(getConversations);

  return (
    <Container>
      <div className="chat__sidebar">
        <ChatHeader />
        <ChatSidebar conversations={userConversations} />
      </div>
      <ChatMessage />
    </Container>
  );
};

export default Chat;

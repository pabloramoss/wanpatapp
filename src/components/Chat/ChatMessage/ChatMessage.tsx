import { useParams } from 'react-router-dom';
import React, { useEffect, useCallback, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Waypoint } from 'react-waypoint';
import { CircularProgress } from '@mui/material';

import { Message } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addMessage } from '../../../redux/slices/conversationsSlice';
import { createTimestampInSeconds, sendMessageToTelegram } from '../../../lib/conversations/utils';

import ChatMessageText from './ChatMessageText';
import ChatMessageInput from './ChatMessageInput';
import { Container } from './ChatMessage.styles';

const MESSAGES_TO_LOAD = 10;
const API_CALL_DELAY = 1000;

const ChatMessage: React.FC = () => {
  const [loadedMessages, setLoadedMessages] = useState(15);
  const [loadingMore, setLoadingMore] = useState(false);
  const [message, setMessage] = useState('');
  const { conversationId } = useParams();

  const currentConversation = useAppSelector((state) =>
    state.conversations.data.find((conversation) => conversation.id === conversationId!),
  );

  const dispatch = useAppDispatch();

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    const newMessage: Message = {
      id: uuidv4(),
      text: message,
      timestamp: createTimestampInSeconds(),
      owner: true,
    };

    setMessage('');

    dispatch(addMessage({ conversationId: conversationId!, message: newMessage }));
    sendMessageToTelegram(message);
  };

  const handleChange = (text: string) => setMessage(text);

  const chatConversationRef = useRef<HTMLDivElement>(null);

  const prevScrollPositionRef = useRef<number>(0); // Store the previous scroll position

  const loadMoreMessages = useCallback(() => {
    if (currentConversation && loadedMessages < currentConversation.messages.length) {
      setLoadingMore(true);

      // Simulate an API call to load more messages
      setTimeout(() => {
        setLoadedMessages((prevLoaded) => prevLoaded + MESSAGES_TO_LOAD);
        setLoadingMore(false);

        // After updating, restore the previous scroll position
        chatConversationRef.current!.scrollTop = prevScrollPositionRef.current;
      }, API_CALL_DELAY);
    }
  }, [currentConversation, loadedMessages]);

  const handleWaypointEnter = () => {
    if (!loadingMore) {
      prevScrollPositionRef.current = chatConversationRef.current!.scrollTop; // Store the previous scroll position
      loadMoreMessages();
    }
  };

  useEffect(() => {
    if (chatConversationRef.current) {
      // Calculate the new scroll position after rendering new messages
      const newScrollPosition =
        chatConversationRef.current.scrollHeight - prevScrollPositionRef.current;

      // Update the scroll position
      chatConversationRef.current.scrollTop = newScrollPosition;
    }
  }, [currentConversation]);

  return (
    <Container>
      {currentConversation && (
        <div className="chat-message__header">
          <p>{currentConversation.userName}</p>
        </div>
      )}
      <div ref={chatConversationRef} className="chat-message__conversation">
        {loadingMore && <CircularProgress className="chat-message__loader" />}
        <Waypoint onEnter={handleWaypointEnter} />
        {currentConversation ? (
          currentConversation.messages
            .slice(-loadedMessages)
            .map((message) => (
              <ChatMessageText
                key={message.id}
                owner={message.owner}
                text={message.text}
                time={message.timestamp}
              />
            ))
        ) : (
          <p className="chat-message__unselected-message">Select a message</p>
        )}
      </div>
      {currentConversation && (
        <ChatMessageInput message={message} onChange={handleChange} onSubmit={handleSubmit} />
      )}
    </Container>
  );
};

export default ChatMessage;

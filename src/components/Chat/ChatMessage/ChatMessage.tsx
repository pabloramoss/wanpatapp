import ChatMessageInput from "./ChatMessageInput";
import { useParams } from "react-router-dom";
import ChatMessageText from "./ChatMessageText";
import { addMessage } from "../../../redux/slices/conversationsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import React, { useEffect, useCallback, useRef, useState } from "react";
import { Message } from "../../../types";
import { v4 as uuidv4 } from 'uuid';
import { Waypoint } from "react-waypoint";
import { CircularProgress } from "@mui/material";
import { createTimestampInSeconds } from "../../../lib/conversations/utils";
import { Container } from "./ChatMessage.styles";

const ChatMessage: React.FC = () => {
  const [loadedMessages, setLoadedMessages] = useState(15);
  const [loadingMore, setLoadingMore] = useState(false);
  const [message, setMessage] = useState('');
  const { conversationId } = useParams();

  const currentMessages = useAppSelector((state) => state.conversations.data.find((conversation) => conversation.id === conversationId!));

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessage: Message = {
      id: uuidv4(),
      text: message,
      timestamp: createTimestampInSeconds(),
      owner: true,
    };
    setMessage('');

    dispatch(addMessage({ conversationId: conversationId!, message: newMessage}));
  };

  const handleChange = (text: string) => setMessage(text);

  const chatConversationRef = useRef<HTMLDivElement>(null);

  const loadMoreMessages = useCallback(() => {
    if (currentMessages && loadedMessages < currentMessages.messages.length) {
      setLoadingMore(true);

      // Simulate an API call to load more messages
      setTimeout(() => {
        setLoadedMessages((prevLoaded) => prevLoaded + 10);
        setLoadingMore(false);
      }, 1000);
    }
  }, [currentMessages, loadedMessages]);

  const handleWaypointEnter = () => {
    if (!loadingMore) {
      loadMoreMessages();
    }
  };

  useEffect(() => {
    // Ensure the scrollbar is at the bottom after rendering new messages
    if (chatConversationRef.current) {
      chatConversationRef.current.scrollTop = chatConversationRef.current.scrollHeight;
    }
  }, [currentMessages]);

  return (
    <Container>
      <div className="chat-message__conversation" ref={chatConversationRef}>
        {
          loadingMore && <CircularProgress className="chat-message__loader" />
        }
        <Waypoint onEnter={handleWaypointEnter} />
        {currentMessages ? (
          currentMessages.messages
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
      {
        currentMessages && (
          <ChatMessageInput
            message={message}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )
      }
    </Container>
  );
};

export default ChatMessage;
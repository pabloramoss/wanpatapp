import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ArticleIcon from '@mui/icons-material/Article';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { TextareaAutosize } from '@mui/material';

import { createTimestampInSeconds } from '../../../lib/conversations/utils';
import { addMessage } from '../../../redux/slices/conversationsSlice';
import { Message } from '../../../types';

import ChatMessagePredefined from './ChatMessagePredefined';

interface Props {
  message: string;
  onChange: (event: string) => void;
  onSubmit: (
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void;
}

const ChatMessageInput: React.FC<Props> = ({ message, onChange, onSubmit }) => {
  const [responsesOpen, setResponsesOpen] = useState(false);

  const dispatch = useDispatch();

  const { conversationId } = useParams();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(event.target.value);
  const handleCloseMessagesPredefined = () => setResponsesOpen(false);
  const handleSelectMessagePredefined = (predefinedMessage: string) => {
    const newMessage: Message = {
      id: uuidv4(),
      text: predefinedMessage,
      timestamp: createTimestampInSeconds(),
      owner: true,
    };

    dispatch(addMessage({ conversationId: conversationId!, message: newMessage }));
    setResponsesOpen(false);
  };

  // Prevent the user from do a line break when pressing enter and submit the form instead
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit(event);
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        borderRight: '1px solid lightgrey',
      }}
      onSubmit={onSubmit}
    >
      <IconButton aria-label="emoji" sx={{ p: '10px' }}>
        <InsertEmoticonIcon />
      </IconButton>
      <TextareaAutosize
        aria-label="write a message"
        className="chat-message__input"
        maxRows={5}
        minRows={1}
        placeholder="Write a message"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <IconButton
        aria-label="send message"
        sx={{ p: '10px' }}
        onClick={() => setResponsesOpen(!responsesOpen)}
      >
        <ArticleIcon />
      </IconButton>
      {responsesOpen && (
        <ChatMessagePredefined
          onClose={handleCloseMessagesPredefined}
          onSelectMessage={handleSelectMessagePredefined}
        />
      )}
    </Paper>
  );
};

export default ChatMessageInput;

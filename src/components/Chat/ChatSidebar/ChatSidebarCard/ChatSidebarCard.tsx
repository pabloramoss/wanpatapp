import { Avatar, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import { Conversation } from '../../../../types';
import { getFormattedDate, getLastMessage } from '../../../../lib/conversations/utils';
import { ROUTES } from '../../../../lib/constants';

import { Container } from './ChatSidebarCard.styles';

interface Props {
  conversation: Conversation;
}
const ChatSidebarCard: React.FC<Props> = ({ conversation }) => {
  const lastMessage = getLastMessage(conversation.messages);

  return (
    <Link to={ROUTES.conversationId(conversation.id)}>
      <Container>
        <div className="sidebar-card__unread-messages">
          <Avatar alt={conversation.userName} />
          <div className="sidebar-card__content">
            <p className="sidebar-card__username">{conversation.userName}</p>
            <p className="sidebar-card__message">{lastMessage?.text}</p>
          </div>
        </div>
        <p className="sidebard-card__timestamp">{getFormattedDate(lastMessage!.timestamp)}</p>
      </Container>
      <Divider variant="inset" />
    </Link>
  );
};

export default ChatSidebarCard;

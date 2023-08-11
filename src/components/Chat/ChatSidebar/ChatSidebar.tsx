import _ from 'lodash';

import { sortConversationsByLastMessage } from '../../../lib/conversations/utils';
import { getConversations } from '../../../lib/conversations/selectors';
import { useAppSelector } from '../../../redux/hooks';

import ChatSidebarCard from './ChatSidebarCard';
import { Container } from './ChatSidebar.styles';

const Sidebar: React.FC = () => {
  const userConversations = useAppSelector(getConversations);
  const sortedConversations = sortConversationsByLastMessage(userConversations);

  return (
    <Container>
      {sortedConversations.map((conversation) => (
        <ChatSidebarCard key={conversation.id} conversation={conversation} />
      ))}
    </Container>
  );
};

export default Sidebar;

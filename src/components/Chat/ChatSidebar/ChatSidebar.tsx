import { Conversation } from '../../../types';
import { compareByTimestampAsc } from '../../../lib/conversations/utils';

import ChatSidebarCard from './ChatSidebarCard';
import { Container } from './ChatSidebar.styles';

interface Props {
  conversations: Conversation[];
}
const Sidebar: React.FC<Props> = ({ conversations }) => {
  const sortedConversations = compareByTimestampAsc(conversations);

  return (
    <Container>
      {sortedConversations.map((conversation) => (
        <ChatSidebarCard key={conversation.id} conversation={conversation} />
      ))}
    </Container>
  );
};

export default Sidebar;

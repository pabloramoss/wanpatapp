import { Conversation } from "../../../types"
import ChatSidebarCard from "./ChatSidebarCard"
import { compareByTimestampAsc } from "../../../lib/conversations/utils";
import { Container } from "./ChatSidebar.styles";

interface Props {
  conversations: Conversation[];
}
const Sidebar: React.FC<Props> = ({ conversations }) => {
  const sortedConversations = compareByTimestampAsc(conversations);

  return (
    <Container>
      {
        sortedConversations.map((conversation) => <ChatSidebarCard key={conversation.id} conversation={conversation} />)
      }
    </Container>
  )
}

export default Sidebar
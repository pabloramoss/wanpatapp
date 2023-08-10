import { getFormattedDate } from "../../../../lib/conversations/utils";
import { Container } from "./ChatMessageText.styles";

interface Props {
  owner: boolean;
  text: string;
  time: number;
}
const ChatMessageText: React.FC<Props> = ({ owner, text, time }) => {

  return (
    <Container owner={owner}>
      <p className="chat-message__text">{text}</p>
      <span className="chat-message__time">{getFormattedDate(time)}</span>
    </Container>
  )
}

export default ChatMessageText
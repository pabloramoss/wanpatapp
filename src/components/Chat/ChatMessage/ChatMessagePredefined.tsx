import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const responses = [
  {
    id: '1',
    text: 'Hello, how can I help you?',
  },
  {
    id: '2',
    text: 'I want to know more about your products',
  },
  {
    id: '3',
    text: 'I want to know more about your services',
  },
  {
    id: '5',
    text: 'I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services',
  },
  {
    id: '6',
    text: 'I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services',
  },
  {
    id: '7',
    text: 'I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services',
  },
  {
    id: '8',
    text: 'I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services',
  },
  {
    id: '9',
    text: 'I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services',
  },
  {
    id: '10',
    text: 'I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services, I want to know more about your services',
  },
];

interface Props {
  onClose: () => void;
  onSelectMessage: (predefinedMessage: string) => void;
}

const ChatMessagePredefined: React.FC<Props> = ({ onClose, onSelectMessage }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '44px',
        width: '100%',
      }}
    >
      <Card sx={{ p: 2 }} variant="outlined">
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CardHeader title="Respuestas predefinidas" />
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ maxHeight: '500px', overflow: 'auto' }}>
            {responses.map((response) => (
              <ListItem key={response.id}>
                <ListItemButton onClick={() => onSelectMessage(response.text)}>
                  <ListItemText>{response.text}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChatMessagePredefined;

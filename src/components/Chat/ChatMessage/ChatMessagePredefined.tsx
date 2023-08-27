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

import predefinedResponses from '../../../data/predefinedResponses.json';

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
          <List sx={{ maxHeight: '300px', overflow: 'auto' }}>
            {predefinedResponses.map((response) => (
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

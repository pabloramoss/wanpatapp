import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

interface Props {
  message: string;
  onChange: (event: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ChatMessageInput: React.FC<Props> = ({ message, onChange, onSubmit }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value);
  
  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      sx={{ display: 'flex', alignItems: 'center', width: "100%", borderRight: "1px solid lightgrey" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <InsertEmoticonIcon />
      </IconButton>
      <InputBase
        value={message}
        onChange={handleChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Write a message..."
        inputProps={{ 'aria-label': 'write a message' }}
      />
    </Paper>
  );
};

export default ChatMessageInput;

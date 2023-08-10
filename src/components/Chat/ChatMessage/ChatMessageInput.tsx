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
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRight: '1px solid lightgrey',
      }}
      onSubmit={onSubmit}
    >
      <IconButton aria-label="menu" sx={{ p: '10px' }}>
        <InsertEmoticonIcon />
      </IconButton>
      <InputBase
        inputProps={{ 'aria-label': 'write a message' }}
        placeholder="Write a message..."
        sx={{ ml: 1, flex: 1 }}
        value={message}
        onChange={handleChange}
      />
    </Paper>
  );
};

export default ChatMessageInput;

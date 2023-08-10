import { TextField, Button, Snackbar, Alert, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userLogin } from '../../redux/slices/authSlice';
import { ROUTES } from '../../lib/constants';
import { getUsers } from '../../lib/register/selectors';

import { Container } from './LoginForm.styles';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [colorSnackbar, setColorSnackbar] = useState<'success' | 'error'>('success');

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const users = useAppSelector(getUsers);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // Field validation
    setEmailError(email === '');
    setPasswordError(password === '');

    if (email !== '' && password !== '') {
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        // Show green Snackbar in case of valid user
        setShowSnackbar(true);
        setColorSnackbar('success');
        setSnackbarMessage(`Welcome ${email}`);
        dispatch(userLogin(user));

        // Navigate to chat page
        navigate(ROUTES.conversation);
      } else {
        // Show red Snackbar in case of invalid user
        setShowSnackbar(true);
        setColorSnackbar('error');
        setSnackbarMessage('Invalid credentials');
      }
    }
  };

  return (
    <Container>
      <Typography gutterBottom component="h1" variant="h4">
        Login
      </Typography>
      <form className="login__form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          error={emailError}
          label="Email"
          margin="normal"
          type="email"
          value={email}
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
        />
        <TextField
          fullWidth
          required
          error={passwordError}
          label="Password"
          margin="normal"
          type="password"
          value={password}
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
        />
        <Button fullWidth color="primary" type="submit" variant="contained">
          Login
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        open={showSnackbar}
        onClose={handleSnackbarClose}
      >
        <Alert severity={colorSnackbar} sx={{ width: '100%' }} onClose={handleSnackbarClose}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Form;

import { TextField, Button, Snackbar, Alert, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userLogin } from "../../redux/slices/authSlice";
import { ROUTES } from "../../lib/constants";
import { getUsers } from "../../lib/register/selectors";
import { Container } from "./LoginForm.styles";

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [colorSnackbar, setColorSnackbar] = useState<'success'| 'error'>('success');

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
      const user = users.find(u => u.email === email && u.password === password);
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
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit} className="login__form">
      <TextField
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          error={emailError}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          error={passwordError}
        />
        <Button fullWidth type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={colorSnackbar} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Form
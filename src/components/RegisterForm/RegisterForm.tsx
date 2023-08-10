import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/constants";
import { getUsers } from "../../lib/register/selectors";
import { existUser } from "../../lib/register/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser } from "../../redux/slices/usersSlice";
import { Container } from "./RegisterForm.styles";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const users = useAppSelector(getUsers);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // check if user exists
    if (existUser(email, users)) {
      alert('User already exists');
      
      return;
    }
    // if not, add user to redux store
    dispatch(addUser({ id: uuidv4(), name, email, password, avatar: '' }));
    navigate(ROUTES.login);
  }

  const handleGoToLogin = () => {
    navigate(ROUTES.login);
  };
  
  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <form className="register__form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        <p>or</p>
        <Button fullWidth onClick={handleGoToLogin} type="submit" variant="outlined" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
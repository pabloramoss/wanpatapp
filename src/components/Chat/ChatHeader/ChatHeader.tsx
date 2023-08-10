import { Avatar, IconButton } from "@mui/material";
import { getUser } from "../../../lib/auth/selectors"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import LogoutIcon from '@mui/icons-material/Logout';
import { userLogout } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../lib/constants";
import { Container } from "./ChatHeader.styles";

const ChatHeader: React.FC = () => {
  const user = useAppSelector(getUser);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate(ROUTES.login)
  };

  return (
    <Container>
      <div className="chat-heaeder__user">
        <Avatar alt={user!.name} src={user!.avatar} />
        <p>{user!.name}</p>
      </div>
      <IconButton onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </Container>
  )
}

export default ChatHeader
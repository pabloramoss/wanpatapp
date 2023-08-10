import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks';
import { getUser } from '../lib/auth/selectors';
import { ROUTES } from '../lib/constants';

interface Props {
  children: React.ReactNode;
}
const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useAppSelector(getUser);

  return isAuthenticated ? children : <Navigate to={ROUTES.register} />;
};

export default PrivateRoute;

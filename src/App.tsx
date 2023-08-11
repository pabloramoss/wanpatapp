import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Chat from './components/Chat';
import { ROUTES } from './lib/constants';
import Register from './pages/Register';
import PrivateRoute from './pages/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path={ROUTES.login} />
        <Route
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
          path={ROUTES.conversation}
        />
        <Route
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
          path={ROUTES.conversationId()}
        />
        <Route element={<Register />} path={ROUTES.register} />
        <Route element={<Navigate to={ROUTES.register} />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

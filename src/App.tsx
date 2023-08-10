import './App.css'
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
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.conversation} element={<PrivateRoute><Chat /></PrivateRoute>} />
        <Route path={ROUTES.conversationId()} element={<PrivateRoute><Chat /></PrivateRoute>} />
        <Route path={ROUTES.register} element={<Register />} />
        <Route path="*" element={<Navigate to={ROUTES.register} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


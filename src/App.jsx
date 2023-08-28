import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { app } from './firebase/firebase';
import './reset.css';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import ProfilePage from './pages/ProfilePage';
import { useAuth } from './store/AuthProvider';
import LoginPage from './pages/LoginPage';

export default function App() {
  const ctx = useAuth();
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {ctx.isLoggedIn && <Route path='/profile' element={<ProfilePage />} />}
        <Route
          path='/login'
          element={
            ctx.isLoggedIn ? <Navigate to={'/profile'} /> : <LoginPage />
          }
        />
      </Routes>
      <h1>Firebase</h1>
    </div>
  );
}

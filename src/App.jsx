import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { app } from './firebase/firebase';
import './reset.css';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  console.log('app', app);
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <h1>Firebase</h1>
    </div>
  );
}

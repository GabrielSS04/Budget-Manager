import React, { useEffect, useState } from 'react';
import "./style.css";
import google from "../../google.png";
import { loginWithGoogle, logout, authStateListener } from './loginService';
import { useNavigate } from 'react-router-dom';

const GoogleLogin: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = authStateListener((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      setUser(user);
      navigate("/home");
    } catch (error) {
      console.error('Erro ao autenticar:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };

  const getFirstName = (fullName: string | null) => {
    if (fullName) {
      return fullName.split(' ')[0];
    }
    return '';
  };

  return (
    <div>
      {user ? (
        <div className='google-logout'>
          <div className='div-test'>
            <p className='text-name'>Olá, {getFirstName(user.displayName)}!</p>
            {user.photoURL && (
              <img src={user.photoURL} alt="Foto de perfil" className="profile-pic" />
            )}
          </div>
          <a href="/home" className='link-header' onClick={handleLogout}>Logout</a>
          
        </div>
      ) : (
        <button onClick={handleLogin} className='button-google-auth'>
          <img src={google} alt="google-logo" className='google-logo-img' />
          Login with Google Account
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;

import React, { useState } from 'react';
import { authService } from '../../service/AuthService';
import { useNavigate } from 'react-router-dom';

const LogoutComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [logoutSuccessful, setLogoutSuccessful] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token: string | null = localStorage.getItem('authToken');

      if (token !== null) {
        setLoading(true);
        await authService.logout(token);
        console.log('Logout successful');
        setLogoutSuccessful(true);
        navigate('/login');
      } else { // чисто для понимания работоспособности без сервера (удалить else)
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout failed:', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {logoutSuccessful ? null : (
        <>
          <h2>Logout</h2>
          <form onSubmit={handleLogout}>
            <button type="submit" disabled={loading}>
              {loading ? 'Logging Out...' : 'Logout'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default LogoutComponent;
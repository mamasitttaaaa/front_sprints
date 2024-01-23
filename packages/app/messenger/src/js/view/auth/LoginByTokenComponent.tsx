import React, { useState, useEffect } from "react";
import { authService } from "../../service/AuthService";
import { useNavigate } from "react-router-dom";

const LoginByTokenComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      try {
        // Получение токена из локального хранилища
        const token = localStorage.getItem('authToken');

        if (token) {
          setLoading(true);
          await authService.checkToken(token);
          // Перенаправление на страницу выхода
          navigate("/logout");
          console.log('Auto Login successful');
        }
      } catch (error) {
        console.error('Auto Login failed:', (error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    autoLogin();
  }, [navigate]); // Передаем navigate в зависимость, чтобы избежать предупреждения о неиспользуемой зависимости

  return (
    <div>
      <h2>Auto Login</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Auto Login complete. You can render additional content here.</p>
      )}
    </div>
  );
};

export default LoginByTokenComponent;
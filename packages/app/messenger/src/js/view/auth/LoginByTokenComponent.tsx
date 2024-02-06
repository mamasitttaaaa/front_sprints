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
          console.log('Auto Login successful');
        } else {
          // Если токен отсутствует, перенаправляем пользователя на страницу входа
          navigate("/login");
        }
      } catch (error) {
        console.error('Auto Login failed:', (error as Error).message);
        // В случае ошибки автовхода, также перенаправляем пользователя на страницу входа
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    autoLogin();
  }, [navigate]); // Передаем navigate в зависимость, чтобы избежать предупреждения о неиспользуемой зависимости

  return (
    <div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default LoginByTokenComponent;
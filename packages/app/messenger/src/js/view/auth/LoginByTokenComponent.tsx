import React, { useState, useEffect } from "react";
import { authService } from "../../service/AuthService";
import { useNavigate } from "react-router-dom";

const LoginByTokenComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      try {
        const token = localStorage.getItem('authToken');

        if (token) {
          try {
            setLoading(true);
            await authService.checkToken(token);
            navigate("/chatjoin");
          } catch (error) {
            console.error('Auto Login failed:', (error as Error).message);
            navigate("/login");
          } finally {
            setLoading(false);
          }
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error('Auto Login failed:', (error as Error).message);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    autoLogin();
  }, [navigate]);

  return (
    <div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default LoginByTokenComponent;
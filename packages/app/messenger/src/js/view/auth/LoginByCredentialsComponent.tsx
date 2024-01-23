import React, { useState } from "react";
import { authService } from "../../service/AuthService";
import { useNavigate } from "react-router-dom";
import LoginByTokenComponent from './LoginByTokenComponent';

const LoginByCredentialsComponent: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoggingIn(true);
      await authService.login(login, password);
      navigate("/logout"); // Перенаправление после успешного входа
    } catch (error) {
      console.error('Login failed:', (error as Error).message);
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="login">Login:</label>
        <input
          type="text"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loggingIn}>
          {loggingIn ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <LoginByTokenComponent />
    </div>
  );
};

export default LoginByCredentialsComponent;

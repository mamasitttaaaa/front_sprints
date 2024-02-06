import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginByCredentialsComponent from '../auth/LoginByCredentialsComponent';
import LoginByTokenComponent from "../auth/LoginByTokenComponent";
import LogoutComponent from '../auth/LogoutComponent';

const AppContainer: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Маршрут по умолчанию перенаправляет на страницу входа */}
        <Route path="/" element={<LoginByTokenComponent />} />
        {/* Остальные маршруты */}
        <Route path="/login" element={<LoginByCredentialsComponent />} />
        <Route path="/logout" element={<LogoutComponent />} />
      </Routes>
    </Router>
  );
};

export default AppContainer;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginByCredentialsComponent from '../auth/LoginByCredentialsComponent';
import LogoutComponent from '../auth/LogoutComponent';

const AppContainer: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginByCredentialsComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppContainer;

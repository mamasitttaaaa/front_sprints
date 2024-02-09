import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginByCredentialsComponent from '../auth/LoginByCredentialsComponent';
import LoginByTokenComponent from "../auth/LoginByTokenComponent";
import LogoutComponent from '../auth/LogoutComponent';
import ChatJoinForm from "../chat_join/ChatJoinForm";
import { ChatJoinStore } from "../../store/ChatJoinStore";

const AppContainer: React.FC = () => {
  const chatJoinStore = new ChatJoinStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatJoinForm onSubmit={() => {}} chatJoinStore={chatJoinStore} />} />
        <Route path="/login" element={<LoginByCredentialsComponent />} />
        <Route path="/chatjoin" element={<ChatJoinForm onSubmit={() => {}} chatJoinStore={chatJoinStore} />} />
        <Route path="/logout" element={<LogoutComponent />} />
      </Routes>
    </Router>
  );
};

export default AppContainer;


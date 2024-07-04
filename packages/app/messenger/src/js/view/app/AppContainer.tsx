import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginByCredentialsComponent from '../auth/LoginByCredentialsComponent';
import LogoutComponent from '../auth/LogoutComponent';
import ChatJoinForm from "../chat_join/ChatJoinForm";
import { ChatJoinStore } from "../../store/ChatJoinStore";
import ChatLoaderComponent from "../chat_loader/ChatLoaderComponent";
import { ChatJoinService } from "../../service/ChatJoinService";
import { ChatMessageStore } from "../../store/ChatMessageStore";

const AppContainer: React.FC = () => {
  const chatJoinStore = new ChatJoinStore();
  const chatMessageStore = new ChatMessageStore();
  const chatJoinService = new ChatJoinService(chatJoinStore, chatMessageStore);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginByCredentialsComponent />} />
        <Route path="/login" element={<LoginByCredentialsComponent />} />
        <Route path="/chatjoin" element={<ChatJoinForm onSubmit={() => {}} chatJoinStore={chatJoinStore} />} />
        <Route path="/logout" element={<LogoutComponent />} />
        <Route path="/chat" element={<ChatLoaderComponent chatJoinService={chatJoinService} chatMessageStore={chatMessageStore} />} />
      </Routes>
    </Router>
  );
};

export default AppContainer;


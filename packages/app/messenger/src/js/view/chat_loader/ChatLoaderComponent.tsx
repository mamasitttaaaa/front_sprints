// добавить сообщения если не удалось подключиться
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { ChatJoinService } from '../../service/ChatJoinService';
import { ChatMessageStore } from '../../store/ChatMessageStore';

interface ChatLoaderProps {
  chatJoinService: ChatJoinService;
  chatMessageStore: ChatMessageStore;
}

const ChatLoaderComponent: React.FC<ChatLoaderProps> = observer(({ chatJoinService, chatMessageStore }) => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    chatJoinService.joinChat('User', 'Gender');
    return () => {
      chatJoinService.disconnect();
    };
  }, [chatJoinService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      chatJoinService.sendMessage(message);
      setMessage('');
    }
  };

  const handleLogout = () => {
    chatJoinService.disconnect();
    navigate('/logout');
  };

  return (
    <div>
      <div>
        {chatMessageStore.messages.map((message: { id: number; sender: string; text: string }) => (
          <div key={message.id}>
            <strong>{message.sender}: </strong>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <button onClick={handleLogout}>Disconnect</button>
    </div>
  );
});

export default ChatLoaderComponent;
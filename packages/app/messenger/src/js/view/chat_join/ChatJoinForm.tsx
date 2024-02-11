import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ChatJoinStore } from '../../store/ChatJoinStore';

interface ChatJoinFormProps {
  onSubmit: () => void;
  chatJoinStore: ChatJoinStore;
}

const ChatJoinForm: React.FC<ChatJoinFormProps> = ({ onSubmit, chatJoinStore }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    chatJoinStore.setUserInfo(name, gender);
    onSubmit();
    navigate("/chat");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <h2 style={{fontWeight: "bold", marginLeft: "10px", fontFamily: 'Arial, sans-serif'}}>CHAT JOIN</h2>
    <Form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label style={{marginLeft: "10px", textAlign: 'center'}}>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{maxWidth: "300px", marginLeft: "10px"}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGender">
        <Form.Label style={{marginLeft: "10px", textAlign: 'center'}}>Gender</Form.Label>
        <Form.Control
          as="select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{maxWidth: "300px", marginLeft: "10px"}}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit" style={{marginLeft: "10px",  backgroundColor: '#E6E6FA', color: 'black'}}>
        Join
      </Button>
    </Form>
    </div>
  );
};

export default observer(ChatJoinForm);
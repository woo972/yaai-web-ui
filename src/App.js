import React, { useState } from 'react';
import axios from 'axios';
import ChatInput from './components/ChatInput';
import ChatWindow from './components/ChatWindow';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
    const userMessage = { sender: 'User', text: message };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.get('http://localhost:8080/api/v1/chat/simple', {
        params: { message }
      });
      const aiMessage = { sender: 'AI', text: response.data.generation };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage = { sender: 'AI', text: 'Error: Unable to fetch response' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default App;

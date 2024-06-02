import React from 'react';
import './ChatWindow.css';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender === 'User' ? 'user-message' : 'ai-message'}`}>
          <div className="message-text">{msg.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;

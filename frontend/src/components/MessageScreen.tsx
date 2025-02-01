import React from 'react';
import './MessageScreen.css';

interface MessageScreenProps {
  message?: string;
  error?: string;
}

const MessageScreen: React.FC<MessageScreenProps> = ({ message, error }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="message-screen">
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="message">{message}</div>
      )}
      <button className="back-button" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default MessageScreen;

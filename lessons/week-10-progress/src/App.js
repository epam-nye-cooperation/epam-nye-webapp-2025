import { useState } from 'react';
import './App.css';
import { ChatContainer } from './ChatContainer';

const mockMessages = [
  {
    role: 'user',
    message: 'Hello, how are you?',
  },
  {
    role: 'assistant',
    message: 'I am fine, thank you!',
  },
  {
    role: 'user',
    message: 'What is your name?',
  },
  {
    role: 'assistant',
    message: 'I am a chatbot.',
  },
];

function App() {
  const [messages, setMessages] = useState([...mockMessages]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserMessage = async(message) => {
    if (!message) {
      return;
    }
    const newMessage = {
      role: 'user',
      message,
    };

    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate a network request

    setMessages([...updatedMessages, { ...newMessage, role: 'assistant' }]);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <ChatContainer messages={messages} onUserMessage={handleUserMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;

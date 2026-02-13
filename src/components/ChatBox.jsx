// src/components/ChatBox.jsx
import { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    setMessages([...messages, { text: input, user: true, time: new Date().toLocaleTimeString() }]);
    setInput('');
    setTyping(true);
    // Fake AI response
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessages(prev => [...prev, { text: 'This is a fake response.', user: false, time: new Date().toLocaleTimeString() }]);
    setTyping(false);
  };

  return (
    <div className="card h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.user ? 'text-right' : 'text-left'}`}>
            <p className={`inline-block p-2 rounded-lg ${msg.user ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{msg.text}</p>
            <p className="text-xs text-gray-500">{msg.time}</p>
          </div>
        ))}
        {typing && <p className="text-left">Typing...</p>}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && sendMessage()}
        className="p-2 border-t"
        placeholder="Type a message..."
      />
    </div>
  );
};

export default ChatBox;
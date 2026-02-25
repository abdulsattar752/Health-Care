// src/pages/ChatDoctor.jsx
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Features.css';

const ChatDoctor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m your AI health assistant. How can I help you today? 👋',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: 'I understand your concern. Based on your symptoms, I recommend... [This is a sample response]',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="feature-layout">
      <Sidebar />
      
      <main className="feature-main">
        <div className="feature-container">
          {/* Header */}
          <div className="feature-header">
            <h1>💬 AI Chat Doctor</h1>
            <p>24/7 AI-powered medical guidance and health advice</p>
          </div>

          {/* Chat Container */}
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((message) => (
                <div key={message.id} className={`chat-message chat-${message.type}`}>
                  <div className="chat-bubble">
                    {message.text}
                  </div>
                  <div className="chat-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="chat-message chat-bot">
                  <div className="chat-bubble loading">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="chat-input-container">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your health question or concern..."
                rows="3"
                className="chat-input"
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || loading}
                className="btn btn--primary"
              >
                Send 📤
              </button>
            </div>

            {/* Disclaimer */}
            <p className="chat-disclaimer">
              ⚠️ This AI assistant provides general health information only and cannot replace professional medical advice.
            </p>
          </div>

          {/* Quick Questions */}
          <div className="quick-questions">
            <h3>Quick Questions</h3>
            <div className="quick-questions-grid">
              <button onClick={() => setInput('What can I do to improve my sleep?')} className="quick-btn">
                Sleep Tips
              </button>
              <button onClick={() => setInput('How to maintain a healthy diet?')} className="quick-btn">
                Diet Advice
              </button>
              <button onClick={() => setInput('What exercises should I do?')} className="quick-btn">
                Exercise Guide
              </button>
              <button onClick={() => setInput('How to manage stress?')} className="quick-btn">
                Stress Management
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatDoctor;
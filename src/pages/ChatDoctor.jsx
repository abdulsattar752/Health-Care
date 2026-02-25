// src/pages/ChatDoctor.jsx
import { useState, useRef, useEffect } from 'react';
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
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Responses based on keywords
  const getAIResponse = (userText) => {
    const text = userText.toLowerCase();
    
    const responses = {
      sleep: 'Great question! To improve sleep: 1) Maintain a consistent sleep schedule, 2) Keep your bedroom cool and dark, 3) Avoid screens 1 hour before bed, 4) Try relaxation techniques like meditation, 5) Limit caffeine after 2 PM. Try this for 2-3 weeks and you should see improvement! 😴',
      
      diet: 'Maintaining a healthy diet is crucial! Here are key tips: 1) Eat more fruits and vegetables, 2) Choose whole grains over refined carbs, 3) Include lean proteins (chicken, fish, legumes), 4) Stay hydrated with water, 5) Limit processed foods and sugar. Would you like specific meal recommendations? 🥗',
      
      exercise: 'Exercise is wonderful for your health! Recommended routine: 1) 150 minutes of moderate cardio weekly (walking, jogging), 2) Strength training 2-3 times per week, 3) Flexibility work (yoga, stretching), 4) Start slowly and gradually increase intensity, 5) Find activities you enjoy. Consult your doctor before starting a new regimen! 🏃',
      
      stress: 'Managing stress is essential! Try these techniques: 1) Deep breathing exercises, 2) Daily meditation (10-15 minutes), 3) Regular exercise, 4) Adequate sleep, 5) Social connections, 6) Hobbies you enjoy, 7) Professional counseling if needed. Remember, it\'s okay to ask for help! 🧘',
      
      headache: 'I\'m sorry you\'re experiencing a headache. Try: 1) Rest in a quiet, dark room, 2) Apply cold or warm compress, 3) Stay hydrated, 4) Over-the-counter pain relief if needed, 5) Progressive muscle relaxation. If headaches persist or are severe, please consult a doctor! 🩺',
      
      fever: 'If you have a fever, here\'s what to do: 1) Rest and stay hydrated, 2) Use fever-reducing medication (follow dosage), 3) Wear light clothing, 4) Eat nutritious food, 5) Monitor your temperature regularly. Seek immediate medical attention if fever exceeds 103°F (39.4°C) or persists beyond 3 days. 🌡️',
      
      weight: 'Achieving healthy weight involves: 1) Balanced diet with portion control, 2) Regular physical activity, 3) Drink plenty of water, 4) Get adequate sleep, 5) Manage stress, 6) Track your progress. Aim for 1-2 pounds per week loss. Consult a nutritionist or doctor for personalized guidance! ⚖️',
      
      anxiety: 'For anxiety management: 1) Practice deep breathing techniques, 2) Regular exercise releases endorphins, 3) Limit caffeine and alcohol, 4) Maintain good sleep habits, 5) Social support, 6) Mindfulness meditation, 7) Consider professional help if needed. You\'re not alone! 💚',
    };
    
    for (const [keyword, response] of Object.entries(responses)) {
      if (text.includes(keyword)) {
        return response;
      }
    }
    
    return 'That\'s a great health question! Based on your concern, I recommend consulting with a healthcare professional for personalized advice. In the meantime, maintain a healthy lifestyle with exercise, balanced diet, and adequate sleep. How else can I assist you? 👩‍⚕️';
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate bot response with delay
    setTimeout(() => {
      const botResponse = getAIResponse(input);
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: botResponse,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    setInput(question);
    // Auto-focus the input
    setTimeout(() => {
      const textarea = document.querySelector('.chat-input');
      if (textarea) {
        textarea.focus();
      }
    }, 100);
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
              <div ref={messagesEndRef} />
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
                className="btn btn--primary chat-send-btn"
              >
                {loading ? '...' : 'Send 📤'}
              </button>
            </div>

            {/* Disclaimer */}
            <p className="chat-disclaimer">
              ⚠️ This AI assistant provides general health information only and cannot replace professional medical advice. Always consult a doctor for serious concerns.
            </p>
          </div>

          {/* Quick Questions */}
          <div className="quick-questions">
            <h3>💡 Quick Questions</h3>
            <p className="quick-questions-subtitle">Tap any question to get instant answers</p>
            <div className="quick-questions-grid">
              <button 
                onClick={() => handleQuickQuestion('What can I do to improve my sleep quality?')} 
                className="quick-btn"
              >
                😴 Sleep Tips
              </button>
              <button 
                onClick={() => handleQuickQuestion('How to maintain a healthy diet and nutrition?')} 
                className="quick-btn"
              >
                🥗 Diet Advice
              </button>
              <button 
                onClick={() => handleQuickQuestion('What exercises should I do for my health?')} 
                className="quick-btn"
              >
                🏃 Exercise Guide
              </button>
              <button 
                onClick={() => handleQuickQuestion('How can I manage stress and anxiety?')} 
                className="quick-btn"
              >
                🧘 Stress Management
              </button>
              <button 
                onClick={() => handleQuickQuestion('I have a headache, what should I do?')} 
                className="quick-btn"
              >
                🤕 Headache Relief
              </button>
              <button 
                onClick={() => handleQuickQuestion('How can I achieve a healthy weight?')} 
                className="quick-btn"
              >
                ⚖️ Weight Management
              </button>
              <button 
                onClick={() => handleQuickQuestion('I have a fever, what should I do?')} 
                className="quick-btn"
              >
                🌡️ Fever Help
              </button>
              <button 
                onClick={() => handleQuickQuestion('How can I manage anxiety symptoms?')} 
                className="quick-btn"
              >
                💚 Anxiety Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatDoctor;
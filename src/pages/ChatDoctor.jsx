// src/pages/ChatDoctor.jsx
import Sidebar from '../components/Sidebar';
import ChatBox from '../components/ChatBox';

const ChatDoctor = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatDoctor;
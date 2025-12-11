import { useState } from 'react';
import { Header } from './Header';
import { Send, ArrowLeft } from 'lucide-react';
import img1 from "figma:asset/9e42dfc4a042b088d4415fde72bf7e8f690009a5.png";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'seller';
  timestamp: Date;
}

interface ChatPageProps {
  onBackToHome: () => void;
  onBack: () => void;
}

export function ChatPage({ onBackToHome, onBack }: ChatPageProps) {
  const [searchInput, setSearchInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Is this available?',
      sender: 'user',
      timestamp: new Date(Date.now() - 120000)
    },
    {
      id: 2,
      text: "Yes it's still available, where would you like to meet?",
      sender: 'seller',
      timestamp: new Date(Date.now() - 60000)
    }
  ]);

  const handleSearch = (query: string) => {
    setSearchInput(query);
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: messageInput,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} 
        onSearch={handleSearch}
        onLogoClick={onBackToHome}
        onChatClick={() => {}}
      />

      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Chat List Sidebar */}
        <div className="w-80 border-r">
          <div className="p-4 border-b">
            <h2>Messages</h2>
          </div>
          <div 
            onClick={onBack}
            className="bg-purple-50 border-l-4 border-purple-600 p-4 hover:bg-purple-100 cursor-pointer"
          >
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
                <img src={img1} alt="Listing" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm truncate">Wii Seller</span>
                  <span className="text-xs text-gray-500">2m</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Wii For Sale - complete with controller</p>
                <p className="text-xs text-gray-500 truncate">Yes it's still available...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="border-b p-4 flex items-center gap-4">
            <button onClick={onBack} className="hover:bg-gray-100 p-2 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={onBack}>
              <div className="w-10 h-10 bg-gray-200 rounded-full">
                <img src={img1} alt="Listing" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <div className="font-medium">Wii Seller</div>
                <div className="text-sm text-gray-600">Wii For Sale - $79.99</div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-3xl mx-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <p>{message.text}</p>
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="border-t p-4 bg-white">
            <div className="max-w-3xl mx-auto flex gap-2">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-purple-600"
              />
              <button
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
                className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
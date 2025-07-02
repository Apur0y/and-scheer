'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Hey there!' },
    { sender: 'friend', text: 'Hello! How are you?' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;

    setMessages([...messages, { sender: 'user', text: newMessage }]);
    setNewMessage('');
    
    // Optional: Simulate reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'friend', text: 'Got it!' }]);
    }, 1000);
  };

  return (
    <div className="max-w-[1100px] mx-auto bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col min-h-screen my-16">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 font-semibold bg-gray-100">SM Technology</div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >

            <Image
            src={""}
            alt='image'
            height={20}
            width={20}
            className='bg-blue-800 rounded-full mr-2'
            />
            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] text-sm ${
                msg.sender === 'user'
                  ? 'bg-gray-500 text-white'
                  : 'bg-scheer-primary text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200 flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

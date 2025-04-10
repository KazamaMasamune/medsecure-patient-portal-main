
import React from 'react';
import MessageList from '@/components/messages/MessageList';

const Messages: React.FC = () => {
  return (
    <div className="p-6 h-[calc(100vh-4rem)]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-medical-dark">Secure Messages</h1>
      </div>
      
      <div className="h-[calc(100%-3.5rem)]">
        <MessageList />
      </div>
    </div>
  );
};

export default Messages;

import React, { useState } from 'react';
import MessageItem from './MessageItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search, Inbox, Send, Archive, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Message {
  id: string;
  sender: {
    name: string;
    imageUrl?: string;
    type: 'doctor' | 'staff' | 'system';
  };
  subject: string;
  preview: string;
  timestamp: Date;
  isUnread: boolean;
  hasAttachment: boolean;
  folder: 'inbox' | 'sent' | 'archived';
}

const MessageList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('inbox');
  
  // Mock data for messages
  const messages: Message[] = [
    {
      id: 'msg-001',
      sender: {
        name: 'Dr. Sarah Johnson',
        type: 'doctor',
      },
      subject: 'Your Lab Results Are Ready',
      preview: "I've reviewed your recent lab results and they look good overall. Your cholesterol levels have improved since your last...",
      timestamp: new Date('2025-04-09T14:23:00'),
      isUnread: true,
      hasAttachment: true,
      folder: 'inbox',
    },
    {
      id: 'msg-002',
      sender: {
        name: 'Appointment Reminder',
        type: 'system',
      },
      subject: 'Upcoming Appointment: Tomorrow at 10:30 AM',
      preview: "This is a reminder that you have an appointment with Dr. Michael Chen tomorrow, April 15, 2025 at 10:30 AM...",
      timestamp: new Date('2025-04-09T09:15:00'),
      isUnread: true,
      hasAttachment: false,
      folder: 'inbox',
    },
    {
      id: 'msg-003',
      sender: {
        name: 'Medical Records',
        type: 'staff',
      },
      subject: 'Request for Medical Records Approved',
      preview: "Your request to access your medical records has been approved. You can now view and download your requested...",
      timestamp: new Date('2025-04-08T16:42:00'),
      isUnread: false,
      hasAttachment: false,
      folder: 'inbox',
    },
    {
      id: 'msg-004',
      sender: {
        name: 'Patient Support',
        type: 'staff',
      },
      subject: 'Response to Your Billing Inquiry',
      preview: "Thank you for your inquiry about the recent charges on your account. I've looked into this matter and found that...",
      timestamp: new Date('2025-04-07T11:20:00'),
      isUnread: false,
      hasAttachment: false,
      folder: 'inbox',
    },
    {
      id: 'msg-005',
      sender: {
        name: 'Prescription Renewal',
        type: 'system',
      },
      subject: 'Your Prescription Has Been Renewed',
      preview: "Your prescription for Lisinopril 10mg has been renewed by Dr. Johnson. It is ready for pickup at your preferred pharmacy...",
      timestamp: new Date('2025-04-05T15:10:00'),
      isUnread: false,
      hasAttachment: false,
      folder: 'inbox',
    },
    {
      id: 'msg-006',
      sender: {
        name: 'You',
        type: 'staff',
      },
      subject: 'Question About Side Effects',
      preview: "I've been experiencing some dizziness since starting the new medication. Is this a common side effect or should I be...",
      timestamp: new Date('2025-04-06T10:30:00'),
      isUnread: false,
      hasAttachment: false,
      folder: 'sent',
    },
  ];
  
  // Filter messages based on search query and active tab
  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.preview.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesTab = message.folder === activeTab;
    
    return matchesSearch && matchesTab;
  });
  
  // Count unread messages
  const unreadCount = messages.filter(message => message.isUnread && message.folder === 'inbox').length;

  return (
    <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-medical-primary">Messages</h2>
          <Button className="bg-medical-primary text-white hover:bg-medical-dark flex items-center gap-1">
            <PlusCircle size={16} />
            <span>New Message</span>
          </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medical-gray-dark" size={18} />
          <Input 
            placeholder="Search messages..." 
            className="pl-10 border-medical-gray-medium" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs 
        defaultValue="inbox" 
        className="flex-1 flex flex-col"
        onValueChange={(value) => setActiveTab(value)}
      >
        <div className="border-b">
          <TabsList className="p-0 bg-transparent w-full justify-start border-b-0">
            <TabsTrigger 
              value="inbox" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-medical-primary data-[state=active]:text-medical-primary rounded-none px-4 py-3 text-sm"
            >
              <Inbox size={16} className="mr-2" />
              <span>Inbox {unreadCount > 0 && `(${unreadCount})`}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="sent" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-medical-primary data-[state=active]:text-medical-primary rounded-none px-4 py-3 text-sm"
            >
              <Send size={16} className="mr-2" />
              <span>Sent</span>
            </TabsTrigger>
            <TabsTrigger 
              value="archived" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-medical-primary data-[state=active]:text-medical-primary rounded-none px-4 py-3 text-sm"
            >
              <Archive size={16} className="mr-2" />
              <span>Archived</span>
            </TabsTrigger>
            <TabsTrigger 
              value="trash" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-medical-primary data-[state=active]:text-medical-primary rounded-none px-4 py-3 text-sm"
            >
              <Trash2 size={16} className="mr-2" />
              <span>Trash</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="inbox" className="flex-1 m-0 overflow-auto">
          {filteredMessages.length > 0 ? (
            filteredMessages.map(message => (
              <MessageItem
                key={message.id}
                id={message.id}
                sender={message.sender}
                subject={message.subject}
                preview={message.preview}
                timestamp={message.timestamp}
                isUnread={message.isUnread}
                hasAttachment={message.hasAttachment}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <Inbox size={48} className="text-medical-gray-medium mb-4" />
              <h3 className="text-lg font-medium mb-2">No messages found</h3>
              <p className="text-medical-gray-dark">
                {searchQuery ? 'Try different search terms' : 'Your inbox is empty'}
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="sent" className="flex-1 m-0 overflow-auto">
          {filteredMessages.length > 0 ? (
            filteredMessages.map(message => (
              <MessageItem
                key={message.id}
                id={message.id}
                sender={message.sender}
                subject={message.subject}
                preview={message.preview}
                timestamp={message.timestamp}
                isUnread={message.isUnread}
                hasAttachment={message.hasAttachment}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <Send size={48} className="text-medical-gray-medium mb-4" />
              <h3 className="text-lg font-medium mb-2">No sent messages</h3>
              <p className="text-medical-gray-dark">Messages you send will appear here</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="archived" className="flex-1 m-0 overflow-auto">
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Archive size={48} className="text-medical-gray-medium mb-4" />
            <h3 className="text-lg font-medium mb-2">No archived messages</h3>
            <p className="text-medical-gray-dark">Archived messages will appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="trash" className="flex-1 m-0 overflow-auto">
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Trash2 size={48} className="text-medical-gray-medium mb-4" />
            <h3 className="text-lg font-medium mb-2">Trash is empty</h3>
            <p className="text-medical-gray-dark">Deleted messages will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MessageList;

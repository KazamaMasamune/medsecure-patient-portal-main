
import React from 'react';
import { format } from 'date-fns';
import { Paperclip, CheckCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface MessageItemProps {
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
}

const MessageItem: React.FC<MessageItemProps> = ({
  sender,
  subject,
  preview,
  timestamp,
  isUnread,
  hasAttachment,
}) => {
  const getBadgeForSenderType = (type: string) => {
    switch (type) {
      case 'doctor':
        return <Badge className="bg-medical-primary">Doctor</Badge>;
      case 'staff':
        return <Badge className="bg-medical-secondary">Staff</Badge>;
      case 'system':
        return <Badge variant="outline" className="border-medical-gray-dark text-medical-gray-dark">System</Badge>;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`p-4 border-b hover:bg-medical-gray-light cursor-pointer transition-colors ${
        isUnread ? 'bg-blue-50' : ''
      }`}
    >
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={sender.imageUrl} />
          <AvatarFallback className="bg-medical-primary text-white">
            {sender.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <h4 className={`font-medium ${isUnread ? 'text-medical-dark' : 'text-medical-gray-dark'}`}>
                {sender.name}
              </h4>
              {getBadgeForSenderType(sender.type)}
            </div>
            <span className="text-xs text-medical-gray-dark">
              {format(timestamp, 'MMM d, h:mm a')}
            </span>
          </div>
          
          <h3 className={`mt-1 ${isUnread ? 'font-semibold' : 'font-medium'}`}>{subject}</h3>
          
          <div className="mt-1 flex justify-between items-end">
            <p className="text-sm text-medical-gray-dark truncate">{preview}</p>
            <div className="flex items-center space-x-2 text-medical-gray-dark">
              {hasAttachment && <Paperclip size={14} />}
              {!isUnread && <CheckCheck size={14} className="text-green-600" />}
              {isUnread && <div className="w-2 h-2 rounded-full bg-medical-primary"></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;

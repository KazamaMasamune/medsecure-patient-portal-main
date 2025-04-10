
import React from 'react';
import { Calendar, Clock, MapPin, MoreVertical, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface AppointmentCardProps {
  date: string;
  time: string;
  doctorName: string;
  specialty: string;
  location: string;
  isVirtual?: boolean;
  status: 'Upcoming' | 'Completed' | 'Cancelled' | 'Rescheduled';
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  date,
  time,
  doctorName,
  specialty,
  location,
  isVirtual = false,
  status,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Rescheduled':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="medical-card border-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <Badge variant="outline" className={getStatusColor(status)}>
                {status}
              </Badge>
              <h3 className="font-semibold text-lg mt-2 text-medical-dark">Dr. {doctorName}</h3>
              <p className="text-sm text-medical-gray-dark">{specialty}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Reschedule</DropdownMenuItem>
                <DropdownMenuItem>Cancel</DropdownMenuItem>
                <DropdownMenuItem>Add to calendar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm">
              <Calendar size={16} className="mr-2 text-medical-secondary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock size={16} className="mr-2 text-medical-secondary" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-sm">
              {isVirtual ? (
                <Video size={16} className="mr-2 text-medical-secondary" />
              ) : (
                <MapPin size={16} className="mr-2 text-medical-secondary" />
              )}
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-medical-gray-medium px-4 py-3 bg-medical-gray-light flex justify-between items-center">
          {status === 'Upcoming' && (
            <>
              {isVirtual ? (
                <Button className="bg-medical-primary text-white hover:bg-medical-dark">
                  Join Video Call
                </Button>
              ) : (
                <Button variant="outline" className="border-medical-primary text-medical-primary hover:bg-medical-light">
                  Get Directions
                </Button>
              )}
              <Button variant="outline" className="border-medical-danger text-medical-danger hover:bg-red-50">
                Cancel
              </Button>
            </>
          )}
          {status === 'Completed' && (
            <>
              <Button variant="outline" className="border-medical-primary text-medical-primary hover:bg-medical-light">
                View Summary
              </Button>
              <Button variant="outline" className="border-medical-secondary text-medical-secondary hover:bg-medical-light">
                Book Follow-up
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;

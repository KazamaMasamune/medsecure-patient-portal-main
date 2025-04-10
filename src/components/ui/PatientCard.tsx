
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PatientCardProps {
  name: string;
  imageUrl?: string;
  patientId: string;
  insuranceStatus: 'Active' | 'Inactive' | 'Pending';
  nextAppointment?: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  imageUrl,
  patientId,
  insuranceStatus,
  nextAppointment,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Inactive':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="medical-card border-none">
      <CardContent className="p-0">
        <div className="flex items-center p-4">
          <Avatar className="h-16 w-16 border-2 border-medical-light">
            <AvatarImage src={imageUrl} />
            <AvatarFallback className="bg-medical-primary text-white text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h3 className="font-semibold text-lg text-medical-dark">{name}</h3>
            <div className="flex flex-col space-y-1 mt-1">
              <div className="text-sm text-medical-gray-dark">
                <span className="font-medium">Patient ID:</span> {patientId}
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className={getStatusColor(insuranceStatus)}>
                  Insurance: {insuranceStatus}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        {nextAppointment && (
          <div className="border-t border-medical-gray-medium p-3 bg-medical-gray-light rounded-b-lg">
            <p className="text-sm">
              <span className="font-medium">Next Appointment:</span> {nextAppointment}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PatientCard;

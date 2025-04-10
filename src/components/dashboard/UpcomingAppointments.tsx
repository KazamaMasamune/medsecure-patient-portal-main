
import React from 'react';
import AppointmentCard from './AppointmentCard';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const UpcomingAppointments: React.FC = () => {
  // Mock data for appointments
  const appointments = [
    {
      id: 1,
      date: 'Monday, Apr 15, 2025',
      time: '10:30 AM - 11:15 AM',
      doctorName: 'Sarah Johnson',
      specialty: 'Cardiology',
      location: 'Main Hospital, Floor 3, Room 302',
      isVirtual: false,
      status: 'Upcoming' as const,
    },
    {
      id: 2,
      date: 'Wednesday, Apr 24, 2025',
      time: '2:00 PM - 2:45 PM',
      doctorName: 'Michael Chen',
      specialty: 'Annual Physical',
      location: 'Video Appointment',
      isVirtual: true,
      status: 'Upcoming' as const,
    },
    {
      id: 3,
      date: 'Friday, Mar 28, 2025',
      time: '9:15 AM - 10:00 AM',
      doctorName: 'Emily Rodriguez',
      specialty: 'Dermatology',
      location: 'Downtown Clinic, Room 105',
      isVirtual: false,
      status: 'Completed' as const,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="section-title">Upcoming Appointments</h2>
        <Button className="bg-medical-primary text-white hover:bg-medical-dark flex items-center gap-1">
          <PlusCircle size={16} />
          <span>Schedule New</span>
        </Button>
      </div>
      
      <div className="space-y-4">
        {appointments.map(appointment => (
          <AppointmentCard
            key={appointment.id}
            date={appointment.date}
            time={appointment.time}
            doctorName={appointment.doctorName}
            specialty={appointment.specialty}
            location={appointment.location}
            isVirtual={appointment.isVirtual}
            status={appointment.status}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointments;

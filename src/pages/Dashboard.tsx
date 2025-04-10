
import React from 'react';
import PatientCard from '@/components/ui/PatientCard';
import UpcomingAppointments from '@/components/dashboard/UpcomingAppointments';
import HealthSummary from '@/components/dashboard/HealthSummary';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BellRing, FileText, MessageSquare, Calendar, AlertTriangle, Shield } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-medical-dark">Patient Dashboard</h1>
        <div className="text-sm text-medical-gray-dark">
          Last updated: April 10, 2025, 9:15 AM
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <PatientCard 
            name="John Smith"
            patientId="PT-10053642"
            insuranceStatus="Active"
            nextAppointment="Dr. Sarah Johnson, Cardiology - Monday, Apr 15, 2025 at 10:30 AM"
          />
        </div>
        
        <Card className="medical-card flex flex-col justify-center border-none">
          <CardContent className="p-5 flex flex-col items-center text-center">
            <div className="relative mb-3">
              <Shield className="h-12 w-12 text-medical-success" />
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
                <AlertTriangle className="h-4 w-4 text-medical-warning" />
              </div>
            </div>
            <h3 className="font-medium text-lg mb-1">Security Status</h3>
            <p className="text-sm text-medical-gray-dark mb-3">Your account is secure but has 1 alert</p>
            <Button variant="outline" className="text-xs border-medical-primary text-medical-primary mt-2">
              View Security Status
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-card hover:bg-medical-light transition-colors border-none">
          <CardContent className="p-5 flex items-center">
            <div className="rounded-full p-3 bg-medical-primary/10 mr-4">
              <Calendar className="h-6 w-6 text-medical-primary" />
            </div>
            <div>
              <p className="text-sm text-medical-gray-dark">Upcoming Appointments</p>
              <p className="font-semibold text-xl">2</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="medical-card hover:bg-medical-light transition-colors border-none">
          <CardContent className="p-5 flex items-center">
            <div className="rounded-full p-3 bg-medical-secondary/10 mr-4">
              <MessageSquare className="h-6 w-6 text-medical-secondary" />
            </div>
            <div>
              <p className="text-sm text-medical-gray-dark">New Messages</p>
              <p className="font-semibold text-xl">3</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="medical-card hover:bg-medical-light transition-colors border-none">
          <CardContent className="p-5 flex items-center">
            <div className="rounded-full p-3 bg-medical-accent/10 mr-4">
              <FileText className="h-6 w-6 text-medical-accent" />
            </div>
            <div>
              <p className="text-sm text-medical-gray-dark">Medical Records</p>
              <p className="font-semibold text-xl">15</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="medical-card hover:bg-medical-light transition-colors border-none">
          <CardContent className="p-5 flex items-center">
            <div className="rounded-full p-3 bg-medical-warning/10 mr-4">
              <BellRing className="h-6 w-6 text-medical-warning" />
            </div>
            <div>
              <p className="text-sm text-medical-gray-dark">Medication Alerts</p>
              <p className="font-semibold text-xl">1</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingAppointments />
        <HealthSummary />
      </div>
    </div>
  );
};

export default Dashboard;

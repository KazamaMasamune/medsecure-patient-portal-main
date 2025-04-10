
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Heart, Thermometer, Droplet, Weight, Ruler } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const HealthSummary: React.FC = () => {
  return (
    <div>
      <h2 className="section-title">Health Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="medical-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center">
              <Heart size={18} className="text-medical-danger mr-2" />
              Vital Signs
            </CardTitle>
            <CardDescription>Last updated: April 5, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-medical-gray-dark">Blood Pressure</span>
                  <span className="font-medium">120/80 mmHg</span>
                </div>
                <Progress value={75} className="h-2 bg-medical-gray-medium" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-medical-gray-dark">Heart Rate</span>
                  <span className="font-medium">72 bpm</span>
                </div>
                <Progress value={65} className="h-2 bg-medical-gray-medium" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-medical-gray-dark">Blood Oxygen</span>
                  <span className="font-medium">98%</span>
                </div>
                <Progress value={98} className="h-2 bg-medical-gray-medium" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-medical-gray-dark">Temperature</span>
                  <span className="font-medium">98.6 °F</span>
                </div>
                <Progress value={50} className="h-2 bg-medical-gray-medium" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="medical-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center">
              <Activity size={18} className="text-medical-accent mr-2" />
              Measurements
            </CardTitle>
            <CardDescription>Last updated: March 28, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="stats-box">
                <Weight className="h-5 w-5 text-medical-primary mx-auto mb-1" />
                <p className="text-xs text-medical-gray-dark">Weight</p>
                <p className="font-medium text-lg">165 lbs</p>
              </div>
              
              <div className="stats-box">
                <Ruler className="h-5 w-5 text-medical-primary mx-auto mb-1" />
                <p className="text-xs text-medical-gray-dark">Height</p>
                <p className="font-medium text-lg">5'10"</p>
              </div>
              
              <div className="stats-box">
                <Droplet className="h-5 w-5 text-medical-primary mx-auto mb-1" />
                <p className="text-xs text-medical-gray-dark">Glucose</p>
                <p className="font-medium text-lg">95 mg/dL</p>
              </div>
              
              <div className="stats-box">
                <Thermometer className="h-5 w-5 text-medical-primary mx-auto mb-1" />
                <p className="text-xs text-medical-gray-dark">BMI</p>
                <p className="font-medium text-lg">23.7</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthSummary;

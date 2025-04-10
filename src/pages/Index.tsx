
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, User, Shield, FileText, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, authenticate the user here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-medical-primary">MedSecure</span>
            <span className="text-medical-secondary text-sm ml-1">Patient Portal</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-medical-gray-dark">Help</Button>
            <Button variant="outline" className="border-medical-primary text-medical-primary">Register</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
            <div className="lg:w-1/2 max-w-xl">
              <h1 className="text-4xl font-bold text-medical-dark mb-6">
                Secure Healthcare Access at Your Fingertips
              </h1>
              <p className="text-lg text-medical-gray-dark mb-8">
                Welcome to MedSecure, your private and secure portal for managing your healthcare needs. 
                Access your medical records, schedule appointments, and communicate with your healthcare providers anytime, anywhere.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Shield className="text-medical-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-medical-dark">HIPAA Compliant</h3>
                    <p className="text-sm text-medical-gray-dark">Your data is protected with industry-leading security measures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="text-medical-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-medical-dark">Medical Records</h3>
                    <p className="text-sm text-medical-gray-dark">Access your complete health history securely</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-medical-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-medical-dark">Appointments</h3>
                    <p className="text-sm text-medical-gray-dark">Schedule and manage all your doctor visits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="text-medical-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-medical-dark">Secure Messaging</h3>
                    <p className="text-sm text-medical-gray-dark">Communicate directly with your healthcare team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full max-w-md">
              <Card className="shadow-xl border-none">
                <CardContent className="p-0">
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="p-6">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-medical-gray-dark" />
                            <Input 
                              id="email" 
                              type="email" 
                              className="pl-10 border-medical-gray-medium" 
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="password">Password</Label>
                            <a href="#" className="text-sm text-medical-primary hover:underline">
                              Forgot password?
                            </a>
                          </div>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-medical-gray-dark" />
                            <Input 
                              id="password" 
                              type="password" 
                              className="pl-10 border-medical-gray-medium" 
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-medical-primary text-white hover:bg-medical-dark"
                        >
                          Sign In
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="register" className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-medium text-medical-dark">Create a New Account</h3>
                        <p className="text-sm text-medical-gray-dark mt-1">
                          Join thousands of patients managing their healthcare online
                        </p>
                      </div>
                      <Button 
                        className="w-full bg-medical-primary text-white hover:bg-medical-dark"
                      >
                        Start Registration
                      </Button>
                      <div className="mt-4 text-sm text-center text-medical-gray-dark">
                        Already have an account? 
                        <button className="text-medical-primary ml-1 hover:underline">
                          Sign in
                        </button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-medical-gray-light py-8 border-t border-medical-gray-medium">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <span className="text-xl font-bold text-medical-primary">MedSecure</span>
                <span className="text-medical-secondary text-xs ml-1">Patient Portal</span>
              </div>
              <p className="text-sm text-medical-gray-dark">
                © 2025 MedSecure. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-medical-gray-dark hover:text-medical-primary">Privacy Policy</a>
              <a href="#" className="text-sm text-medical-gray-dark hover:text-medical-primary">Terms of Service</a>
              <a href="#" className="text-sm text-medical-gray-dark hover:text-medical-primary">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

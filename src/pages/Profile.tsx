
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Shield, 
  Key, 
  CreditCard, 
  FileText, 
  Bell, 
  Settings,
  Lock,
  LogOut
} from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-medical-dark">Account Profile</h1>
        <Button variant="outline" className="border-medical-danger text-medical-danger hover:bg-red-50">
          <LogOut size={16} className="mr-2" />
          Sign Out
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Card className="medical-card border-none">
            <CardContent className="p-6 flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4 border-4 border-medical-light">
                <AvatarImage src="" />
                <AvatarFallback className="bg-medical-primary text-white text-2xl">
                  JS
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold mb-1">John Smith</h2>
              <p className="text-medical-gray-dark text-sm mb-4">Patient ID: PT-10053642</p>
              <Button className="w-full mb-2 bg-medical-primary text-white hover:bg-medical-dark">
                Edit Profile
              </Button>
              <Button variant="outline" className="w-full border-medical-gray-medium">
                Change Photo
              </Button>
              
              <div className="w-full mt-6 space-y-2">
                <div className="p-3 rounded-md bg-medical-gray-light flex items-center space-x-3 cursor-pointer hover:bg-medical-light transition-colors">
                  <User size={18} className="text-medical-primary" />
                  <span className="font-medium text-sm">Personal Information</span>
                </div>
                
                <div className="p-3 rounded-md flex items-center space-x-3 cursor-pointer hover:bg-medical-gray-light transition-colors">
                  <Lock size={18} className="text-medical-gray-dark" />
                  <span className="text-sm">Security</span>
                </div>
                
                <div className="p-3 rounded-md flex items-center space-x-3 cursor-pointer hover:bg-medical-gray-light transition-colors">
                  <CreditCard size={18} className="text-medical-gray-dark" />
                  <span className="text-sm">Billing & Insurance</span>
                </div>
                
                <div className="p-3 rounded-md flex items-center space-x-3 cursor-pointer hover:bg-medical-gray-light transition-colors">
                  <Bell size={18} className="text-medical-gray-dark" />
                  <span className="text-sm">Notifications</span>
                </div>
                
                <div className="p-3 rounded-md flex items-center space-x-3 cursor-pointer hover:bg-medical-gray-light transition-colors">
                  <Settings size={18} className="text-medical-gray-dark" />
                  <span className="text-sm">Preferences</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:w-3/4">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="personal" className="text-sm">
                <User size={16} className="mr-2" />
                Personal Information
              </TabsTrigger>
              <TabsTrigger value="security" className="text-sm">
                <Shield size={16} className="mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="insurance" className="text-sm">
                <CreditCard size={16} className="mr-2" />
                Insurance
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal">
              <Card className="medical-card border-none">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <User size={18} className="mr-2 text-medical-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" className="medical-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Smith" className="medical-input" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input id="dateOfBirth" type="date" defaultValue="1980-06-15" className="medical-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <select id="gender" className="w-full medical-input">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="john.smith@example.com" className="medical-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="(555) 123-4567" className="medical-input" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" defaultValue="123 Main Street" className="medical-input" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="Springfield" className="medical-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="IL" className="medical-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input id="zipCode" defaultValue="62701" className="medical-input" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact</Label>
                      <Input id="emergencyContact" defaultValue="Jane Smith (555) 987-6543" className="medical-input" />
                    </div>
                    
                    <div className="pt-4 flex justify-end space-x-3">
                      <Button variant="outline" className="border-medical-gray-medium">Cancel</Button>
                      <Button className="bg-medical-primary text-white hover:bg-medical-dark">Save Changes</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card className="medical-card border-none">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Key size={18} className="mr-2 text-medical-primary" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input id="currentPassword" type="password" className="medical-input" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" className="medical-input" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" className="medical-input" />
                        </div>
                        <Button className="bg-medical-primary text-white hover:bg-medical-dark">Update Password</Button>
                      </div>
                    </div>
                    
                    <div className="border-t border-medical-gray-medium pt-6">
                      <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                      <p className="text-medical-gray-dark mb-4">
                        Add an additional layer of security to your account by enabling two-factor authentication.
                      </p>
                      <Button variant="outline" className="border-medical-primary text-medical-primary">
                        Enable Two-Factor Authentication
                      </Button>
                    </div>
                    
                    <div className="border-t border-medical-gray-medium pt-6">
                      <h3 className="font-medium mb-4">Login History</h3>
                      <p className="text-medical-gray-dark mb-4">
                        Monitor recent account activity to ensure your account hasn't been compromised.
                      </p>
                      <div className="bg-medical-gray-light rounded-lg p-4 mb-4">
                        <div className="mb-2 flex justify-between">
                          <div className="font-medium">Today, 9:15 AM</div>
                          <div className="text-green-600 font-medium text-sm">Current Session</div>
                        </div>
                        <div className="text-sm text-medical-gray-dark">
                          <div>Chrome on Windows</div>
                          <div>IP Address: 192.168.1.1</div>
                        </div>
                      </div>
                      <div className="bg-medical-gray-light rounded-lg p-4">
                        <div className="mb-2 flex justify-between">
                          <div className="font-medium">Yesterday, 4:30 PM</div>
                        </div>
                        <div className="text-sm text-medical-gray-dark">
                          <div>Safari on iPhone</div>
                          <div>IP Address: 192.168.1.2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="insurance">
              <Card className="medical-card border-none">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText size={18} className="mr-2 text-medical-primary" />
                    Insurance Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mb-6">
                    <div className="font-medium text-green-700">Insurance Status: Active</div>
                    <p className="text-sm text-green-600">Your insurance information is up to date and verified.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                        <Input id="insuranceProvider" defaultValue="HealthGuard Insurance" className="medical-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="planType">Plan Type</Label>
                        <Input id="planType" defaultValue="PPO Family Plan" className="medical-input" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="memberID">Member ID</Label>
                        <Input id="memberID" defaultValue="HG87654321" className="medical-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="groupNumber">Group Number</Label>
                        <Input id="groupNumber" defaultValue="GRP12345" className="medical-input" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="policyHolder">Policy Holder</Label>
                        <Input id="policyHolder" defaultValue="John Smith" className="medical-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="relationship">Relationship to Policy Holder</Label>
                        <select id="relationship" className="w-full medical-input">
                          <option value="self">Self</option>
                          <option value="spouse">Spouse</option>
                          <option value="child">Child</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="effectiveDate">Effective Date</Label>
                      <Input id="effectiveDate" type="date" defaultValue="2024-01-01" className="medical-input" />
                    </div>
                    
                    <div className="pt-4 border-t border-medical-gray-medium mt-6">
                      <h3 className="font-medium mb-4">Insurance Card</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-medical-gray-medium rounded-lg p-6 flex flex-col items-center justify-center text-center">
                          <p className="text-medical-gray-dark mb-3">Upload front side of insurance card</p>
                          <Button variant="outline" className="border-medical-gray-medium">Upload Image</Button>
                        </div>
                        <div className="border-2 border-dashed border-medical-gray-medium rounded-lg p-6 flex flex-col items-center justify-center text-center">
                          <p className="text-medical-gray-dark mb-3">Upload back side of insurance card</p>
                          <Button variant="outline" className="border-medical-gray-medium">Upload Image</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-end space-x-3">
                      <Button variant="outline" className="border-medical-gray-medium">Cancel</Button>
                      <Button className="bg-medical-primary text-white hover:bg-medical-dark">Save Changes</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;

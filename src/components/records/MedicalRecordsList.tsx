
import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  Search, 
  ChevronDown, 
  MoreHorizontal 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface MedicalRecord {
  id: string;
  title: string;
  type: string;
  provider: string;
  date: string;
  fileType: string;
}

const MedicalRecordsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recordType, setRecordType] = useState('all');
  
  // Mock data for medical records
  const records: MedicalRecord[] = [
    {
      id: 'rec-001',
      title: 'Annual Physical Results',
      type: 'Examination',
      provider: 'Dr. Sarah Johnson',
      date: 'Mar 15, 2025',
      fileType: 'PDF',
    },
    {
      id: 'rec-002',
      title: 'Cholesterol Test Results',
      type: 'Lab Results',
      provider: 'Regional Medical Lab',
      date: 'Feb 27, 2025',
      fileType: 'PDF',
    },
    {
      id: 'rec-003',
      title: 'Chest X-Ray Images',
      type: 'Imaging',
      provider: 'City Imaging Center',
      date: 'Feb 10, 2025',
      fileType: 'DICOM',
    },
    {
      id: 'rec-004',
      title: 'Cardiology Consultation Notes',
      type: 'Consultation',
      provider: 'Dr. Michael Chen',
      date: 'Jan 22, 2025',
      fileType: 'PDF',
    },
    {
      id: 'rec-005',
      title: 'Surgery Follow-up Report',
      type: 'Surgery',
      provider: 'Dr. Emily Rodriguez',
      date: 'Dec 15, 2024',
      fileType: 'PDF',
    },
  ];
  
  // Filter records based on search query and type filter
  const filteredRecords = records.filter(record => {
    const matchesSearch = 
      record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.provider.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesType = recordType === 'all' || record.type === recordType;
    
    return matchesSearch && matchesType;
  });
  
  // Get unique record types for filter dropdown
  const recordTypes = ['all', ...new Set(records.map(record => record.type))];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medical-gray-dark" size={18} />
            <Input 
              placeholder="Search records..." 
              className="pl-10 border-medical-gray-medium" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3">
            <Select value={recordType} onValueChange={setRecordType}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  <FileText size={16} className="mr-2 text-medical-gray-dark" />
                  <SelectValue placeholder="Filter by type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {recordTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === 'all' ? 'All Records' : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="border-medical-gray-medium flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>Filter by Date</span>
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Document</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map(record => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <div className="p-2 mr-3 bg-medical-light rounded">
                      <FileText size={18} className="text-medical-primary" />
                    </div>
                    <span>{record.title}</span>
                  </div>
                </TableCell>
                <TableCell>{record.type}</TableCell>
                <TableCell>{record.provider}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Download size={16} className="text-medical-primary" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Print</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MedicalRecordsList;

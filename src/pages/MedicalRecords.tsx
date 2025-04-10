
import React from 'react';
import MedicalRecordsList from '@/components/records/MedicalRecordsList';

const MedicalRecords: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-medical-dark">Medical Records</h1>
      </div>
      
      <div className="bg-white rounded-lg p-4 mb-6">
        <p className="text-medical-gray-dark mb-4">
          Your medical records are kept secure and private. You can view, download, and share your records with other healthcare providers as needed.
        </p>
        <div className="bg-blue-50 border-l-4 border-medical-primary p-4 rounded">
          <h3 className="font-medium text-medical-primary mb-1">Privacy Notice</h3>
          <p className="text-sm text-medical-gray-dark">
            All your medical records are protected under HIPAA regulations. We take your privacy seriously and ensure all data is encrypted and securely stored.
          </p>
        </div>
      </div>
      
      <MedicalRecordsList />
    </div>
  );
};

export default MedicalRecords;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  ClipboardList, 
  Home, 
  MessageSquare, 
  User, 
  FileText, 
  Pill, 
  Settings,
  Shield 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: ClipboardList, label: 'Medical Records', path: '/medical-records' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Pill, label: 'Medications', path: '/medications' },
    { icon: FileText, label: 'Lab Results', path: '/lab-results' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: Shield, label: 'Privacy', path: '/privacy' },
  ];

  const MenuItem = ({ icon: Icon, label, path }: { icon: any; label: string; path: string }) => {
    const isActive = location.pathname === path;
    
    return (
      <Link 
        to={path} 
        className={cn(
          "flex items-center space-x-3 p-3 rounded-md transition-colors",
          isActive 
            ? "bg-sidebar-accent text-sidebar-primary font-medium" 
            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary"
        )}
      >
        <Icon size={20} />
        <span className={cn(isOpen ? "opacity-100" : "opacity-0 invisible", "transition-opacity")}>{label}</span>
      </Link>
    );
  };

  return (
    <aside 
      className={cn(
        "bg-sidebar h-screen flex flex-col border-r border-border transition-all duration-300 overflow-hidden",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex-1 py-6 px-2 flex flex-col space-y-1">
        {menuItems.map((item) => (
          <MenuItem key={item.path} icon={item.icon} label={item.label} path={item.path} />
        ))}
      </div>
      
      <div className="py-6 px-2 space-y-1 border-t border-border">
        {bottomItems.map((item) => (
          <MenuItem key={item.path} icon={item.icon} label={item.label} path={item.path} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

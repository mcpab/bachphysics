import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpIcon from '@mui/icons-material/Help';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface IconPickerProps {
    name: string;
}

const IconPicker: React.FC<IconPickerProps> = ({ name }) => {
    const lowerCaseName = name.toLowerCase();

    switch (lowerCaseName) {
        case 'home':
            return <HomeIcon sx={{ mr: 1 }} />;
        case 'settings':
            return <SettingsIcon sx={{ mr: 1 }} />;
        case 'profile':
            return <AccountCircleIcon sx={{ mr: 1 }} />;
        case 'info':
            return <InfoIcon sx={{ mr: 1 }} />;
        case 'contact':
            return <ContactMailIcon sx={{ mr: 1 }} />;
        case 'help':
            return <HelpIcon sx={{ mr: 1 }} />;
        case 'dashboard':
            return <DashboardIcon sx={{ mr: 1 }} />;
        case 'notifications':
            return <NotificationsIcon sx={{ mr: 1 }} />;
        case 'logout':
            return <ExitToAppIcon sx={{ mr: 1 }} />;
        case 'login':
            return <LoginIcon sx={{ mr: 1 }} />;
        default:
            return <ArrowRightIcon sx={{ mr: 0 }} />; // Default case with HelpOutline icon
    }
};

export default IconPicker;
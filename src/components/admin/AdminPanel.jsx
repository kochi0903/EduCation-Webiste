import DashboardContent from './SidebarContent/DashboardContent';
import UsersContent from './SidebarContent/UsersContent';
import CoursesContent from './SidebarContent/CoursesContent';
import EnrollmentsContent from './SidebarContent/EnrollmentsContent';
import AnalyticsContent from './SidebarContent/AnalyticsContent';
import MessagesContent from './SidebarContent/MessagesContent';
import SettingsContent from './SidebarContent/SettingsContent';
import { useState } from 'react';
import Sidebar from './Sidebar';

const AdminPanel = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    // Function to render content based on activeItem
    const renderContent = () => {
        switch (activeItem) {
            case 'Dashboard':
                return <DashboardContent />;
            case 'Users':
                return <UsersContent />;
            case 'Courses':
                return <CoursesContent />;
            case 'Enrollments':
                return <EnrollmentsContent />;
            case 'Analytics':
                return <AnalyticsContent />;
            case 'Messages':
                return <MessagesContent />;
            case 'Settings':
                return <SettingsContent />;
            default:
                return <DashboardContent />;
        }
    };

    return (
        <div className="flex h-screen font-sans bg-gray-100">
            {/* Tailwind CSS CDN */}
            <script src="https://cdn.tailwindcss.com"></script>
            {/* Inter Font */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <style>
                {`
              body {
                font-family: 'Inter', sans-serif;
              }
            `}
            </style>

            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
            {renderContent()} {/* Render content based on active sidebar item */}
        </div>
    );
}

export default AdminPanel;
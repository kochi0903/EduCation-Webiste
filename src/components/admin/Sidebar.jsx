import React from 'react';
import {
    Home, Users, BookOpen, LayoutDashboard, Settings, BarChart2, PieChart, Bell, ClipboardList, GraduationCap, DollarSign, MessageSquare
} from 'lucide-react'; // Using lucide-react for icons

const Sidebar = ({ activeItem, setActiveItem }) => {
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard },
        { name: 'Users', icon: Users },
        { name: 'Courses', icon: BookOpen },
        { name: 'Enrollments', icon: GraduationCap },
        { name: 'Analytics', icon: BarChart2 },
        { name: 'Messages', icon: MessageSquare },
        { name: 'Settings', icon: Settings },
    ];

    return (
        <div className="w-64 bg-primary-500 text-neutral-900 h-screen p-6 flex flex-col shadow-lg rounded-r-lg">
            <div className="text-3xl font-extrabold mb-10 text-center tracking-wide">
                EduRuz <span className="block text-sm font-medium opacity-80">Admin Panel</span>
            </div>
            <nav className="flex-grow">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name} className="mb-3">
                            <button
                                onClick={() => setActiveItem(item.name)}
                                className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ease-in-out
                  ${activeItem === item.name ? 'bg-yellow-600 text-white shadow-md transform scale-105' : 'hover:bg-yellow-500 hover:text-yellow-100'}`}
                            >
                                <item.icon className="mr-3 w-5 h-5" />
                                <span className="font-medium text-lg">{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-auto pt-6 border-t border-yellow-700 text-sm opacity-80">
                © 2025 EduRuz. All rights reserved.
            </div>
        </div>
    );
};

export default Sidebar;

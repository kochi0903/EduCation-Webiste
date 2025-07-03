import React from 'react'
import { BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
    Home, Users, BookOpen, LayoutDashboard, Settings, BarChart2, PieChart, Bell, ClipboardList, GraduationCap, DollarSign, MessageSquare
} from 'lucide-react';

const DashboardContent = () => {
    const COLORS = ['#FFBB28', '#FF8042', '#00C49F', '#0088FE', '#AF19FF', '#FF0000']; // Yellow, Orange, Green, Blue, Purple, Red
    // Dummy Data for the Dashboard
    const dashboardData = {
        totalUsers: 1250,
        activeCourses: 85,
        newEnrollmentsToday: 12,
        revenueThisMonth: 15200,
        userGrowth: [
            { name: 'Jan', users: 400 },
            { name: 'Feb', users: 300 },
            { name: 'Mar', users: 600 },
            { name: 'Apr', users: 800 },
            { name: 'May', users: 750 },
            { name: 'Jun', users: 900 },
        ],
        coursePopularity: [
            { name: 'Mathematics', students: 400 },
            { name: 'Science', students: 300 },
            { name: 'History', students: 200 },
            { name: 'Literature', students: 100 },
            { name: 'Programming', students: 500 },
        ],
        recentEnrollments: [
            { id: 1, student: 'Alice Johnson', course: 'Algebra I', date: '2025-06-30' },
            { id: 2, student: 'Bob Williams', course: 'Web Dev Basics', date: '2025-06-29' },
            { id: 3, student: 'Charlie Brown', course: 'Physics 101', date: '2025-06-28' },
            { id: 4, student: 'Diana Miller', course: 'Creative Writing', date: '2025-06-27' },
            { id: 5, student: 'Eve Davis', course: 'Data Science Intro', date: '2025-06-26' },
        ],
    };
    return (
        <div className="flex-1 p-8 overflow-y-auto bg-yellow-50 rounded-l-lg">
            <h1 className="text-4xl font-bold text-yellow-800 mb-8 pb-4 border-b-2 border-yellow-300">
                Admin Dashboard
            </h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between border-l-4 border-yellow-500">
                    <div>
                        <div className="text-sm text-gray-500 font-semibold mb-1">Total Users</div>
                        <div className="text-3xl font-bold text-yellow-700">{dashboardData.totalUsers}</div>
                    </div>
                    <Users className="text-yellow-500 opacity-70 w-10 h-10" />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between border-l-4 border-yellow-500">
                    <div>
                        <div className="text-sm text-gray-500 font-semibold mb-1">Active Courses</div>
                        <div className="text-3xl font-bold text-yellow-700">{dashboardData.activeCourses}</div>
                    </div>
                    <BookOpen className="text-yellow-500 opacity-70 w-10 h-10" />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between border-l-4 border-yellow-500">
                    <div>
                        <div className="text-sm text-gray-500 font-semibold mb-1">New Enrollments Today</div>
                        <div className="text-3xl font-bold text-yellow-700">{dashboardData.newEnrollmentsToday}</div>
                    </div>
                    <GraduationCap className="text-yellow-500 opacity-70 w-10 h-10" />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between border-l-4 border-yellow-500">
                    <div>
                        <div className="text-sm text-gray-500 font-semibold mb-1">Revenue This Month</div>
                        <div className="text-3xl font-bold text-yellow-700">${dashboardData.revenueThisMonth.toLocaleString()}</div>
                    </div>
                    <DollarSign className="text-yellow-500 opacity-70 w-10 h-10" />
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                {/* User Growth Bar Chart */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold text-yellow-800 mb-4">User Growth (Last 6 Months)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={dashboardData.userGrowth}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.3)' }} />
                            <Legend />
                            <Bar dataKey="users" fill="#FACC15" name="New Users" radius={[10, 10, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Course Popularity Pie Chart */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold text-yellow-800 mb-4">Course Popularity</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <RechartsPieChart>
                            <Pie
                                data={dashboardData.coursePopularity}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="students"
                                nameKey="name"
                            >
                                {dashboardData.coursePopularity.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend layout="vertical" align="right" verticalAlign="middle" />
                        </RechartsPieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Enrollments Table */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-yellow-800 mb-4">Recent Enrollments</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-yellow-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider rounded-tl-lg">
                                    Enrollment ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Student Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Course
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider rounded-tr-lg">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {dashboardData.recentEnrollments.map((enrollment) => (
                                <tr key={enrollment.id} className="hover:bg-yellow-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        #{enrollment.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {enrollment.student}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {enrollment.course}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {enrollment.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;
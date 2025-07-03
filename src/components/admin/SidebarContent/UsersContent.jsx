import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, X, Users } from 'lucide-react'; // Import necessary icons

// Dummy Data for Users Management
const initialUsers = [
    { id: 'U001', name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Student', status: 'Active' },
    { id: 'U002', name: 'Bob Williams', email: 'bob.w@example.com', role: 'Instructor', status: 'Active' },
    { id: 'U003', name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'Student', status: 'Inactive' },
    { id: 'U004', name: 'Diana Miller', email: 'diana.m@example.com', role: 'Admin', status: 'Active' },
    { id: 'U005', name: 'Eve Davis', email: 'eve.d@example.com', role: 'Student', status: 'Active' },
];

const UsersContent = () => {
    const [users, setUsers] = useState(initialUsers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null); // For editing

    // State for form inputs
    const [form, setForm] = useState({
        id: '',
        name: '',
        email: '',
        role: 'Student',
        status: 'Active',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Open modal for adding a new user
    const handleAddClick = () => {
        setCurrentUser(null);
        setForm({
            id: `U${String(users.length + 1).padStart(3, '0')}`, // Generate simple ID
            name: '',
            email: '',
            role: 'Student',
            status: 'Active',
        });
        setIsModalOpen(true);
    };

    // Open modal for editing an existing user
    const handleEditClick = (user) => {
        setCurrentUser(user);
        setForm({ ...user });
        setIsModalOpen(true);
    };

    // Handle form submission (Add or Update)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentUser) {
            // Update existing user
            setUsers((prevUsers) =>
                prevUsers.map((user) => (user.id === form.id ? form : user))
            );
        } else {
            // Add new user
            setUsers((prevUsers) => [...prevUsers, form]);
        }
        setIsModalOpen(false);
    };

    // Handle user deletion
    const handleDeleteClick = (id) => {
        // IMPORTANT: Do NOT use confirm() or alert(). Use a custom modal for confirmation.
        // For this example, we'll keep it simple, but in a real app, replace window.confirm
        // with a custom modal component.
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        }
    };

    return (
        <div className="flex-1 p-8 overflow-y-auto bg-yellow-50 rounded-l-lg">
            {/* Tailwind CSS CDN and Inter Font (for standalone use, normally in main App) */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <style>
                {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
            </style>

            <h1 className="text-4xl font-bold text-yellow-800 mb-8 pb-4 border-b-2 border-yellow-300">
                User Management
            </h1>

            <div className="flex justify-end mb-6">
                <button
                    onClick={handleAddClick}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    <Plus className="mr-2 w-5 h-5" /> Add New User
                </button>
            </div>

            {/* Users List Table */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-yellow-800 mb-4">All Users</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-yellow-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider rounded-tl-lg">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider rounded-tr-lg">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-yellow-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {user.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {user.role}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => handleEditClick(user)}
                                            className="text-yellow-600 hover:text-yellow-900 mr-3 transition-colors"
                                            title="Edit User"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(user.id)}
                                            className="text-red-600 hover:text-red-900 transition-colors"
                                            title="Delete User"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit User Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                            title="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold text-yellow-800 mb-6 border-b pb-3 border-yellow-200">
                            {currentUser ? 'Edit User' : 'Add New User'}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                                    Role
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    className="shadow border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                                >
                                    <option value="Student">Student</option>
                                    <option value="Instructor">Instructor</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
                                    Status
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="shadow border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
                                >
                                    {currentUser ? 'Update User' : 'Add User'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersContent;

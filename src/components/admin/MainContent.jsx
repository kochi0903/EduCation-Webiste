const MainContent = ({
    currentView,
    users,
    newUser,
    setNewUser,
    editingUser,
    setEditingUser,
    handleUserSubmit,
    handleDeleteUser,
    handleEditUser,
    __app_id // __app_id is used in the user management section for Firestore paths
}) => {
    switch (currentView) {
        case 'dashboard':
            return (
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
                    <p className="text-gray-600">Welcome to the EduRuz Admin Panel. Here you can get an overview of your website's performance and key metrics.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-800">Total Users</h3>
                            <p className="text-4xl font-bold text-blue-600 mt-2">1,234</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-green-800">Active Courses</h3>
                            <p className="text-4xl font-bold text-green-600 mt-2">56</p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-yellow-800">New Enrollments Today</h3>
                            <p className="text-4xl font-bold text-yellow-600 mt-2">12</p>
                        </div>
                    </div>
                </div>
            );
        case 'users':
            return (
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">User Management</h1>

                    {/* User Add/Edit Form */}
                    <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-inner">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{editingUser ? 'Edit User' : 'Add New User'}</h2>
                        <form onSubmit={handleUserSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
                                <input
                                    type="text"
                                    id="userId"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                    value={newUser.id}
                                    onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
                                    required
                                    disabled={!!editingUser} // Disable ID field when editing
                                />
                            </div>
                            <div>
                                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="userName"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="userEmail"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="userRole" className="block text-sm font-medium text-gray-700">Role</label>
                                <select
                                    id="userRole"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                >
                                    <option value="student">Student</option>
                                    <option value="instructor">Instructor</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                            >
                                {editingUser ? 'Update User' : 'Add User'}
                            </button>
                            {editingUser && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setEditingUser(null);
                                        setNewUser({ id: '', name: '', email: '', role: 'student' });
                                    }}
                                    className="ml-4 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                            )}
                        </form>
                    </div>

                    {/* Users List */}
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Existing Users</h2>
                    {users.length === 0 ? (
                        <p className="text-gray-500">No users found. Add some users above!</p>
                    ) : (
                        <div className="overflow-x-auto rounded-lg shadow-md">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 break-all">{user.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleEditUser(user)}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4 transition-colors duration-200"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteUser(user.id)}
                                                    className="text-red-600 hover:text-red-900 transition-colors duration-200"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            );
        case 'courses':
            return (
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Course Management</h1>
                    <p className="text-gray-600">Manage your courses here. Add new courses, edit existing ones, or remove old courses.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-purple-800">Add New Course</h3>
                            <p className="text-gray-700 mt-2">Form to add new courses will go here.</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-purple-800">Course List</h3>
                            <p className="text-gray-700 mt-2">Table listing all courses with edit/delete options.</p>
                        </div>
                    </div>
                </div>
            );
        case 'content':
            return (
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Content Management</h1>
                    <p className="text-gray-600">Manage educational content like lessons, quizzes, and assignments.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-teal-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-teal-800">Upload New Content</h3>
                            <p className="text-gray-700 mt-2">Interface for uploading new content files and descriptions.</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-teal-800">Content Library</h3>
                            <p className="text-gray-700 mt-2">Browse and manage existing content items.</p>
                        </div>
                    </div>
                </div>
            );
        case 'settings':
            return (
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
                    <p className="text-gray-600">Configure general settings for the EduRuz website.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-orange-800">General Settings</h3>
                            <p className="text-gray-700 mt-2">Options for site name, theme, etc.</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-orange-800">Integration Settings</h3>
                            <p className="text-gray-700 mt-2">API keys and third-party service configurations.</p>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default MainContent;

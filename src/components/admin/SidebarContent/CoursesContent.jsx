import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, X, BookOpen } from 'lucide-react'; // Import necessary icons

// Dummy Data for Courses Management
const initialCourses = [
    { id: 'C001', title: 'Introduction to React', instructor: 'Jane Doe', duration: '8 weeks', students: 150, status: 'Active' },
    { id: 'C002', title: 'Advanced Python Programming', instructor: 'John Smith', duration: '12 weeks', students: 90, status: 'Active' },
    { id: 'C003', title: 'Digital Marketing Fundamentals', instructor: 'Emily White', duration: '6 weeks', students: 210, status: 'Active' },
    { id: 'C004', title: 'Data Science with R', instructor: 'David Green', duration: '10 weeks', students: 75, status: 'Archived' },
    { id: 'C005', title: 'Graphic Design Basics', instructor: 'Sarah Brown', duration: '7 weeks', students: 180, status: 'Active' },
];

const CoursesContent = () => {
    const [courses, setCourses] = useState(initialCourses);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCourse, setCurrentCourse] = useState(null); // For editing

    // State for form inputs
    const [form, setForm] = useState({
        id: '',
        title: '',
        instructor: '',
        duration: '',
        students: '',
        status: 'Active',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Open modal for adding a new course
    const handleAddClick = () => {
        setCurrentCourse(null);
        setForm({
            id: `C${String(courses.length + 1).padStart(3, '0')}`, // Generate simple ID
            title: '',
            instructor: '',
            duration: '',
            students: '',
            status: 'Active',
        });
        setIsModalOpen(true);
    };

    // Open modal for editing an existing course
    const handleEditClick = (course) => {
        setCurrentCourse(course);
        setForm({ ...course });
        setIsModalOpen(true);
    };

    // Handle form submission (Add or Update)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentCourse) {
            // Update existing course
            setCourses((prevCourses) =>
                prevCourses.map((course) => (course.id === form.id ? form : course))
            );
        } else {
            // Add new course
            setCourses((prevCourses) => [...prevCourses, form]);
        }
        setIsModalOpen(false);
    };

    // Handle course deletion
    const handleDeleteClick = (id) => {
        // IMPORTANT: Do NOT use confirm() or alert(). Use a custom modal for confirmation.
        // For this example, we'll keep it simple, but in a real app, replace window.confirm
        // with a custom modal component.
        if (window.confirm('Are you sure you want to delete this course?')) {
            setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
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
                Course Management
            </h1>

            <div className="flex justify-end mb-6">
                <button
                    onClick={handleAddClick}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    <Plus className="mr-2 w-5 h-5" /> Add New Course
                </button>
            </div>

            {/* Courses List Table */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-yellow-800 mb-4">All Courses</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-yellow-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider rounded-tl-lg">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Instructor
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Duration
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Students
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
                            {courses.map((course) => (
                                <tr key={course.id} className="hover:bg-yellow-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {course.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {course.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {course.instructor}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {course.duration}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {course.students}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${course.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                                        >
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => handleEditClick(course)}
                                            className="text-yellow-600 hover:text-yellow-900 mr-3 transition-colors"
                                            title="Edit Course"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(course.id)}
                                            className="text-red-600 hover:text-red-900 transition-colors"
                                            title="Delete Course"
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

            {/* Add/Edit Course Modal */}
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
                            {currentCourse ? 'Edit Course' : 'Add New Course'}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                                    Course Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="instructor" className="block text-gray-700 text-sm font-bold mb-2">
                                    Instructor
                                </label>
                                <input
                                    type="text"
                                    id="instructor"
                                    name="instructor"
                                    value={form.instructor}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">
                                    Duration
                                </label>
                                <input
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    value={form.duration}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="students" className="block text-gray-700 text-sm font-bold mb-2">
                                    Number of Students
                                </label>
                                <input
                                    type="number"
                                    id="students"
                                    name="students"
                                    value={form.students}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                                    required
                                />
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
                                    <option value="Archived">Archived</option>
                                    <option value="Draft">Draft</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
                                >
                                    {currentCourse ? 'Update Course' : 'Add Course'}
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

export default CoursesContent;

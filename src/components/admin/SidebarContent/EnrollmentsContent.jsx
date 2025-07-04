import React from 'react'

const EnrollmentsContent = () => {
    return (
        <div className="flex-1 p-8 overflow-y-auto bg-yellow-50 rounded-l-lg">
            <h1 className="text-4xl font-bold text-yellow-800 mb-8 pb-4 border-b-2 border-yellow-300">
                Enrollment Records
            </h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">View and manage student enrollments in various courses.</p>
                {/* Add more enrollment UI elements here */}
                <div className="mt-4 p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">Enrollment Details (Placeholder)</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Student A enrolled in Course X on Y date.</li>
                        <li>Student B enrolled in Course Z on W date.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EnrollmentsContent
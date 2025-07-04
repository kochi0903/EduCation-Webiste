import React from 'react'

const SettingsContent = () => {
    return (
        <div className="flex-1 p-8 overflow-y-auto bg-yellow-50 rounded-l-lg">
            <h1 className="text-4xl font-bold text-yellow-800 mb-8 pb-4 border-b-2 border-yellow-300">
                Admin Settings
            </h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">Configure various settings for the EduRuz platform.</p>
                {/* Add settings UI here */}
                <div className="mt-4 p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">General Settings (Placeholder)</h3>
                    <p className="text-gray-600">Update site preferences, user roles, etc.</p>
                </div>
            </div>
        </div>
    )
}

export default SettingsContent
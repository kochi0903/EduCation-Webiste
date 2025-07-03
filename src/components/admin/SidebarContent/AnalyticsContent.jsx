import React from 'react'

const AnalyticsContent = () => {
    return (
        <div className="flex-1 p-8 overflow-y-auto bg-yellow-50 rounded-l-lg">
            <h1 className="text-4xl font-bold text-yellow-800 mb-8 pb-4 border-b-2 border-yellow-300">
                Detailed Analytics
            </h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">Access in-depth analytics and reports about user activity, course performance, and revenue.</p>
                {/* Add more analytics charts/tables here */}
                <div className="mt-4 p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">Reports (Placeholder)</h3>
                    <p className="text-gray-600">More charts and data visualizations will appear here.</p>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsContent
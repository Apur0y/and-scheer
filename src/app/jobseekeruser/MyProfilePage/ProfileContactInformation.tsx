import React from 'react'

export default function ProfileContactInformation() {
  return (
    <div>
         <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information & Social Links</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">LinkedIn</p>
                    <p className="text-xs text-gray-600">linkedin.com/in/username</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Behance</p>
                    <p className="text-xs text-gray-600">behance.net/username</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-300 rounded"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Dribbble</p>
                    <p className="text-xs text-gray-600">dribbble.com/username</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Facebook</p>
                    <p className="text-xs text-gray-600">facebook.com/username</p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

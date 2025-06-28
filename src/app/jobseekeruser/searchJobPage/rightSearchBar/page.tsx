import { Star } from 'lucide-react'
import React from 'react'

export default function SerachRightSideBar() {
  return (
    <div>
        <div className="w-80 bg-white p-6 border-l border-gray-200 h-screen overflow-y-auto">
      {/* Top Company Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Top Company</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SM</span>
            </div>
            <div>
              <h3 className="font-semibold">SM Technology</h3>
              <p className="text-sm text-gray-500">Software Company</p>
            </div>
          </div>
          <div className="w-full h-24 bg-gray-200 rounded-lg mb-3 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-sm">Office Interior</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.9</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-500">
              <span>Active Company</span>
              <span>58 Employee</span>
              <span>Top 10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Course Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Suggested Course</h2>
        <div className="space-y-4">
          {/* Course 1 */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-4 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">GRAPHICS DESIGN</h3>
              <div className="mb-3">
                <h4 className="font-semibold">Graphic Design Masterclass</h4>
                <p className="text-sm opacity-90">Instructor: Rafiul Rahman</p>
              </div>
              <button className="bg-white text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100">
                See Details
              </button>
            </div>
            <div className="absolute right-0 top-0 w-24 h-24 bg-yellow-400 rounded-full opacity-20 transform translate-x-8 -translate-y-8"></div>
          </div>

          {/* Course 2 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">GRAPHICS DESIGN</h3>
              <div className="mb-3">
                <h4 className="font-semibold">Graphic Design Masterclass</h4>
                <p className="text-sm opacity-90">Instructor: Rafiul Rahman</p>
              </div>
              <button className="bg-white text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100">
                See Details
              </button>
            </div>
            <div className="absolute right-0 top-0 w-24 h-24 bg-pink-400 rounded-full opacity-20 transform translate-x-8 -translate-y-8"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

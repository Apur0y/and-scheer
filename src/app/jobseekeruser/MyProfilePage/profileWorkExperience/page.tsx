import React from 'react'

export default function ProfileWorkExperience() {
  return (
    <div>
        <div className=" p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
              
              {/* Experience 3 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Experience 3</h3>
                <p className="text-sm text-gray-600 mb-2">Mid-Level/Senior UI/UX Designer</p>
                <p className="text-sm text-gray-500 mb-3">Company Name | Duration</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• Key responsibility or achievement</p>
                  <p>• Project leadership experience</p>
                  <p>• Design process improvement</p>
                  <p>• Team collaboration</p>
                  <p>• Client interaction</p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Experience 2</h3>
                <p className="text-sm text-gray-600 mb-2">UI/UX Designer</p>
                <p className="text-sm text-gray-500 mb-3">Company Name | Duration</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• Design execution</p>
                  <p>• User research</p>
                  <p>• Prototyping</p>
                  <p>• Design systems</p>
                  <p>• Cross-functional collaboration</p>
                </div>
              </div>

              {/* Experience 1 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Experience 1</h3>
                <p className="text-sm text-gray-600 mb-2">Junior UI/UX Designer</p>
                <p className="text-sm text-gray-500 mb-3">Company Name | Duration</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• Entry-level design tasks</p>
                  <p>• Learning design principles</p>
                  <p>• Supporting senior designers</p>
                  <p>• Basic user research</p>
                  <p>• Design tool proficiency</p>
                </div>
              </div>
            </div>
    </div>
  )
}

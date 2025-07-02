import React from 'react'

export default function ProfileEducationAndCertificate() {
  return (
    <div>
             <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Education & Certifications</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">EDUCATIONS</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Master's Degree</p>
                      <p className="text-xs text-gray-600">University Name</p>
                      <p className="text-xs text-gray-500">Year - Year</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Bachelor Degree</p>
                      <p className="text-xs text-gray-600">University Name</p>
                      <p className="text-xs text-gray-500">Year - Year</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Diploma</p>
                      <p className="text-xs text-gray-600">Institution Name</p>
                      <p className="text-xs text-gray-500">Year - Year</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">CERTIFICATIONS</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Google UX Design Certificate</p>
                      <p className="text-xs text-gray-500">Issued Year</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Adobe Certified</p>
                      <p className="text-xs text-gray-500">Issued Year</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">HFI Certification</p>
                      <p className="text-xs text-gray-500">Issued Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}



export default function MyResumeProfile() {

  

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-start justify-between">
            {/* Left Side - Name and Title */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">SAIFUL RAHMAN</h1>
              <p className="text-xl text-gray-600 mb-4">UI/UX Designer</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📧 Email</p>
                <p>📱 Phone</p>
                <p>🌐 Location</p>
                <p>💼 LinkedIn</p>
              </div>
            </div>

            {/* Center - Profile Image */}
            <div className="mx-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-orange-400 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-orange-300"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Career Summary */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Summary</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Job Title</p>
                <p>• Years of Experience</p>
                <p>• Key Skills Summary</p>
                <p>• Professional Summary</p>
                <p>• Career Highlights</p>
                <p>• Industry Experience</p>
                <p>• Notable Achievements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-8 space-y-8">
            {/* Work Experience */}
            <div className="bg-white rounded-lg shadow-sm p-8">
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

            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Design Tools</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Prototyping</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">User Research</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">HTML/CSS</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Soft Skills</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Communication</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Problem Solving</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Team Collaboration</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Time Management</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-4 space-y-8">
            {/* Education & Certifications */}
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

            {/* Contact Information & Social Links */}
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
        </div>
      </div>
    </div>
  );
}
import React from 'react'

export default function ProfileSkills() {
  return (
    <div>
                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
              
        <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS'].map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm font-medium"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
  )
}

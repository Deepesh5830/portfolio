import React from 'react';

const skillsData = [
  { id: 1, name: 'React.js', percentage: 90, color: 'bg-yellow-500' },
  { id: 2, name: 'Next.js', percentage: 80, color: 'bg-blue-500' },
  { id: 3, name: 'JavaScript', percentage: 75, color: 'bg-green-500' },
  { id: 4, name: 'Node.js', percentage: 85, color: 'bg-red-500' },
  { id: 6, name: 'HTML5', percentage: 95, color: 'bg-orange-500' },
  { id: 7, name: 'CSS3', percentage: 90, color: 'bg-indigo-500' },
  { id: 8, name: 'MongoDB', percentage: 80, color: 'bg-teal-500' },
  { id: 9, name: 'MySql', percentage: 50, color: 'bg-red-500' },
  { id: 10, name: 'Git', percentage: 75, color: 'bg-pink-500' },
  { id: 11, name: 'Deployment', percentage: 40, color: 'bg-gray-500' },
];

const MySkills = () => {
  return (
    <div className="max-w-[1120px] container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map(skill => (
          <div key={skill.id} className="mb-4">
            <h3 className="text-xl font-medium text-white mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className={`${skill.color} h-6 rounded-full flex items-center justify-center text-white text-sm font-bold`}
                style={{ width: `${skill.percentage}%` }}
              >
                {skill.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
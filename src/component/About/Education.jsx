import React from 'react';

const EducationCard = ({ institution, degree, fieldOfStudy, startDate, endDate,Course}) => {
    return (
        <div className="bg-[#FFFFFF1A] shadow-lg rounded-lg p-6 max-w-[550px] w-full">
            <h2 className="text-xl font-bold mb-2 text-yellow-500">{institution}</h2>
            <p className="text-white mb-1"><strong>{Course}:</strong> {degree}</p>
            <p className="text-white mb-1"><strong>Field of Study:</strong> {fieldOfStudy}</p>
            <p className="text-yellow-500 mb-3 font-semibold text-[20px]">
                {startDate} - {endDate ? endDate : 'Present'}
            </p>
        </div>
    );
};

const Education = () => {
    const educationDetails = [
        {
            institution: 'R.G.P.V. University',
            degree: 'Bachelor of Science',
            fieldOfStudy: 'Computer Science',
            startDate: '2017',
            endDate: '2020',
            Course : "Degree"

        },
        {
            institution: 'R.G.P.V. University',
            degree: '3 Years Diploma in Computer Science',
            fieldOfStudy: 'Computer Science',
            startDate: '2014',
            endDate: '2017',
            Course: "Diploma"
        },
    ];

    return (
        <div className="flex justify-between py-20 flex-wrap gap-5">
            {educationDetails.map((edu, index) => (
                <EducationCard key={index} {...edu} />
            ))}
        </div>
    );
};

export default Education;

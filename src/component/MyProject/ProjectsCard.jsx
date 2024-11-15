import React from 'react';

const projectsData = [
    {
        title: 'Abanonya Dating App',
        image: 'http://res.cloudinary.com/dfckycekq/image/upload/v1731648012/y6xdevhdah2exlgdv0jg.png',
        link: null,
    },
    {
        title: 'Event Management System (MECOC)',
        image: 'http://res.cloudinary.com/dfckycekq/image/upload/v1731648117/ufh390csvwyfka9p2h74.png',
        link: null,
    },
    {
        title: 'Search And Find Application',
        image: 'http://res.cloudinary.com/dfckycekq/image/upload/v1731648392/k0uybadagoxxu0cpak3e.png',
        link: null,
    },
    {
        title: 'FlickStar OTT',
        image: 'http://res.cloudinary.com/dfckycekq/image/upload/v1731649634/w0pqsctbiq7lqnxlawv5.png',
        link: null,
    },
    {
        title: 'Chat Application',
        image: 'http://res.cloudinary.com/dfckycekq/image/upload/v1731650636/rce2hot7jqnhxpitnazj.png',
        link: null,
    },
    {
        title: 'Hire PhotoGrapher',
        image: 'http://res.cloudinary.com/dfckycekq/image/upload/v1731648661/ivgemlxvfriqkvezetzy.png',
        link: null,
    },
    {
        title: 'Next Day Website',
        image: 'http://res.cloudinary.com/dfckycekq/image/upload/v1731648805/saswp6pqqlvfchokurii.png',
        link: null,
    },
    {
        title: 'Hire PhotoGrapher Admin Panel',
        image: 'http://res.cloudinary.com/dfckycekq/image/upload/v1731648888/j9r0zaje4koqpel8s1wc.png',
        link: null,
    },
];

const ProjectsCard = () => {
    return (
        <div className="max-w-[1120px] container mx-auto py-10 px-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                    <div key={index} className="projects">
                        <div className="project shadow-lg rounded-lg overflow-hidden">
                            <h3 className="text-2xl font-bold px-4 py-2 bg-gray-200">{project.title}</h3>
                            {project?.link ? (
                                <a href={project?.link} target="_blank" rel="noopener noreferrer">
                                    <img className="w-full h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={project?.image} alt={project.title} />
                                </a>
                            ) : (
                                <img className="w-full h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={project?.image} alt={project.title} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsCard;
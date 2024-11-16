import React, { useState } from 'react'
import { FaSortUp } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import projectData from "./Project.json";
import { IoClose } from 'react-icons/io5';

const ProjectDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();
    const project = projectData.find((p) => p.id === parseInt(id));

    const openImageViewer = (image) => {
        setSelectedImage(image);
    };

    const closeImageViewer = () => {
        setSelectedImage(null);
    };

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <div className='flex justify-center bg-black px-5 pt-10'>
            <div className='max-w-full sm:max-w-[1120px] py-6 sm:py-12'>
                <div className='flex flex-col sm:flex-row justify-between my-10 flex-wrap'>
                    <div className='max-w-full sm:max-w-[660px]'>
                        <p className="flex gap-2 text-[20px] mb-6 text-white">
                            Project <h1 className="font-bold text-yellow-500">Description</h1>
                        </p>

                        <p className='mb-6 text-gray-400'>{project?.description}
                        </p>
                        {/* <div className='border-b border-b-p_color mb-6'></div> */}

                    </div>
                    <div className=''>
                        <p className="flex gap-2 text-[20px] mb-6 text-white">
                            Project
                            <h1 className="font-bold text-yellow-500">Details</h1>
                        </p>
                        <div className='flex border-b pb-2 mb-2'>
                            <h3 className='flex items-center text-yellow-300 font-semibold'><FaSortUp className='rotate-90 mr-2' /> Project Name: </h3>
                            <span className='ml-1 text-gray-400'>{project?.projectName}</span>
                        </div>
                        <div className='flex border-b pb-2 mb-2'>
                            <h3 className='flex items-center text-yellow-300 font-semibold'><FaSortUp className='rotate-90 mr-2' /> Project Duration: </h3>
                            <span className='ml-1 text-gray-400'>{project?.projectDuration}</span>
                        </div>
                        <div className='flex border-b pb-2 mb-2'>
                            <h3 className='flex items-center text-yellow-300 font-semibold'><FaSortUp className='rotate-90 mr-2' /> Team Size: </h3>
                            <span className='ml-1 text-gray-400'>
                                {project?.teamSize}
                            </span>
                        </div>
                        {project?.ProjectURL && <div className='flex border-b pb-2 mb-2'>
                            <h3 className='flex items-center text-yellow-300 font-semibold'><FaSortUp className='rotate-90 mr-2' /> Project URL: </h3>
                            <span className='ml-1 text-gray-400'> <a href="http://157.173.222.142" target="_blank" rel="noopener noreferrer">
                                http://157.173.222.142
                            </a></span>
                        </div>}
                    </div>
                </div>

                <div className=" flex justify-center flex-wrap gap-4 mb-10">
                    {project?.image?.map((image, index) => (
                        <img
                            key={index} // Add a key prop for each element
                            src={image}
                            alt={`Project ${index}`} // Updated alt to be more descriptive
                            className='max-w-[550px] w-full h-[350px] opacity-75 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 duration-300'
                            onClick={() => openImageViewer(image)}
                        />
                    ))}
                </div>
                {/* Modal for image viewer */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <img src={selectedImage} alt="Selected" className="max-w-full max-h-[90vh] border-4 border-white" />
                            <button
                                onClick={closeImageViewer}
                                className="absolute top-2 right-2 text-white bg-black rounded-full px-3 py-1 hover:bg-yellow-600"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>
                    </div>
                )}

                <div className='text-center'>
                    <span className='border rounded-full py-2 px-10 cursor-pointer bg-yellow-300 font-semibold' onClick={() => navigate(-1)} >
                        Back
                    </span>
                </div>
            </div>

        </div >
    )
}

export default ProjectDetails
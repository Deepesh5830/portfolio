import React, { useContext } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ActiveTabContext } from '../Navbar/ActiveTabContext';

const Footer = () => {
    const navigate = useNavigate()
    const { setActiveTab } = useContext(ActiveTabContext);
    return (
        <div className='bg-black py-20 px-5 flex justify-center flex-col items-center gap-10'>
            <div className='max-w-[1120px] text-white flex justify-between w-full flex-wrap'>
                <div className='flex flex-col'>
                    <h1 className='text-[20px] font-bold mb-7'>Connect with Me</h1>
                    <p className='max-w-[300px] text-gray-400'>Feel free to reach out and connect with me on various platforms. Stay updated on the latest tech trends, projects, and more:</p>
                    <div className='social-icon flex space-x-4 my-4'>
                        <a href="www.linkedin.com/in/deepesh-kumar-89ba2a250" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/Deepesh5830" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
                <div>
                    <h1 className='text-[20px] font-bold mb-7'>Links</h1>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => { navigate("/"), setActiveTab("home"); }}
                        >
                            <span className="mr-2">&#10148;</span> Home
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/about"),setActiveTab("About");}}
                        >
                            <span className="mr-2">&#10148;</span> About
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/services"),setActiveTab("services")}}
                        >
                            <span className="mr-2">&#10148;</span> Services
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/my_skill"),setActiveTab("Skills")}}
                        >
                            <span className="mr-2">&#10148;</span> Skills
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/my_project"),setActiveTab("Project")}}
                        >
                            <span className="mr-2">&#10148;</span> Project
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/my_contact"),setActiveTab("contact")}}
                        >
                            <span className="mr-2">&#10148;</span> Contact
                        </li>
                    </ul>

                </div>
                <div>
                    <h1 className='text-[20px] font-bold mb-7'>Services</h1>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/services"),setActiveTab("services")}}
                        >
                            <span className="mr-2">&#10148;</span> Full Stack Web Development
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/services"),setActiveTab("services")}}
                        >
                            <span className="mr-2">&#10148;</span> API Development
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/services"),setActiveTab("services")}}
                        >
                            <span className="mr-2">&#10148;</span> Project Management
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/services"),setActiveTab("services")}}
                        >
                            <span className="mr-2">&#10148;</span> Deployment Strategies
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/services"),setActiveTab("services")}}
                        >
                            <span className="mr-2">&#10148;</span> Web Application Security
                        </li>
                        <li className="flex items-center  text-gray-400 hover:text-white"
                            onClick={() => {navigate("/services"),setActiveTab("services")}}
                        >
                            <span className="mr-2">&#10148;</span> Client Collaboration
                        </li>
                    </ul>
                </div>
            </div>
            <div className=' text-white w-full text-center'>Copyright © {new Date().getFullYear()} All rights reserved | This portfolio is crafted with 💗 by me 🙂</div>
        </div>
    )
}

export default Footer
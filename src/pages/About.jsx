import React, { useEffect, useState } from 'react';
import Education from '../component/About/Education';

const About = () => {
    const [isVisible1, setIsVisible1] = useState(window.innerWidth <= 430);
    const handleResize = () => {
        setIsVisible1(window.innerWidth <= 430);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className='bg-black flex justify-center flex-col items-center p-5 '>
            <div className="hero w-full max-w-[1120px] mt-16">

                <div className={`${isVisible1 ? ' hidden' : ''}`}>
                    <img
                        src="http://res.cloudinary.com/dfckycekq/image/upload/v1731647697/qyfguqbsrelhkluqg5wg.png"
                        alt="Hero2"
                        className={`${isVisible1 ? 'relative w-full h-auto  mx-auto opacity-75' : 'w-full h-auto  mx-auto opacity-75'}`}
                    // className='w-full h-auto  mx-auto opacity-75'
                    />
                </div>
                <div className='w-full max-w-[700px] flex flex-col justify-center gap-4'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white self-start'>About Me</h2>

                    <p className='text-gray-400'>
                        Hi! I am an experienced full stack developer with over 1.5 years of experience building dynamic web applications. I specialize in React.js, Next.js, Node.js, TypeScript and MongoDB, MySql, and also have a strong command over HTML, CSS, Tailwind CSS. As a problem solver and effective communicator, I have led projects such as an event management system and a search and find application and Hire Photographer,Flickstart OTT and Chat Application. Let's connect and bring your ideas to life!
                    </p>
                    <div className="rounded shadow-md text-gray-400">
                        <table className="w-full table-auto">
                            <tbody>
                                <tr className="">
                                    <td className="py-2 font-semibold">Name:</td>
                                    <td className="py-2">Deepesh Kumar</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 font-semibold">Date of Birth:</td>
                                    <td className="py-2">Jun 15, 1993</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 font-semibold">Address:</td>
                                    <td className="py-2">Indore</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 font-semibold">Email:</td>
                                    <td className="py-2">
                                        <a href="mailto:deepeshkhurai@gmail.com" className="text-yellow-500">deepeshkhurai@gmail.com</a>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 font-semibold">Phone:</td>
                                    <td className="py-2">
                                        <a href="tel:+917582873793" className="text-yellow-500">+91 7582873793</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 className='text-[20px] font-bold text-white mb-4'>Please download my cv for full details</h2>
                        {/* <button
                            onClick={() => window.location.href = 'https://res.cloudinary.com/dgtrp5bxo/image/upload/v1731746902/jbnh90bokkrocvqilodr.pdf'}
                            className="mt-4 border rounded-full py-2 px-5 cursor-pointer bg-yellow-300 text-black"
                        >
                            Download CV
                        </button> */}
                        <a
                            className="mt-4 border rounded-full py-2 px-5 cursor-pointer bg-yellow-300 text-black"
                            href="http://res.cloudinary.com/dgtrp5bxo/image/upload/v1732016990/z9whulr9bt0ywtez2qfw.pdf" download>
                            Download PDF
                        </a>
                    </div>
                </div>

            </div>

            <div className='w-full max-w-[1120px]'>
                <Education />
            </div>

        </div>
    );
};

export default About;

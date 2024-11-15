import React, { useEffect, useState } from 'react';
import IntroductionVideo from '../component/Home/IntroductionVideo';

const Home = () => {
    const [isVisible1, setIsVisible1] = useState(window.innerWidth <= 430);
    const handleResize = () => {
        setIsVisible1(window.innerWidth <= 430);
    };

    const handleSendMail = () => {
        window.location.href = 'mailto:deepeshkhurai@gmail.com';
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

                <div className={`${isVisible1 ? 'content-text' : 'w-full max-w-[700px] flex flex-col justify-center gap-4'}`}>
                    <h2 className='font-bold text-yellow-500 text-xl sm:text-2xl self-start'>HELLO!</h2>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white self-start type"
                    >
                    I'm <span className='text-yellow-400'> Deepesh Kumar </span>
                    </h2>
                    <p className='font-medium text-lg sm:text-xl md:text-2xl text-yellow-400'>
                        Experience Full Stack Developer | 1.5+ years Expertise in React js, Next js, Node js, TypeScript, MongoDB, MySql, API Integration, and Web Development.
                    </p>
                    <span className='self-start border rounded-full py-2 px-5 cursor-pointer bg-yellow-300 font-semibold mt-2' onClick={handleSendMail}>
                        HIRE ME
                    </span>
                </div>
                <div className={`${isVisible1 ? 'relative' : ''}`}>
                    <img
                        src="http://res.cloudinary.com/dfckycekq/image/upload/v1731647697/qyfguqbsrelhkluqg5wg.png"
                        alt="Hero2"
                        className={`${isVisible1 ? 'relative w-full h-auto  mx-auto opacity-75' : 'w-full h-auto  mx-auto opacity-75'}`}
                    // className='w-full h-auto  mx-auto opacity-75'
                    />
                </div>
            </div>
            <div className='mt-10'>
                <IntroductionVideo />
            </div>
        </div>
    );
};

export default Home;

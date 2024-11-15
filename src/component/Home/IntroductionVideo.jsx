import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const IntroductionVideo = () => {

  const [isVisible1, setIsVisible1] = useState(window.innerWidth <= 530);
  const handleResize = () => {
    setIsVisible1(window.innerWidth <= 530);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className='flex justify-center bg-black flex-col content-center items-center py-10 mb-5'>
      <div className='py-10'>
        <h1 className='text-white font-bold text-[44px]'>A Glimpse Into My World</h1>
        <h6 className='text-white'>Take a moment to watch this introductory video and get to know me better.</h6>
      </div>
      <div className="relative max-w-[1120px]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=o8cbvazyFoQ"
          // url="\public\introduction.mp4"
          controls
          width={`${isVisible1 ? "100%" : "1120px"} `}
          // height="100%"
        />
      </div>
    </div>
  );
};

export default IntroductionVideo;

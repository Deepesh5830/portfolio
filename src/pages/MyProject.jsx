import React from 'react'
import ProjectsCard from '../component/MyProject/ProjectsCard'

const MyProject = () => {
    return (
        <div className='py-24 px-5 bg-black flex justify-center flex-col items-center gap-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white'>My Projects</h1>
            <p className='text-gray-400 max-w-[1120px] text-center'>  I have successfully managed a diverse portfolio of projects, ranging from small-scale initiatives to large-scale endeavors. Below, I present key highlights of some of my major projects.</p>
            <ProjectsCard/>
        </div>
    )
}

export default MyProject
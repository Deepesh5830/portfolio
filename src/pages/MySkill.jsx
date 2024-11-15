import React from 'react'
import MySkills from '../component/MySkills/MySkills'

const MySkill = () => {
    return (
        <div className='py-24 px-5 bg-black flex justify-center flex-col items-center gap-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white'>My Skills</h1>
            <p className='text-gray-400 max-w-[1120px] text-center'> Dive into the realm of my technical expertise and skills that power my journey in web development.
            I bring proficiency in a versatile set of technologies and frameworks to the table. Here's a snapshot of my skills:</p>
            <MySkills />
        </div>
    )
}

export default MySkill
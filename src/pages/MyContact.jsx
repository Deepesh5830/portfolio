import React from 'react'
import Contact from '../component/MyContact/Contact'

const MyContact = () => {
    return (
        <div className='py-24 px-5 bg-black flex justify-center flex-col items-center gap-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white'>My Contact</h1>
            <p className='text-gray-400 max-w-[1120px] text-center'>Have a project in mind or just want to say hello? Feel free to reach out. I’m always open to new opportunities and collaborations. Your ideas are important, and I’m here to bring them to life.</p>
            <Contact/>
        </div>
    )
}

export default MyContact
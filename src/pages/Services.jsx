import React from 'react'
import ServicesCard from '../component/Services/ServicesCard'
import 'font-awesome/css/font-awesome.min.css';

const Services = () => {
    return (
        <div className='py-24 px-5 bg-black flex justify-center flex-col items-center gap-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white'>Services</h1>
            <p className='text-gray-400 max-w-[1120px] text-center'>Welcome to a world of innovative solutions and seamless development. As a Full Stack Developer with a diverse skill set, I offer a range of services to meet your digital needs. Here's how I can contribute to your projects:</p>
            <ServicesCard />
        </div>
    )
}

export default Services
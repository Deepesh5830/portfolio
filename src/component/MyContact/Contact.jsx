import React, { useEffect, useState } from 'react';
import { FaMapSigns, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
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
        <div className="max-w-[1120px] container mx-auto px-4">

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <div className="p-6 text-center text-white shadow-lg rounded-md">
                    <div className="flex justify-center mb-4 text-3xl text-yellow-500">
                        <FaMapSigns size={60} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p>City - Khurai, Teh - Khurai, Dist - Sagar, (M.P.) Pin - 470117</p>
                </div>

                <div className="p-6 text-center text-white shadow-lg rounded-md">
                    <div className="flex justify-center mb-4 text-3xl text-yellow-500">
                        <FaPhone size={60} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Contact Number</h3>
                    <p>+917582873793</p>
                </div>

                <div className="p-6 text-center text-white  shadow-lg rounded-md">
                    <div className="flex justify-center mb-4 text-3xl text-yellow-500">
                        <FaPaperPlane size={60} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                    <p>
                        <a href="mailto:deepeshkhurai@gmail.com" className="text-yellow-500 hover:underline">
                            deepeshkhurai@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="hero w-full max-w-[1120px] mt-16">

                <div className={`${isVisible1 ? ' hidden' : ''}`}>
                    <img
                        src="http://res.cloudinary.com/dfckycekq/image/upload/v1731647697/qyfguqbsrelhkluqg5wg.png"
                        alt="Hero2"
                        className={`${isVisible1 ? 'relative w-full h-auto  mx-auto opacity-75' : 'w-full h-auto  mx-auto opacity-75'}`}
                    // className='w-full h-auto  mx-auto opacity-75'
                    />
                </div>
                <div className="p-6 bg-white shadow-lg rounded-md w-full">
                    <form action="https://formspree.io/f/xjvngprq" method="POST" className="space-y-4">
                        <div>
                            <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <input type="email" name="_replyto" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <input type="text" name="subject" placeholder="Subject" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <textarea name="message" placeholder="Message" required className="w-full p-2 border border-gray-300 rounded-md" rows="5"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;

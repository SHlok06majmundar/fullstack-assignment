import React from 'react';

const Navbar = ({ formData }) => {
    return (
        <div>
            <div>
                <nav className="bg-white">
                    <div className="max-w-[95%] px-2 sm:px-6">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img width={"80px"} src="src\assets\blacklogo.png" alt="Your Company" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-900 rounded-md px-3 py-4 text-sm font-medium">Inspiration</a>
                                        <a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-4 text-sm font-medium">Find Work</a>
                                        <a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-4 text-sm font-medium">Learn Design</a>
                                        <a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-4 text-sm font-medium">Go Pro</a>
                                        <a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-4 text-sm font-medium">Hire Designers</a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button type="button" className="relative rounded-full bg-gray-100 p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View notifications</span>
                                    <svg fill="#6B7280" className='h-5 w-5 '  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13.45H7V14.5a1,1,0,0,0,2,0V13.45h6V14.5a1,1,0,0,0,2,0V13.45h3Zm0-7H4V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z" />
                                    </svg>
                                </button>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="Search..."
                                    />
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">


                                    </button>
                                </div>
                                <div className="relative ml-3 flex">
                                    <div>
                                        <button type="button" className="relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="absolute -inset-1.5"></span>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src={formData.image ? formData.image : "src/assets/user.svg"} alt="" />

                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div className='Button pl-5 w-500'>
                                <button style={{ backgroundColor: "#EA4B8B" }} className="w-full text-white py-2 px-4 rounded-lg">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <a href="#" className="text-gray-900 rounded-md px-3 py-2 text-base font-medium">Dashboard</a>
                            <a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium">Team</a>
                            <a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium">Projects</a>
                            <a href="#" className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;

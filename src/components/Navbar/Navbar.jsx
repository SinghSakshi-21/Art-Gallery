import React from 'react'
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import DarkMode from './DarkMode'



const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "About",
        link: "/#login",
    },
    {
        id: 3,
        name: "Category",
        link: "/#category_section",
    },
    {
        id: 4,
        name: "Contact",
        link: "/contact",
    },

]

const Navbar = () => {
    return (
        <div className='bg-white dark:bg-gray-900 
    dark:text-white duration-200 realative z-40' >
            <div className='py-4'>
                <div className="container flex justify-between 
            items-center">
                    {/* Logo and Links Section */}
                    <div className='flex items-center gap-4'>
                        <a
                            href='#'
                            className='text-primary font-semibold 
                tracking-widest text-2xl uppercase sm:text-3xl'>
                            THE HEAVENS
                        </a>

                        {/* Menu Items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {MenuLinks.map((data, index) => (
                                    
                                        <li key={index}>
                                            <a href={data.link} className='inline-block 
                                px-4 font-semibold 
                                text-gray-500 
                                hover:text-black 
                                dark:hover:text-white 
                                duration-200'>{data.name}</a>
                                        </li>
                                        
                                    ))}
                                    
                                    <li>
                                        
                                    </li>

                            </ul>
                        </div>

                    </div>

                    {/* Navbar Right Section */}

                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar Section */}
                        <div className="relative group hidden 
                    sm:block">
                            <input type="text" placeholder='Search' className="search-bar" />
                            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary 
                        dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-1 duration-200"/>
                        </div>

                        {/* Order Button Section */}
                        <button className='relaative p-3'>
                            <FaCartShopping className='text-xl text-gray-600
                            dark:text-gray-400'/>
                            <div className='w-4 h-4 bg-red-500 text-white
                            rounded-full absolute top-3.5 flex items-center 
                            justify-center text-xs'>2</div>
                        </button>
                        {/* Dark Mode Section  */}
                        <div>
                            <DarkMode/>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
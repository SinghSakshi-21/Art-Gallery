import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa"

const ServiceData = [
    {
        id:1,
        icon: <FaCarSide className='text-4xl md:text-5xl 
        text-primary'/>,
        title:"Free Shipping",
        description: "Free Shipping On All Order",
    },
    {
        id:2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl 
        text-primary'/>,
        title:"Certified",
        description: "Authentication Certificates",
    },
    {
        id:3,
        icon: <FaWallet className='text-4xl md:text-5xl 
        text-primary'/>,
        title:"Reasonable Pricing",
        description: "Reasonable Pricing",
    },
    {
        id:4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl 
        text-primary'/>,
        title:"Customer Support",
        description: "All time free customer service",
    },
]


const Services = () => {
  return (
    <div>
        <div className='container mt-14 md:my-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4
            gap-y-8'>
                {
                    ServiceData.map((data)=>(
                        <div className='flex flex-col items-center sm:flex'>
                            {data.icon}
                            <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                            <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                        </div>
                    ))
                }
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Services
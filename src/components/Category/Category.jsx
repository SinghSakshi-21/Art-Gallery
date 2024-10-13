import React from 'react'
import Image4 from "../../assets/category/sculpt.png"
import Image5 from "../../assets/category/durga.png"
import Image6 from "../../assets/category/abs.jpeg"
import Button from '../Shared/Button'

const category = () => {
    return (
        <div id='category_section' className='py-8'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-4 gap-8'>
                    {/* first col */}
                    <div className='py-10 pl-5 bg-gradient-to-br 
                from-black/90 to-brandpink/70 text-white rounded-3xl relativr h-[320px]
                flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400' >Fine</p>
                                <p className='text-2xl font-semibold mb-[2px]'>Greek</p>
                                <p className='text-4xl xl:text-5xl font-bold
                            opacity-20 mb-2'>Sculpture</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"} />
                            </div>
                        </div>
                        <img src={Image4} alt='' className='w-[200px] absolute
                      bottom-50' />
                    </div>
                    {/* second col */}
                    <div className='py-10 pl-5 bg-gradient-to-br 
                from-black/90 to-brandpink/70 text-white rounded-3xl relativr h-[320px]
                flex items-end'>
                    <img src={Image5} alt='' className='w-[250px] absolute
                      bottom-100' />
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400' ></p>
                                <p className='text-2xl font-semibold mb-[2px]'>Indian</p>
                                <p className='text-4xl xl:text-5xl font-bold
                            opacity-20 mb-2'>Sculpture</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"} />
                            </div>
                        </div>
                        
                    </div>
                    {/* third col */}
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br 
                from-black/90 to-brandgold/70 text-white rounded-3xl relativr h-[320px]
                flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400' ></p>
                                <p className='text-2xl font-semibold mb-[2px]'>Painting</p>
                                <p className='text-4xl xl:text-5xl font-bold
                            opacity-20 mb-2'>Traditional</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"} />
                            </div>
                        </div>
                        <img src={Image6} alt='' className='w-[200px] relative top-1/2 -translate-y-1/4 -bottom-20' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default category
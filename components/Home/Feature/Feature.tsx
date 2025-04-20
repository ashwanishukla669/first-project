import Image from 'next/image'
import React from 'react'
import { GoWorkflow } from 'react-icons/go'
import { LuPen } from 'react-icons/lu'
import { MdAccessAlarm, MdOutlineTouchApp } from 'react-icons/md'

const Feature = () => {
  return (
    <div id="features" className='scroll-mt-[12vh] pt-16 pb-16 bg-gray-200'>
      <div>
        <h1 className='text-center text-2xl text-color text-blue-950 font-bold'>Key Features Of The Product</h1>
        <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>Our product stands out with its high performance, delivering blazing-fast speeds and seamless multitasking</p>
      </div>
      {/* main grid */}
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        {/* Inner grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center'>
            {/* First box */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" className='bg-white p-4 rounded-lg'>
                <div className='flex items-center space-x-3'>
                    {/* IUcon */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200'>
                        <MdOutlineTouchApp className='w-6 h-6 text-orange-400' />
                    </div>
                    {/* Heading */}
                    <h1 className='text-xl font-bold text-gray-700'>App Integration</h1>                   
                </div>
                 {/* Description */}
                 <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero</p>
            </div>
            {/* 2nd box */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className='bg-white p-4 rounded-lg'>
                <div className='flex items-center space-x-3'>
                    {/* IUcon */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200'>
                        <GoWorkflow className='w-6 h-6 text-orange-400' />
                    </div>
                    {/* Heading */}
                    <h1 className='text-xl font-bold text-gray-700'>Workflow Builder</h1>                   
                </div>
                 {/* Description */}
                 <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero</p>
            </div>
            {/* 3rd box */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" className='bg-white p-4 rounded-lg'>
                <div className='flex items-center space-x-3'>
                    {/* IUcon */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200'>
                        <LuPen className='w-6 h-6 text-orange-400' />
                    </div>
                    {/* Heading */}
                    <h1 className='text-xl font-bold text-gray-700'>Problem Solution</h1>                   
                </div>
                 {/* Description */}
                 <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero</p>
            </div>
            {/* 4th box */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300" className='bg-white p-4 rounded-lg'>
                <div className='flex items-center space-x-3'>
                    {/* IUcon */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200'>
                        <MdAccessAlarm className='w-6 h-6 text-orange-400' />
                    </div>
                    {/* Heading */}
                    <h1 className='text-xl font-bold text-gray-700'>Lifetime Access </h1>                   
                </div>
                 {/* Description */}
                 <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero</p>
            </div>
        </div>

        {/* Image content */}

        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <Image
            src="/images/f1.png"
            alt="Feature" 
            width={700} 
            height={700}
            />
        </div>

      </div>
    </div>
  )
}

export default Feature

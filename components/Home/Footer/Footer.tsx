import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-start grid-cols-1 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* 1st col */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Solution</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Enterprice</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Work flow    </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Team</p>
        </div>
        {/* 2nd col */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Company</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>News & Press</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Our Customer</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Leadership</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
        </div>
        {/* 3rd col */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Resources</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blog</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Webinar & Events</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Podcast</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Leadership</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>E-book & Guides</p>
        </div>
        {/* 4rth col */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Contact Us</h1>
            <div className='mt-6'>
                <p className='text-sm text-gray-600'>My Mobile Number</p>
                <p className='text-base font-bold text-blue-950 mt-1'>
                    <Link href="tel:+918130767817" aria-label="Call us at +91 8130767817">+91-8130767817</Link>
                </p>
            </div>
            <div className='mt-6'>
                <p className='text-sm text-gray-600'>My Email</p>
                <p className='text-base font-bold text-blue-950 mt-1'>
                    <Link href="mailto:ashwanishukla66@gmail.com" aria-label="Email us at ashwanishukla66@gmail.com">ashwanishukla66@gmail.com</Link>
                </p>
            </div>
        </div>
      </div>
      {/* Botom Part */}
      <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <p className='text-center md:text-left'>Copyright © 2024 TechAshwani. All rights reserved</p>
        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Social: </span>
            <span className='text-gray-500 hover:text-gray-800'><FaFacebook/></span>
            <span className='text-gray-500 hover:text-gray-800'><FaXTwitter/></span>
            <span className='text-gray-500 hover:text-gray-800'><FaInstagram/></span>
        </div>
      </div>
      
    </div>
  )
}

export default Footer

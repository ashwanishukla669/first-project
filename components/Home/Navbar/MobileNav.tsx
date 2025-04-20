import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type NavProps = {
  showNav: boolean;
  closeNav: () => void
}

const MobileNav = ({closeNav, showNav}:NavProps) => {
  const navOpen = showNav?"translate-x-0" : "translate-x-[-100%]"

  return (
   <>
   {/* Overlay */}
   <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70`}>
      
    </div>
    {/* Navlinks */}
    <div className={`fixed ${navOpen} text-white justify-center flex flex-col h-full transform transition-all duration-500 delay-200 w-[80%] sm:[60%] bg-blue-900 space-y-6 z-[1050]`}>
      {
        NavLinks.map((link)=>(
          <Link key={link.id} href={link.url}>
            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
          </Link>
        ))}
        {/* close icons */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>      
    </div>
   </>
  )
}

export default MobileNav

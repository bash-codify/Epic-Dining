'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import { Icon } from '@iconify/react';


const Header = () => {
  return (
    <nav className=' fixed w-full h-h10'>
        <div className=' w-w90 m-auto'>
            <div className=' flex items-center justify-between'>

                    <div className=' text-base'>
                        <Icon icon="clarity:menu-line" className=' cursor-pointer' />
                    </div>

                    <div className=' flex items-center justify-center h-h10'>
                    {/* <Image src={logo} className=' w-40 object-contain'/> */}
                    <h1 className=' text-textColor text-sm font-font_bold tracking-widest'>
                        Epic-Dinner
                    </h1>
                    </div>
                    <div className=' flex items-center justify-center gap-5 text-base'>
                        <div>
                            <Icon icon="bi:cart-dash-fill" className=' cursor-pointer'/>
                        </div>
                        <div>
                            <Icon icon="healthicons:ui-user-profile"  className=' cursor-pointer' />
                        </div>
                    </div>

                </div>
        </div>
    </nav>
  )
}

export default Header
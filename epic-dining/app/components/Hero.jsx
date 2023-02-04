'use client'
import React from 'react';
import Image from 'next/image';
import Food from '../assets/herofood/food1.png'
import foods from '../heroData';
import { Icon } from '@iconify/react';


const Hero = () => {
  return (
   <section className=' w-full min-h-screen'>
    <article className=' w-w90 m-auto'>
        <div className=' flex flex-col items-center justify-center gap-10'>
            <div className=' relative w-72 h-h28 xs:w-80 bg-black flex items-center justify-center -translate-x-7 -z-10'></div>
            <div className=' absolute top-0 mt-24 mr-12 flex item-center justify-center'>
                <Image src={Food}  className=' z-50 w-w23 xs:w-96 s412:w-w28'/>

            </div>
            <div className=' flex flex-col items-center justify-center gap-5 '>
                <div className=' text-center mt-6'>
                    <h2 className=' text-lg font-font_bold'>
                        Deep Chicken
                    </h2>
                    <p className=' text-sm text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                </div>

                <div className=' flex items-center justify-between w-full pt-5'>
                    <div>
                        <h2 className=' text-priceColor text-lg'>
                            $30
                        </h2>

                    </div>
                    <div>
                        <button type='button' className=' w-60 h-20 bg-buttonColor text-sbase font-font_bold tracking-widest outline-transparent rounded-2xl'>
                            Order Now
                        </button>
                    </div>

                </div>
            </div>
            <div className=' mt-6 scroll-container'>
                {
                    foods.map((items, index)=>{
                        const {id, img, cart, price, plate, rating, name} = items;
                        return(
                            <div className='bg-black scroll-child text-white' key={id} >
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <Image src={img}  className=' w-48' />
                                        </div>
                                        <div className=' pr-10 text-lg'>
                                            <h2>
                                                ${price}
                                            </h2>

                                        </div>

                                    </div>
                                    <div className='pl-10 pt-1'>
                                        <h1 className=' text-base'>
                                            {name}
                                        </h1>
                                        <p className=' text-sm'>
                                            {plate}
                                        </p>
                                    </div>
                                    <div className=' flex items-center justify-between pl-10 pt-5 text-base'>
                                        <div>
                                            <h3>
                                                {rating}
                                            </h3>
                                        </div>
                                        <div className=' pr-10 text-lg'>
                                            <Icon icon="bi:cart-dash-fill" className=' cursor-pointer'/>
                                        </div>
                                    </div>
                            
                            </div>

                        )
                    })
                }
            </div>


        </div>

    </article>
   </section>
  )
}

export default Hero
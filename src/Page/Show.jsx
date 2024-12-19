import React from 'react'
import { models } from '../data/DataInfo'

const Show = () => {
  return (
    <div className='w-full mb-10 mt-10 overflow-hidden'>
        <div className='w-full '>
            <div className='w-11/12 flex flex-col justify-center items-center mx-auto'>
                <h1 className='text-5xl font-antique text-[#8B2823] mb-10 font-[antique]'>See it, Love it, Own it</h1>
                <div className='w-full flex max-md:flex-col justify-around items-center mx-auto  rounded-md '>
                     {
                        models.map((data)=>(
                          <div className='flex flex-col gap-y-1 shadow-md border p-2 rounded-md'>
                                <div className='relative w-full'>
                                    <video loop autoPlay="true" muted width={200} height={200}>
                                            <source src={data.image} type="video/mp4" className='bg-cover' />
                                    </video>
                                    <div className={` absolute ${data.miniimage} h-[74px] rounded-sm w-16 p-2 border-2 border-white -bottom-1 left-2 bg-cover bg-bottom`}></div>
                                </div>

                                <div>
                                    <h1 className='text-gray-600 tracking-wider text-xs font-serif mt-1 '>{data.title.slice(0,30)}</h1>
                                </div>
                                <p className='text-gray-900 tracking-wider text-xs font-semibold'>₹{data.price}</p>
                          </div>
                        ))
                     }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Show
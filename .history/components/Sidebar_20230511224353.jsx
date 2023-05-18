import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {RxSketchLogo} from 'react-icons/rx'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20}/>
            </div>
          </Link>
          <span className='border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20}/>
            </div>
          </Link>
        </div>
        </div>

        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar
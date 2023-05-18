import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {RxSketchLogo} from 'react-icons/rx'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flexx-col items-center'>
          <Link href='/'>
            <div>
              <RxSketchLogo/>
            </div>
          </Link>
        </div>
        </div>

        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar
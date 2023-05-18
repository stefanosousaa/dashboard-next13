import React from 'react'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen bg-white border-r-[1px] flex flex-col justify-center'>

        </div>

        <main>{children}</main>
    </div>
  )
}

export default Sidebar
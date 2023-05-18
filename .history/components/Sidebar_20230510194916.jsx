import React from 'react'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>

        <main>{children}</main>
    </div>
  )
}

export default Sidebar
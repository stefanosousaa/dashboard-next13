import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
           <div className='flex flex-col w-full pb-4'>
            <p>$7336,22</p>
            <p>vendas diarias</p>
           </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
           <div className='flex flex-col w-full pb-4'>
           <p>$7336,22</p>
            <p>vendas diarias</p>
           </div>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
           <div className='flex flex-col w-full pb-4'>
           <p>$7336,22</p>
            <p>vendas diarias</p>
           </div>
        </div>
    </div>
  )
}

export default TopCards
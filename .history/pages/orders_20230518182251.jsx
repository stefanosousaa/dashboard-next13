import React from 'react'

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2>Ordens de Serviço</h2>
            <h2>Bem vindo de volta,Stefano</h2>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
              <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <span>Ordem de Serviço</span>
                <span className='sm:text-left text-right'>Status</span>
                <span className='hidden md:grid'>Ultima O.S</span>
                <span className='hidden sm:grid'>Pagamento</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default orders
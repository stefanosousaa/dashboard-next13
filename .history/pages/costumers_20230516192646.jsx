import React from 'react'
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import {data} from '../data/data.js'

const costumers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2>Usuários</h2>
            <h2>Bem vindo de volta,Stefano</h2>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
              <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <span>Nome</span>
                <span className='sm:text-left text-right'>Email</span>
                <span className='hidden md:grid'>Ordem de Serviço</span>
                <span className='hidden sm:grid'>Pagamento </span>
              </div>
              <ul>
                {data.map((order,id) => (
                    <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                      <div className='bg-purple-100'>
                        <BsPersonFill className='text-purple-800'/>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
        </div>
    </div>
  )
}

export default costumers
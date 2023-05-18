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
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Novo Usuário</button>
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
                      <div className='flex items-center'>
                          <div className='bg-purple-100 p-3 rounded-lg'>
                             <BsPersonFill className='text-purple-800'/>
                           </div>
                           <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                      </div>
                      <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                      <p className='hidden md:flex'>{order.date}</p>
                      <div className='sm:flex hidden justify-between items-center'>
                        <p>{order.method}</p>
                        <button className='bg-yello-500 hover:bg-yello-700 text-white font-bold py-2 px-4 rounded'>Editar</button>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Excluir</button>
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
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
              <div className='my-3 p-2 grid md:grid-cols-4'>
                <span>Nome</span>
                <span>Email</span>
                <span>Ordem de Serviço</span>
                <span>Pagamento </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default costumers
import { useState } from 'react'
import './styles/global.css'

export function App() {

  return (
    <>
    <h1 className='font-bold text-2xl text-gray-800'>Hello World</h1>

    <button className='bg-violet-500 font-medium px-4 py-2 text-white hover:bg-violet-600 rounded'>
      Enviar
    </button>
    </>
  )
}
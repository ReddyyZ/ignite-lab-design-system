import { useState } from 'react'
import './styles/global.css'
import Logo from './Logo'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Envelope } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex items-center flex-col'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-[2px]'>
          Faça login e começe a usar
        </Text>
      </header>

      <form className='flex flex-col items-stretch mt-8 w-full max-w-[400px]'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='johndoe@gmail.com'/>

          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3 mt-4'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='password' placeholder='***********'/>

          </TextInput.Root>
        </label>

        <div className="flex items-center gap-2 mt-4">
          <Checkbox id='remember' />
          <Text size="sm">
            Lembrar-me de mim por 30 dias
          </Text>
        </div>

        <Button children="Entrar na plataforma" className='mt-8'/>
      </form>

      <footer className='flex flex-col items-center gap-3 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha</a>
        </Text>

        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
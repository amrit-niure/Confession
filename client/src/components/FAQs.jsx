import React from 'react'
import Accordion from './Accordion'
import { EmptyButton } from './Blocks'

const FAQs = () => {
  return (
    <div className='pt-[2rem] flex flex-col gap-8 h-[100vh] w-[400px] md:w-[500px] '>
      <div>
        <h1 className='text-2xl font-bold text-center w-full underline'>Got Any Questions ? </h1>
      </div>
      <div className='flex gap-4 w-full justify-between'>
        <input
          type="text"
          id='question'
          placeholder='Ask any questions....' 
          className='w-full shadow-xl focus:outline-none px-4'
        />

        <EmptyButton signUp={'Ask'}/>
      </div>

      <div>
        <h1 className='text-2xl font-bold text-center w-full underline'>Fequently asked Questions</h1>
      </div>
      <div className='shadow-2xl w-[400px] md:w-[500px]  bg-black '>
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  )
}

export default FAQs

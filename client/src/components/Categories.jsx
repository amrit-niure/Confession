import React from 'react'
import { Card } from './Blocks'

const Categories = () => {  
  return (
    <div  className=' w-[400px] md:w-[500px] h-full flex flex-col gap-2'>
    <div className='w-full flex align-center justify-center pt-[2rem]'>
      <h1 className='text-2xl font-bold underline'>Categories</h1>
    </div>
    <div className='pt-4 flex items-center justify-around flex-wrap gap-16'>
     
      <Card category={'Love'}/>
      <Card category={'Betrayal'}/>
      <Card category={'Murder'}/>
      <Card category={'Sins'}/>
    </div>
    </div>
  )
}

export default Categories

import React,{ useEffect }  from 'react'
import { Card } from './Blocks'
import {Link } from 'react-router-dom'
const Categories = () => {  


  return (
    <div  className=' w-[400px] md:w-[500px]  h-[full] flex flex-col gap-2'>
    <div className='w-full flex align-center justify-center pt-[2rem]'>
      <h1 className='text-2xl font-bold underline'>Categories</h1>
    </div>
    <div className='py-4 flex items-center justify-around flex-wrap gap-16'>
     
      <Link to= 'Love'> <Card category={'Love'}/> </Link> 
      <Link  to='Betrayal'> <Card category={'Betrayal'}/> </Link>
      <Link to='Murder' > <Card to='Murder' category={'Murder'}/> </Link>
      <Link to='other'>  <Card to='Sins' category={'Sins'}/> </Link>
    </div>
    </div>
  )
}

export default Categories

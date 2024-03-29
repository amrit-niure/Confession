import React from 'react'
import {FaGraduationCap} from 'react-icons/fa'
import {GiLoveHowl,GiBrokenHeart,GiBrokenBottle,GiBurningDot,GiOpenBook} from 'react-icons/gi'
import {IoIosAddCircle} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCategoryPosts } from '../state/categorySlice';

const RightBar = () => {
  const dispatch = useDispatch()
  const onClickHandler = (topic) => {
    dispatch(getCategoryPosts(topic))
    dispatch()
  }
  return (
    <div className='w-[300px] h-[700px] shadow-xl bg-white'>
      {/* Top  */}
      <div className='bg-blackish text-white flex items-center justify-center py-[.5rem]' >
        <h1 className='text-[1.5rem] font-regular'>Confess Yourself</h1>
      </div>
      <div>
        <div className='flex py-[1rem]  gap-3 justify-center '>
<FaGraduationCap className='text-3xl'/>
        <h2 className='text-xl font-bold'> Confession Topics </h2>
        </div>
      <hr />
        <ul className='pl-[2rem] py-[1.5rem] flex flex-col gap-6'>
           <Link to='categories/Love' onClick={()=> onClickHandler('Love')}> <li className='flex text-[1.15rem] gap-3 items-center'> <GiLoveHowl  className='text-xl'/><h2>Love</h2></li> </Link> 
           <Link to='categories/Murder' onClick={()=> onClickHandler('Murder')}> <li className='flex text-[1.15rem] gap-3 items-center'> <GiBrokenHeart  className='text-xl'/><h2>Murder</h2></li> </Link> 
           <Link to='categories/Betrayal' onClick={()=> onClickHandler('Betrayal')}> <li className='flex text-[1.15rem] gap-3 items-center'> <GiBrokenBottle  className='text-xl'/><h2>Betrayal</h2></li> </Link> 
      

        </ul>
       <Link to='categories/other' onClick={()=> onClickHandler('other')}> <span className='pl-[4rem] pb-[1.5rem] flex gap-2 text-[1.15rem] items-center'><IoIosAddCircle /> <h2>Other  Topics</h2> </span> </Link> 
      </div>
      <hr />
      <div className='flex py-[1rem] pl-[2rem]  gap-3 justify-left items-center'>
<GiOpenBook className='text-2xl'/>
      <h1 className='text-xl font-bold'>Guides</h1>
      </div>
      <div className='flex flex-col px-[2rem] gap-4'>
        <div className='flex gap-2'>
            <GiBurningDot />
        <p>What is Confession ?</p>
        </div>
        <div className='flex gap-2'>
            <GiBurningDot />
        <p>How to express yourself ?</p>
        </div>
        <div className='flex gap-2'>
            <GiBurningDot />
        <p>Is is wrong to confess ?</p>
        </div>

      </div>
    </div>
  )
}

export default RightBar


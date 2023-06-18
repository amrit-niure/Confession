import React from 'react'
import love from '../assets/love.jpg'
import {GiLoveHowl,GiBrokenHeart,GiBrokenBottle,GiBurningDot,GiOpenBook} from 'react-icons/gi'
import {IoIosAddCircle} from 'react-icons/io'


export const FilledButton = ({ logIn }) => {
  return (
    <button className="flex items-center justify-center bg-blackish border-2 px-4 py-1.5 text-white hover:bg-white hover:text-black hover:border-black">{logIn}</button>
  )
}
export const EmptyButton = ({ signUp }) => {
  return (
    <button className="flex items-center justify-center border-2 border-black px-4 py-1 hover:bg-blackish hover:text-white text-lg font-bold">{signUp}</button>
  )
}
// export const EmptyButton = ({ signUp }) => {
//   return (
//     <button className="flex items-center justify-center border-2 px-4 py-1.5 hover:border-blackish">{signUp}</button>
//   )
// }


export const Card = ({category}) => {
  return (
      <div className='w-[180px] h-[200px] relative overflow-hidden rounded-[10px]   cursor-pointer shadow-2xl hover:scale-105 transition-all duration-300  '>
         {/* hover:scale-125 transition-all duration-200 */}
        <div className='h-[160px] w-full flex items-center justify-center flex-col px-4' >
          <div>
            {
             category==='Love' ? <GiLoveHowl className='text-4xl'/> : category === "Betrayal" ? <GiBrokenHeart className='text-4xl'/> : category === 'Murder' ? <GiBrokenBottle className='text-4xl'/> : <IoIosAddCircle className='text-4xl'/>
            }
          </div>
          <div>
            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat.</p>
          </div>
        </div>
        <div className='absolute w-full h-[40px] flex items-center justify-center bg-blackish text-white bottom-0 left-0 pointer-events-none'>
          <h1 className=' text-xl'>{category}</h1>
        </div>
    </div>
  )
}



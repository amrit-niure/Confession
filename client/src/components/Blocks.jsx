import React from 'react'

export const FilledButton = ({logIn}) => {
  return (
       <button className="flex items-center justify-center bg-blackish border-2 px-4 py-1.5 text-white hover:bg-white hover:text-black hover:border-black">{logIn}</button>
  )
}
export const EmptyButton = ( {signUp}) => {
  return (
    <button className="flex items-center justify-center border-2 px-4 py-1.5 hover:border-blackish">{signUp}</button>
  )
}



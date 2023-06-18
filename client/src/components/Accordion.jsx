import React, { useState } from 'react'
import { SlQuestion } from 'react-icons/sl'
import { IoChevronDownSharp } from 'react-icons/io5'


const Accordion = () => {

    const [show, setShow] = useState(false)

    const accordionHandler = () => {
        setShow(prev => !prev)
    }

    return (
        <div className='bg-white  py-2 flex flex-col gap-4' >
            <div className='flex  text-lg items-center justify-between cursor-pointer' onClick={accordionHandler}>
                <div className='flex gap-4 text-lg items-center px-4'>
                    <SlQuestion />
                    <h1 className='text-lg'>what is confession ?</h1>
                </div>
                <div  className='flex items-center justify-center h-[20px] w-[40px]'>

                    <IoChevronDownSharp />
                </div>
            </div>
      
            <div  className={`max-h-0 overflow-hidden px-4 bg-black bg-opacity-25  transition-all 8491df duration-500 ${
                show ? 'max-h-[500px] py-2' : ''
              }`}>
                <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus molestiae consequatur neque dolor. Odio, veritatis quo pariatur lorem300 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam harum eius eos dolores natus exercitationcorporis, alias quasi quaerat provident perspiciatis expedae. cuplorem50.</p>
            </div>
        </div>
    )
}

export default Accordion

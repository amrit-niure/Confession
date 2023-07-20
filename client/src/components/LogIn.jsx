import React, { useState } from 'react'
import { useFormik } from 'formik'
import { SlLogin } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getFeedPost } from '../state/displayPostSlice'
import * as yup from 'yup'
import FirstHeader from './FirstHeader'

const LogIn = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().min(5, "Email should be more than 5 characters").required('Required'),
            password: yup.string().min(5, "Password should be more than 5 characters").required('Required')
        }),
        onSubmit: async (initialValues) => {
            try {
                const logInUrl = 'http://192.168.0.8:5000/auth/login'
                const response = await axios.post(logInUrl, initialValues)
                const { token: receivedToken, user } = response.data
                console.log(user)
                localStorage.setItem('token', receivedToken)
                dispatch(getFeedPost());
                navigate(`/${user._id}`);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    return setErrorMessage(error.response.data.message);
                } else {
                    console.error('Error logging in:', error.message);
                }
            }


        }
    })
    return (
        <div className='h-[92vh] flex justify-center items-center bg-lightWhite '>
            <form onSubmit={handleSubmit} className=' w-[400px] bg-white flex flex-col gap-6 p-4'>
                <div className='flex align-center justify-center border-2 border-black py-2'>
                    <h1 className='text-2xl font-bold'>Log In </h1>
                </div>
                <div className='text-5xl w-full flex items-center justify-center '>
                    <SlLogin />
                </div>
                <div className='flex flex-col '>
                    {/* email */}
                    <div className='flex flex-col h-20'>
                        <label htmlFor="email" className='text-lg font-bold'>Email</label>
                        <input
                            value={values.email}
                            type="text"
                            id='email'
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='bg-lightWhite rounded-md px-2 py-1 focus:outline-none'
                        />
                        {touched.email && errors.email ? (<div>{errors.email} </div>) : null}
                    </div>
                    {/* passowrd  */}
                    <div className='flex flex-col h-20'>
                        <label htmlFor="password" className='text-lg font-bold'>Password</label>
                        <input
                            value={values.password}
                            id='password'
                            type="password"
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='bg-lightWhite rounded-md px-2 py-1 focus:outline-none'
                        />
                        {touched.password && errors.password ? (<div>{errors.password} </div>) : null}

                    </div>
                    <div className='pt-4 flex items-center justify-center'>

                        <button className='bg-blackish text-white  px-6 py-2' type='submit'>Log In</button>

                    </div>

                </div>
                {errorMessage && <span className=' w-[150px] px-2 text-red-500'><i>{errorMessage}</i></span>}
                <span className='text-black'> Does not have an account ? <span className='underline hover:text-blue-900 cursor-pointer' onClick={() => navigate('/signup')}> Sign Up</span></span>

            </form>
        </div>

    )
}

export default LogIn
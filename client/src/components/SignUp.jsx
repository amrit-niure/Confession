import React from 'react'
import logo from '../assets/logo_confession.png'
import { useFormik } from 'formik'
import { SlLogin } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'



const SignUp = () => {
    const endpoint = import.meta.env.VITE_ENDPOINT;
    const navigate = useNavigate();
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(3, "Name should be more than 3 characters").required('Required'),
            email: yup.string().min(5, "Email should be more than 5 characters").required('Required'),
            password: yup.string().min(5, "Password should be more than 5 characters").required('Required'),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password should Match').required("Confirmation is Required.")
        }),
        onSubmit: async (initialValues) => {
            try {
                const signUpUrl = `${endpoint}/auth/register`
                await axios.post(signUpUrl,initialValues)
            } catch (err) {
                res.status(500).json({ error: `${err.message} frontend cannot post the data.` })
            }
            navigate('/');

        }
    })


    return (
               <div className='flex w-full h-[92vh] justify-center items-center bg-lightWhite'>
                <form onSubmit={handleSubmit} className=' w-[400px] bg-white flex flex-col gap-6 p-4 py-8'>
                    <div className='flex align-center justify-center border-2 border-black py-2'>
                        <h1 className='text-2xl font-bold'>Sign Up</h1>
                    </div>
                    <div className='text-5xl w-full flex items-center justify-center '>
                        <SlLogin />
                    </div>
                    <div className='flex flex-col '>
                        {/* name */}
                        <div className='flex flex-col h-20'>
                            <label htmlFor="name" className='text-lg font-bold'>Name</label>
                            <input
                                id='name'
                                value={values.name}
                                type="text"
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='bg-lightWhite rounded-md px-2 py-1 focus:outline-none'
                            />
                            {touched.name && errors.name ? (<div>{errors.name} </div>) : null}
                        </div>
                        {/* email */}
                        <div className='flex flex-col h-20'>
                            <label htmlFor="email" className='text-lg font-bold'>Email</label>
                            <input
                                value={values.email}
                                id='email'
                                type="text"
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='bg-lightWhite rounded-md px-2 py-1 focus:outline-none'
                            />
                            {touched.email && errors.email ? (<div>{errors.email} </div>) : null}
                        </div>
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
                        {/* passowrd  */}
                        <div className='flex flex-col h-20'>
                            <label htmlFor="confirmPassword" className='text-lg font-bold'>Confirm Password</label>
                            <input
                                value={values.confirmPassword}
                                type="password"
                                name='confirmPassword'
                                id='confirmPassword'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='bg-lightWhite rounded-md px-2 py-1 focus:outline-none'
                            />
                            {touched.confirmPassword && errors.confirmPassword ? (<div>{errors.confirmPassword} </div>) : null}

                        </div>

                        <div className='pt-4 flex items-center justify-center'>

                            <button className='bg-blackish text-white  px-6 py-2' type='submit'>Sign Up</button>

                        </div>
                    </div>
                    <span className='text-black'>Already have an account ? <span className='underline hover:text-blue-900 cursor-pointer' onClick={()=>navigate('/') }> Log In</span></span>
                </form>
            </div>
  
    )
}

export default SignUp

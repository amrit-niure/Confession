import { createSlice } from '@reduxjs/toolkit'
import {useFormik} from 'formik'

const initialState = {
    name : '',
    category :'',
    heading :'',
    description : '',

}

const confessionSlice = createSlice({
    name : 'confession',
    initialState,
    reducers :{
        setConfession : (state) => {
            state
        }
    }
})
import React from 'react'
import { useState,useEffect } from 'react'
import { trainSlice } from '../Redux/Slice/trainSlice'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trainSlice())
    }, [dispatch])

    const data = useSelector((state) => state.Train)
    console.log(data);
    


    return (
        <div>
            <div>
                <div className='w-screen'>
                    <p className='text-2xl font-semibold flex justify-center'>Welcome to the Train Schedule App!</p>
                    <p className='text-xl font-semibold flex justify-center'>This app is designed to help you keep track of your train schedule.</p>
                </div>
                <div className=' gird grid-flow-col grid-cols-3'>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
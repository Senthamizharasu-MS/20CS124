import React from 'react'
import { useState, useEffect } from 'react'
import { trainSlice } from '../Redux/Slice/trainSlice'
import { authSlice } from '../Redux/Slice/auth'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {

    const dispatch = useDispatch();
    const [mainData, setData] = useState("");
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(authSlice());
    }, [])
    console.log(auth);

    useEffect(() => {
        dispatch(trainSlice());
    }, [])

    const train = useSelector((state) => state.Train.train);
    useEffect(() => {
        setData(train);
    }, [train])

    console.log(mainData);

    const handleDetail = (e) => {
        console.log(e);
    }

    return (
        <div>
            <div>
                <div className='w-screen'>
                    <p className='text-2xl font-semibold flex justify-center'>Welcome to the Train Schedule App!</p>
                    <p className='text-xl font-semibold flex justify-center'>This app is designed to help you keep track of your train schedule.</p>
                </div>
                <div className='flex justify-center mt-5'>
                    <div className=' grid grid-flow-col grid-rows-6 gap-5'>
                        {
                            mainData.length && mainData.map((item, index) => {
                                return (
                                    <div key={index} id={item.trainNumber} onClick={handleDetail} className=' border-2 border-black w-60 flex justify-center'>
                                        <p className='text-xl '>{item.trainName}</p>
                                        <p className='text-xl'>{item.trainNumber}</p>
                                        {/* <p className='text-xl font-semibold flex justify-center'>{item.}</p> */}
                                        {/* <p className='text-xl font-semibold flex justify-center'>{item.duration}</p> */}
                                        {/* <p className='text-xl font-semibold flex justify-center'>{item.stops}</p> */}
                                        {/* <p className='text-xl font-semibold flex justify-center'>{item.arrival}</p> */}
                                        {/* <p className='text-xl font-semibold flex justify-center'>{item.departureTime}</p> */}
                                        {/* <p className='text-xl font-semibold flex justify-center'>{item.price}</p> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
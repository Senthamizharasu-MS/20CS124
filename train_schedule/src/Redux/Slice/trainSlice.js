// import { useSelector } from 'react-redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url ="http://20.244.56.144:80/train/trains"
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA4Nzg2NDAsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiMTFkMmU0MzgtMGZkNy00YmQ1LWEyZTEtN2Y1YmM0YTg3ODUyIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwQ1MxMjQifQ.hDPRPAR1krrepRA88KeB3vPabYfUDqZixu0RxEumSt8";
export const trainSlice = createAsyncThunk("train", async () => {
    // const token = useSelector((state) => state.auth.auth.token);
    // console.log(token);
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        return res.json();
    });
    return response;
}
);


export const trainSliceReducer = createSlice(
    {
        name: "train",
        initialState:
        {
            train: [],
            loading: false
        },

        reducers: {},
        extraReducers: {
            [trainSlice.pending]: (state, action) => {
                state.loading = true;
            },
            [trainSlice.fulfilled]: (state, action) => {
                state.train = action.payload;
                state.loading = false;
                console.log(state.train);
            },
            [trainSlice.rejected]: (state, action) => {
                state.loading = false;
            }
        }
    });

const Train = trainSliceReducer.reducer;
export default Train;



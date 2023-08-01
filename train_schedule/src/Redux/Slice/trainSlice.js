
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url ="http://20.244.56.144:80/train/trains"
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA4Njk4NDQsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiMTFkMmU0MzgtMGZkNy00YmQ1LWEyZTEtN2Y1YmM0YTg3ODUyIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwQ1MxMjQifQ.a_JINtvHnTVAcOw66VL3PDCPugeK3q90bCd-JbmaRMc";
export const trainSlice = createAsyncThunk("train", async (data) => {
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        return res.json();
    });
    // return response;
    console.log(response);
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
                state.train = action.payload.data;
                state.loading = false;
                console.log(action.payload.data);
            },
            [trainSlice.rejected]: (state, action) => {
                state.loading = false;
            }
        }
    });

const Train = trainSliceReducer.reducer;
export default Train;



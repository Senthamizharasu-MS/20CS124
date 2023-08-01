import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const url="http://20.244.56.144/train/auth"

const data={
    "companyName": "Train Central",
    "clientID": "11d2e438-0fd7-4bd5-a2e1-7f5bc4a87852",
    "ownerName": "Senthamizharasu",
    "ownerEmail": "senthamizharasum.ms2020cse@sece.ac.in",
    "rollNo": "20CS124",
    "clientSecret": "eMBghYoETLQbbIWZ"
}

export const authSlice = createAsyncThunk("auth", async (data) => {
    const response = fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        return res.json();
    });
    return response;
    // console.log(response);
});


export const AuthReducer = createSlice({
    name:'auth',
    initialState:{
        auth:[],
        loadinguser:false
    },
    reducer:{},
    extraReducers:{
        [authSlice.pending]:(state,action)=>{
            state.loadinguser=true;
        },
        [authSlice.fulfilled]:(state,action)=>{
            state.auth=action.payload;
            state.loadinguser=false;
            console.log(action.payload);
        },
        [authSlice.rejected]:(state,action)=>{
            state.loadinguser=false;
        }
    }
})


const Auth=AuthReducer.reducer;
export default Auth;

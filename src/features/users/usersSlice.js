import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:0,
        name:"rabby"
    },
    {
        id:1,
        name:"shek"
    },
    {
        id:2,
        name:"suvo"
    }
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const allUsers = (state) => state.users;

export default usersSlice.reducer;
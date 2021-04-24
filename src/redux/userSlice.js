import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload //playload é o resultado da aplicação (response)
        },

        logout: (state, action) => {
            state.user = null; 
        },

        error: (state, action) => {
            state.error = action.payload
        }
    }

})


export const { login, error, logout } = userSlice.actions;
export const userSelect = (state) => state.user.user;
export default userSlice.reducer
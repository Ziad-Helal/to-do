import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "newuser@ziad-to-do.com",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            const email = action.payload.email;
            const token = action.payload.token;
            const userId = action.payload.userId;

            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            state.email = email;
        },
        logout(state) {
            localStorage.removeItem("token");
            state = initialState;
        },
    },
});

export const userActions = userSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        id: localStorage.getItem("userId"),
        token: localStorage.getItem("token"),
        email: localStorage.getItem("userEmail"),
    },
    isLogged: !!localStorage.getItem("token"),
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            const userData = action.payload;

            localStorage.setItem("token", userData.token);
            localStorage.setItem("userId", userData.id);
            localStorage.setItem("userEmail", userData.email);

            state.userData = userData;
            state.isLogged = true;
        },
        logout(state) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("userEmail");

            state.userData = {};
            state.isLogged = false;
        },
    },
});

export const userActions = userSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/user-slice";
import { tasksSlice } from "./tasks/tasks-slice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        tasks: tasksSlice.reducer,
    },
});

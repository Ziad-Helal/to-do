import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    count: 0,
    isLoading: false,
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action) {
            const newTask = action.payload;
            state.tasks.unshift(newTask);
            state.count++;
        },
        removeTask(state, action) {
            const taskId = action.payload;
            const taskIndex = state.tasks.map((task) => task.id).indexOf(taskId);
            state.tasks.splice(taskIndex, 1);
            state.count--;
        },
        replaceTask(state, action) {
            const newTask = action.payload;
            const taskId = newTask.id;
            const taskIndex = state.tasks.map((task) => task.id).indexOf(taskId);
            state.tasks[taskIndex] = newTask;
        },
        checkTask(state, action) {
            const taskId = action.payload;
            const taskIndex = state.tasks.map((task) => task.id).indexOf(taskId);
            state.tasks[taskIndex].done = true;
        },
        uncheckTask(state, action) {
            const taskId = action.payload;
            const taskIndex = state.tasks.map((task) => task.id).indexOf(taskId);
            state.tasks[taskIndex].done = false;
        },
        clearAllTasks(state) {
            state.tasks = [];
            state.count = 0;
        },
        loading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const tasksActions = tasksSlice.actions;

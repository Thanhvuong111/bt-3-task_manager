import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// act get list task and search
export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (searchTerm = '') => {
        let query = 'http://localhost:4000/tasks';
        if (searchTerm) {
            query += `?q=${searchTerm}`;
        }
        const response = await axios.get(query);
        return response.data;
    }
);


export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (task) => {
        const response = await axios.post('http://localhost:4000/tasks', task);
        return response.data;
    }
);




export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id) => {
        const response = await axios.delete(`http://localhost:4000/tasks/${id}`);
        console.log('Delete response:', response);
        return id;
    }
);




export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async ({ id, task }) => {
        const response = await axios.put(`http://localhost:4000/tasks/${id}`, task);
        return response.data;
    }
);
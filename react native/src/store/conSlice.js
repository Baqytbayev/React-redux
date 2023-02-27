import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiContacts} from '../api/api'
export const getContacts = createAsyncThunk(
    'contact/getContacts',
    async () => {
        return await apiContacts.getCon()
    }
)
export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contact: [],
        oneContact: [],
        loading: false
    },
    reducers: {
        remove(state,action) {

        }
    },
    extraReducers: builder =>  {
        builder
            .addCase(getContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getContacts.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contact = action.payload
            })
    }
})
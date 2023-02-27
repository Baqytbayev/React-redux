import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {contactsApi} from "../api/contactsApi";


export const addContact = createAsyncThunk(
    'contact/addContact',
    async(contact, {dispatch}) => {
        await contactsApi.addContact(contact)
            await dispatch(getContacts())
    }
)
export const getContacts = createAsyncThunk(
    'contact/getContacts',
    async () => {
        return await contactsApi.getContact()
    }
)
export const getById = createAsyncThunk(
    'contact/getById',
    async (id) => {
        return await contactsApi.getContactById(id)
    }
)
export const removeContact = createAsyncThunk(
    'contact/removeContact',
    async (key, {dispatch}) => {
        await contactsApi.remove(key)
        await dispatch(getContacts())
    }
)
export const updateContact = createAsyncThunk(
    'contact/updateContact',
    async (data, {dispatch}) =>{
        await contactsApi.updateContacts(data.id, data.contact)
        dispatch(getContacts())
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
            .addCase(addContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
            })
            .addCase(addContact.fulfilled, (state) => {
                state.loading = false;
            })
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
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                state.contact = action.payload
            })
            .addCase(removeContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeContact.rejected, (state) => {
                state.loading = false;
            })
            .addCase(removeContact.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(updateContact.pending, (state) => {
                state.loading = true
            })
            .addCase(updateContact.rejected, (state) => {
                state.loading = false
            })
            .addCase(updateContact.fulfilled, (state) => {
                state.loading = false
            })
    }
})
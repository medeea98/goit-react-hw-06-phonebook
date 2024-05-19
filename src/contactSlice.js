import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        list: [],
        filter: '',
    },
    reducers: {
        addContact: (state, action) => {
            state.list.push({
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number,
            });
        },
        deleteContact: (state, action) => {
            state.list = state.list.filter(contact => contact.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
export default contactSlice.reducer;
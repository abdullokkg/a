import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: JSON.parse(localStorage.getItem("Modals")) ||[]
}

const modalSlice = createSlice({
    name: "Modal",
    initialState,
    reducers: {
        addModal: (state, action) => {
            state.modal.unshift(action.payload)
            localStorage.setItem("Modals", JSON.stringify(state.modal))
        }
    }
})

export const { addModal } = modalSlice.actions

export { modalSlice }  
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    makeups: JSON.parse(localStorage.getItem("Makeups")) ||[]
}

const makeupSlice = createSlice({
    name: "Makeup",
    initialState,
    reducers: {
        addMakeup: (state, action) => {
            state.makeups.unshift(action.payload)
            localStorage.setItem("Makeups", JSON.stringify(state.makeups))
        }
    }
})

export const { addMakeup } = makeupSlice.actions

export { makeupSlice }
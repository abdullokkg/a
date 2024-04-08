import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: JSON.parse(localStorage.getItem("Likes")) ||[]
}

const LikeSlice = createSlice({
    name: "Like",
    initialState,
    reducers: {
        addLike: (state, action) => {
            state.likes.unshift(action.payload)
            localStorage.setItem("Likes", JSON.stringify(state.likes))
        }
    }
})

export const { addLike } = LikeSlice.actions

export { LikeSlice }
import { configureStore } from "@reduxjs/toolkit"
import { makeupSlice } from "./makeupSlice";
import { modalSlice } from "./modalSlice";
import { LikeSlice } from "./makeLikeSlice";

const store = configureStore({
    reducer: {
        makeup: makeupSlice.reducer,
        modaldata: modalSlice.reducer,
        likedata: LikeSlice.reducer
    }
});

export { store }
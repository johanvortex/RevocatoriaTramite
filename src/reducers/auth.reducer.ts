import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface InitialStateAuth {
    register: boolean;
}

const initialState: InitialStateAuth = {
    register: false,
}
export const authReducers = createSlice({
    name: "auth",
    initialState,
    reducers: {
        doLogin: (state, action: PayloadAction<boolean>) => {
            state.register = action.payload;

        },
    }
});

export default authReducers.reducer;
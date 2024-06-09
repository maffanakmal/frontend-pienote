import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    token: Cookies.get("token") || null,
    user: Cookies.get("user") ? Cookies.get("user") : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            const expiryTime = 1 / 96; // 15 minutes
            Cookies.set("token", state.token, { expires: expiryTime });
            Cookies.set("user", state.user, { expires: expiryTime });
        },
        clearAuth: (state) => {
            state.token = null;
            state.user = null;
            Cookies.remove("token");
            Cookies.remove("user");
        },
    },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
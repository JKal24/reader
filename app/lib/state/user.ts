import { createSlice } from "@reduxjs/toolkit";

interface UserInfo {
    id: string,
    token: string,
    loggedIn: boolean
}

const initialState: UserInfo = {
    id: "", token: "", loggedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action) {
            const {id, token} = action.payload;
            state.id = id;
            state.token = token;
            state.loggedIn = true;
        },
        changeToken(state, action) {
            const token: string = action.payload
            state.token = token;
        },
        logoutUser() {
            return initialState;
        }
    }
})

export const { loginUser, changeToken, logoutUser } = userSlice.actions;

export default userSlice.reducer;
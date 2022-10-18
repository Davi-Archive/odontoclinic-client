import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    registerService,
    logoutService,
    loginService,
    getUserService
} from './authService'

// Get user from localStorage
const localUser = JSON.parse(localStorage.getItem('user')!)

interface stateProp {
    user: any,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: any
}

const initialState: stateProp = {
    user: localUser ? localUser : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Register User
export const register = createAsyncThunk('auth/register',
    async (user: any, thunkAPI) => {
        try {
            await registerService(user)
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Login User
export const login = createAsyncThunk('auth/login',
    async (user: any, thunkAPI) => {
        try {
            await loginService(user)
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Logout User
export const logout = createAsyncThunk('auth/logout', async () => {
    await logoutService()
})



/// Reducer login

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

// reducer functions
export const { reset } = authSlice.actions

// reducer
export default authSlice.reducer
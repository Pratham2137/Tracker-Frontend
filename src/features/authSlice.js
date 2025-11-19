import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/apiClient";

// Try to restore saved auth (token + user) from localStorage
let savedAuth = null;
try {
    savedAuth = JSON.parse(localStorage.getItem("auth")) || null;
} catch (e) {
    savedAuth = null;
}

const initialState = {
    token: savedAuth?.token ?? null,
    user: savedAuth?.user ?? null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Async thunk for login; expects server to return { token, user }
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await api("/auth/login", { method: "POST", body: credentials });
            return data;
        } catch (err) {
            return rejectWithValue(err.message || "Login failed");
        }
    }
);

// Optional: fetch the profile using the stored token
export const fetchProfile = createAsyncThunk(
    "auth/fetchProfile",
    async (_, { getState, rejectWithValue }) => {
        const token = getState().auth.token;
        if (!token) return rejectWithValue("No token");
        try {
            const data = await api("/auth/me", { headers: { Authorization: `Bearer ${token}` } });
            return data;
        } catch (err) {
            return rejectWithValue(err.message || "Fetch profile failed");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            state.user = null;
            state.status = "idle";
            state.error = null;
            try {
                localStorage.removeItem("auth");
            } catch (e) {
                // ignore
            }
        },
        setUser(state, action) {
            state.user = action.payload;
            try {
                localStorage.setItem("auth", JSON.stringify({ token: state.token, user: state.user }));
            } catch (e) {
                // ignore
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.token = action.payload.token;
                state.user = action.payload.user ?? null;
                state.error = null;
                try {
                    localStorage.setItem("auth", JSON.stringify({ token: state.token, user: state.user }));
                } catch (e) {
                    // ignore
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || action.error.message;
            })
            .addCase(fetchProfile.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
                try {
                    localStorage.setItem("auth", JSON.stringify({ token: state.token, user: state.user }));
                } catch (e) {
                    // ignore
                }
            })
            .addCase(fetchProfile.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { logout, setUser } = authSlice.actions;

// Selectors
export const selectAuth = (s) => s.auth;
export const selectIsAuthenticated = (s) => Boolean(s.auth.token);
export const selectUser = (s) => s.auth.user;
export const selectAuthStatus = (s) => s.auth.status;

export default authSlice.reducer;
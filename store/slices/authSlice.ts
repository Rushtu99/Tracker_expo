import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, createUser, logout as firebaseLogout } from '@/firebase/library';

interface AuthState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
};

// ============================================================================
// Thunks for Auth Functions
// ============================================================================

/**
 * Thunk for user sign-in
 */
export const handleSignIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const user = await signIn(email, password);
      return user;
    } catch (error: any) {
      console.error('Sign-in Error:', error.message);
      return rejectWithValue(error.message);
    }
  }
);

/**
 * Thunk for user registration
 */
export const handleSignUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password, name }: { email: string; password: string; name?: string }, { rejectWithValue }) => {
    try {
      const user = await createUser(email, password, name);
      return user;
    } catch (error: any) {
      console.error('Sign-up Error:', error.message);
      return rejectWithValue(error.message);
    }
  }
);

/**
 * Thunk for user logout
 */
export const handleLogout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await firebaseLogout();
    return null;
  } catch (error: any) {
    console.error('Logout Error:', error.message);
    return rejectWithValue(error.message);
  }
});

// ============================================================================
// Slice Definition
// ============================================================================

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Sign-In
      .addCase(handleSignIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(handleSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(handleSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Handle Sign-Up
      .addCase(handleSignUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(handleSignUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(handleSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Handle Logout
      .addCase(handleLogout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(handleLogout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
      })
      .addCase(handleLogout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

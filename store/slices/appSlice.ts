import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    theme: 'light' | 'dark';
    data: Record<string, any>;
}

const initialState: AppState = {
    theme: 'light',
    data: {}
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setData: (state, action: PayloadAction<Record<string, any>>) => {
            state.data = { ...state.data, ...action.payload };
        },
    },
});

export const { toggleTheme, setData } = appSlice.actions;
export default appSlice.reducer;

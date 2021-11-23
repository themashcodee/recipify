import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export const toastSlice = createSlice({
	name: "toast",
	initialState: {
		toast: { text: "", timeout: 0 } as {
			text: string;
			bg?: string;
			color?: string;
			timeout: number;
		},
	},
	reducers: {
		popUpToast: (
			state,
			action: PayloadAction<{
				text: string;
				bg?: string;
				color?: string;
				timeout: number;
			}>
		) => {
			state.toast = action.payload;
		},
	},
});

export const toastReducer = toastSlice.reducer;
export const { popUpToast } = toastSlice.actions;
export const selectToast = (state: RootState) => state.toast.toast;

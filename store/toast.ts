import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Toast } from "types";

const initialState: { toast: Toast } = {
	toast: { text: "", timeout: 0 },
};

export const toastSlice = createSlice({
	name: "toast",
	initialState,
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

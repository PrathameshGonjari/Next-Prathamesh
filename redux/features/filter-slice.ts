import { PayloadAction, createSlice } from "@reduxjs/toolkit";

declare interface FilterState {
  search: string;
  limit: string;
  offset: string;
}

const initialState: FilterState = {
  search: "",
  limit: "",
  offset: "",
};

const handleResetFilter = (): FilterState => initialState;
const handleUpdateFilter = (
  state: FilterState,
  action: PayloadAction<FilterState>
): FilterState => {
  const updateFilterState = action.payload;
  return { ...state, ...updateFilterState };
};

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: handleUpdateFilter,
    resetFilter: handleResetFilter,
  },
});

export const { updateFilter, resetFilter } = filter.actions;
export default filter.reducer;

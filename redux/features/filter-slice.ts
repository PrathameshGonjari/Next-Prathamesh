import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: FilterType = {
  limit: "6",
  offset: "",
};

const handleResetFilter = (): FilterType => initialState;
const handleUpdateFilter = (
  state: FilterType,
  action: PayloadAction<FilterType>
): FilterType => {
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

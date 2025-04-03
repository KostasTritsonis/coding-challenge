import { DataProps } from '@/lib/type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type DataState = {
  data: DataProps[];
  filteredData: DataProps[];
  loading: boolean;
};

const initialState: DataState = {
  data: [] ,
  filteredData: [],
  loading: true,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataProps[]>) => {
      state.data = action.payload;
    },
    setFilteredData: (state, action: PayloadAction<DataProps[]>) => {
      state.filteredData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  }
});

export const { setData, setFilteredData, setLoading } = dataSlice.actions;
export default dataSlice.reducer;
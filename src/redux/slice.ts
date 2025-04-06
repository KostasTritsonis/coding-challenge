import { DataProps } from '@/lib/type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type DataState = {
  data: DataProps[];
  tempData: DataProps[];
  loading: boolean;
};

const initialState: DataState = {
  data: [] ,
  tempData: [],
  loading: true,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataProps[]>) => {
      state.data = action.payload;
    },
    setTempData: (state, action: PayloadAction<DataProps[]>) => {
      state.tempData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  }
});

export const { setData, setTempData, setLoading } = dataSlice.actions;
export default dataSlice.reducer;
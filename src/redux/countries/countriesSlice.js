import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://restcountries.com/v3.1/all';

export const getCountriesInfo = createAsyncThunk("countries/getCountriesInfo",
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {
  countries: [],
  status: "idle",
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesInfo.fulfilled, (state, action) => {
        const newCountriesArr = action.payload.map(country => ({
            name: country.name.common,
            flag: country.flags.svg,
        }));
        console.log(newCountriesArr);
        return { ...state, status: "fulfilled", countries: newCountriesArr };
      })
      .addCase(getCountriesInfo.pending, (state) => {
        return { ...state, status: "Loading" }
      })
      .addCase(getCountriesInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;

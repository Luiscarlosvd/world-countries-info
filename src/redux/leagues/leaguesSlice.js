import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const API_URL = 'https://api.football-data.org/v4/competitions/PD/standings?season=2022';

const headers = {
  headers: { 'X-Auth-Token': API_KEY }
};

export const getLeagueInfo = createAsyncThunk(
  "leagues/getLeaguesInfo",
  async () => {
    try {
      const response = await axios.get(API_URL, headers);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {
  LeagueTeams: [],
  status: "idle",
  error: null,
};

const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLeagueInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        console.log(action.payload);
      })
      .addCase(getLeagueInfo.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getLeagueInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default leaguesSlice.reducer;

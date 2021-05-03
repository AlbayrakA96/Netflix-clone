import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    movieId: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setMovieIdRedux: (state, action) => {
      state.movieId = action.payload;
    },
  },
});

export const { login, logout, setMovieIdRedux } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectMovieId = (state) => state.user.movieId;

export default userSlice.reducer;

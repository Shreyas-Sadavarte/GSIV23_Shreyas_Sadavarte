import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovieById, getUpcomingMovies, searchMovie } from '../../BO/movies.BO';

// Define your initial state
const initialState = {
    data: [],
    searchResults: [],
    movieData: [],
    searchQuery: "",
    page: 1,
    loading: false,
    error: null,
};

// Create a slice with reducers for each thunk
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },

        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle the fetchUsersAsync success and error cases
            .addCase(getUpcomingMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUpcomingMovies.fulfilled, (state, action) => {
                state.loading = false;
                if (action.meta.arg.loadMore) {
                    state.data = [...state.data, ...action.payload.results]
                } else {
                    state.data = action.payload.results
                }
            })
            .addCase(getUpcomingMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchMovie.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.loading = false;
                if (action.meta.arg.loadMore) {
                    state.searchResults = [...state.searchResults, ...action.payload.results]
                } else {
                    state.searchResults = action.payload.results
                }
            })
            .addCase(searchMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getMovieById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.loading = false;
                state.movieData = action.payload
            })
            .addCase(getMovieById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export const { setSearchQuery, setSearchResults } = dataSlice.actions;

// Export the reducer
export default dataSlice.reducer;

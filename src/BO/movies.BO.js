import axiosInstance from "../config/axiosConfig";
import { createAsyncThunk } from '@reduxjs/toolkit';

const getUpcomingMovies = createAsyncThunk('movies/getMovies', async ({ loadMore, page }) => {
    const response = await axiosInstance.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&sort_by=primary_release_date.asc`)
    return response.data;
});

const searchMovie = createAsyncThunk('movies/searchMovie', async ({ loadMore, searchQuery, page }) => {
    const response = await axiosInstance.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`)
    return response.data;
});

const getMovieById = createAsyncThunk('movies/getMovieById', async (id) => {
    const response = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
    return response.data;
});

export {
    getUpcomingMovies,
    searchMovie,
    getMovieById
}


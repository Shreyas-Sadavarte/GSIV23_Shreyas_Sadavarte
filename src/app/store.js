import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../components/ListPage/listPageSlice'; // Import your dataSlice and async thunks
import { getUpcomingMovies } from '../BO/movies.BO';

// Create the Redux store
const store = configureStore({
    reducer: {
        // Add your data slice reducer to the store
        data: dataSlice,
        // Add any other reducers you may have here
    },
});

// Export the store
export default store;

// You can also export the async thunks for use in your components
export { getUpcomingMovies };

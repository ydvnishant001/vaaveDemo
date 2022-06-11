import { configureStore } from '@reduxjs/toolkit';
import postReducers from '../reducers/postReducers';

const store = configureStore({
    reducer: {
    postReducers: postReducers,
  }
});

export default store;

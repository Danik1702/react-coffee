import { configureStore } from '@reduxjs/toolkit';
import actionModalReducer from './reducers/actionModal';

const store = configureStore({
  reducer: {
    actionModal: actionModalReducer,
  },
});

export default store;
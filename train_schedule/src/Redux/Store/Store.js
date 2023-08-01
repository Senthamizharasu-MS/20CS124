import { configureStore } from '@reduxjs/toolkit';
import trainSliceReducer from '../Slice/trainSlice';


// const rootReducer = combineReducers({Train:trainSliceReducer,});
// const store = configureStore({
//     reducer: rootReducer,
// });
const store = configureStore({
    reducer: {
        Train:trainSliceReducer,
    },
});

export default store;
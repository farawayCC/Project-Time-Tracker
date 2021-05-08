import { configureStore } from '@reduxjs/toolkit';
import cardState from './createNewProjectSlice';
import pomoState from './addPomoDone'

export default configureStore({
  reducer: {
    cardList: cardState,
    pomoList: pomoState,
  },
});

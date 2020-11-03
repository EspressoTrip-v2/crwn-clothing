import { createSelector } from 'reselect';

/* GET THE USER STATE */
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

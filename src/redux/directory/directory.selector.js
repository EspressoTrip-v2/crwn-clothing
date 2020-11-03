import { createSelector } from 'reselect';

/* GET DIRECTORY STATE */
const selectDirectory = (state) => state.directory;

/* GET THE DIRECTORY SECTIONS */
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

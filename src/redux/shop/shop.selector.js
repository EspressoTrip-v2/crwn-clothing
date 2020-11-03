import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
  Object.keys(collections).map((item) => collections[item])
);

/* CURRIED CREATE SELECTOR FUNCTION */
/* NEEDS STATE PARAM WHEN CALLING FROM COMPONENT BECAUSE IT FEEDS BACK UP THE CHAIN */
export const selectCollection = (collectUrlParam) =>
  createSelector([selectCollections], (collections) => collections[collectUrlParam]);

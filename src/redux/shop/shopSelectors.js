import { createSelector } from "reselect";

const selectShop = store => store.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

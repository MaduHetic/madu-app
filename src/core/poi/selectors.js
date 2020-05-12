import { createSelector } from "reselect";

export const poi = (state) => state.poi;
export const isLoading = (state) => poi(state).isLoading;
export const allPoi = (state) => poi(state).allPoi;
export const getPoi = (state) => poi(state).poi;

export const getAllPoiType = createSelector(
    [allPoi],
    poi => Array.from(new Set(poi.map(singlePoi => singlePoi.type)))
);
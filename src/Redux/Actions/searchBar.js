import {
    SET_CURRENT_COUNTY,
    SET_CURRENT_SORT_TYPE
} from './actionTypes';

export const setCurrentCounty = (currentCountyName) => {
    return {
        type: SET_CURRENT_COUNTY,
        county: currentCountyName
    }
}

export const setCurrentSortType = (currentSortType) => {
    return {
        type: SET_CURRENT_SORT_TYPE,
        sortType: currentSortType
    }
}
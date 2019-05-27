import { SET_CURRENT_COUNTY, SET_CURRENT_SORT_TYPE } from "../Actions/actionTypes";

const searchBar = (state = {
    currentCounty: '',
    sortType: null
}, action) => {
    switch (action.type) {
        case SET_CURRENT_COUNTY:
            return {
                ...state,
                currentCounty: action.county
            }
        case SET_CURRENT_SORT_TYPE:
            return {
                ...state,
                currentSortType: action.sortType
            }
        default:
            return state
    }
}

export default searchBar;
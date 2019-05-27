import { SET_AQI_LIST } from "../Actions/actionTypes";

const aqiList = (state = {
    aqiList: []
}, action) => {
    switch (action.type) {
        case SET_AQI_LIST:
            return {
                ...state,
                aqiList: action.aqiList
            }
        default:
            return state
    }
}

export default aqiList;
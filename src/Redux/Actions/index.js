import {
    SET_AQI_LIST
} from './actionTypes';

export const setAQIList = (aqiList) => {
    return {
        type: SET_AQI_LIST,
        aqiList: aqiList
    }
}

// export const getAQIAction = () => {
//     return dispatch => {
//         dispatch(requestPosts())
//         return fetch(url, {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//         })
//             .then(response => response.json())
//             .then(json => {
//                 if (json.error_code !== 0) {
//                     window.alert(json.error_text);
//                     window.location.href = ${window.origin}/logout;
//                 }

//                 const currentUser = new User();
//                 currentUser.loadFromJSON(json.result);
//                 dispatch(receiveUserInfo(currentUser))
//             })
//             .then(() => dispatch(receivePosts()))
//             .catch(error => message.error('取得訊息錯誤'));

//     }
// }
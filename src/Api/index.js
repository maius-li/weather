import Weather from '../Classes/Aqi';
import { setAQIList } from '../Redux/Actions/index'

const getAqiByJson = (json) => {
    const weather = new Weather();
    weather.loadFromJson(json);

    return weather;
};

const getAqisByJson = (json) => {
    return json.map(getAqiByJson);
};

export const getAQI = () => {
    const url = '/ws/Data/AQI/?$format=json';
    return dispatch => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                const aqis = getAqisByJson(json);
                dispatch(setAQIList(aqis))
            });
    }
};

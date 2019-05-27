import { combineReducers } from 'redux';
import aqiList from './aqiList';
import searchBar from './searchBar';

export default () => combineReducers({
    aqiList,
    searchBar
});

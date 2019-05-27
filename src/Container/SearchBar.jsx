import React, { Component } from 'react';
import CountyList from '../Components/CountyList';
import SortTypeList from '../Components/SortTypeList';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar clearfix">
                <CountyList />
                <SortTypeList />
            </div>
        );
    }
}

export default SearchBar;
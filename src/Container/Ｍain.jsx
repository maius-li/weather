import React, { Component } from 'react';
import SearchBar from '../Container/SearchBar';
import AQIListContainer from './AQIListContainer';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <AQIListContainer />
            </div>
        );
    }
}

export default Main;
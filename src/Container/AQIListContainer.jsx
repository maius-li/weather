import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAQI } from '../Api';
import AQIList from '../Components/AQIList';

class AQIListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] };
    }

    componentDidMount() {
        this.props.dispatch(getAQI());
        this.filterAQIList();
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentCounty !== prevProps.currentCounty) {
            this.filterAQIList();
        }

        if(this.props.currentSortType !== prevProps.currentSortType) {
            this.sortPM25List();
        }
    }

    filterAQIList = () => {
        const { aqiList, currentCounty } = this.props;
        const filterList = aqiList.filter(item => item.County === currentCounty);
        this.setState({
            list: filterList
        })
    }

    sortPM25List = () => {
        const { list } = this.state;
        const { currentSortType } = this.props;
        let sortList = [];

        sortList = list.sort((first, second) => {
            return  +second['PM2.5'] - +first['PM2.5'];
        });
    
        if(currentSortType === 1) {
            sortList = list.sort((first, second) => {
                return +first['PM2.5'] - +second['PM2.5'];
            });
        }

        this.setState({list: sortList});  
    }

    render() {
        return (
            <AQIList lists={this.state.list} />
        );
    }
}

const mapStateToProps = state => ({
    aqiList: state.aqiList.aqiList,
    currentCounty: state.searchBar.currentCounty,
    currentSortType: state.searchBar.currentSortType
})

export default connect(mapStateToProps)(AQIListContainer);
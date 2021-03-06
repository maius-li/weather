import { Select } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentSortType } from '../Redux/Actions/searchBar';

class SortTypeList extends Component {

    handleChange = (value) => {
        this.props.dispatch(setCurrentSortType(+value));
    }

    render() {
        const { currentCounty } = this.props;
        const Option = Select.Option;
        const sortTypeList = [
            '降冪',
            '升冪'
        ];

        return (
            <Select
                showSearch
                allowClear={false}
                style={{ width: '40%', float: 'left', marginLeft: '5%' }}
                placeholder="排序"
                defaultValue={null}
                disabled={currentCounty === ''}
                optionFilterProp="children"
                onChange={this.handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                {sortTypeList.map((item, index) => {
                    return (
                        <Option
                            key={index}
                            value={index}
                        >
                            {item}
                        </Option>
                    )
                })}
            </Select>
        );
    }
}

const mapStateToProps = state => ({
    currentCounty: state.searchBar.currentCounty
})

export default connect(mapStateToProps)(SortTypeList);
import { Select } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentCounty } from '../Redux/Actions/searchBar';

class CountyList extends Component {

    handleChange = (value) => {
        this.props.dispatch(setCurrentCounty(value));
    }

    render() {
        const Option = Select.Option;
        const countyList = [
            '基隆市',
            '臺北市',
            '新北市',
            '桃園市',
            '新竹市',
            '新竹縣',
            '苗栗縣',
            '臺中市',
            '彰化縣',
            '南投縣',
            '雲林縣',
            '嘉義市',
            '嘉義縣',
            '臺南市',
            '高雄市',
            '屏東縣',
            '臺東縣',
            '花蓮縣',
            '宜蘭縣',
            '澎湖縣',
            '金門縣',
            '連江縣'
        ];

        return (
            <Select
                showSearch
                allowClear={true}
                style={{ width: '50%' }}
                defaultValue=""
                placeholder="請選擇城市"
                optionFilterProp="children"
                onChange={this.handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                {countyList.map((item, index) => {
                    return (
                        <Option
                            key={index}
                            value={item}
                        >
                            {item}
                        </Option>
                    )
                })}
            </Select>
        );
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(CountyList);

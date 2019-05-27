import React from 'react';
import AQIListItem from './AQIListItem';

const AQIList = (props) => {
    const getAQIListItem = () => {
        const { lists } = props;
        const AQIItem = [];

        lists.map((item, index) => {
            AQIItem.push(<AQIListItem item={item} key={index} />);
        });

        return (AQIItem);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>城市</th>
                    <th>鄉鎮</th>
                    <th>PM 2.5</th>
                </tr>
            </thead>
            <tbody>
                {getAQIListItem()}
            </tbody>
        </table>
    );
}

export default AQIList;
import React from 'react';

const AQIListItem = (props) => {
        const { item } = props;

        return (
            <tr>
                <td>{item.County}</td>
                <td>{item.SiteName}</td>
                <td>{item['PM2.5']}</td>
            </tr>
        );
}
export default AQIListItem;
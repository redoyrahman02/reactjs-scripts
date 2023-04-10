import React from 'react';
import moment from 'moment-timezone';

function TimeZoneList() {
    const ignoreList = ['America/Puerto_Rico', 'America/Virgin', "America/Adak"];
    const usTimeZones = moment.tz.names().filter(name => {
        return name.startsWith('America/') && !ignoreList.includes(name);
        });

    return (
        <div>
        <h2>List of US Timezones:</h2>
        <ul>
            {usTimeZones.map(timezone => (
            <li key={timezone}>{timezone}</li>
            ))}
        </ul>
        </div>
    );
}

export default TimeZoneList;

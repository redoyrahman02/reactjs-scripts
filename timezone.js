import React from 'react';
import moment from 'moment-timezone';

function TimeZoneList() {
  const usTimeZones = moment.tz.names().filter(name => name.startsWith('America/'));

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

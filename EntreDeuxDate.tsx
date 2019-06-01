import React from 'react';
import moment from 'moment'

export default ({ date1, date2 }) => <div><h1> {date1.format('l') } - {date2.format('l')}</h1>
<h2>{moment(date2).from(date1)}</h2></div>;

import React from 'react';
import DateTime from './DateTime';
import withDateTimePretty from './withDateTimePretty';

const DateTimePretty = withDateTimePretty(DateTime);

export default function Video(props) {
  return (
    <div className='video'>
      <iframe
        src={props.url}
        title={props.url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

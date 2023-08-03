import React, { useEffect, useState } from 'react';

export default function Details({ info }) {
  const [avatar, setAvatar] = useState('');
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    setAvatar('');

    fetch(process.env.REACT_APP_ID_USER_DETAILS + `/${info.id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data.details);
        setAvatar(data.avatar);
      })
      .catch((error) => console.log(error));
  }, [info.id]);

  return (
    <div className='card col-4'>
      <img src={avatar} className='card-img-top' alt={info.name} />
      <div className='card-body'>
        <h3 className='card-title'>{info.name}</h3>
        <p className='card-text'>City: {userDetails.city}</p>
        <p className='card-text'>Company: {userDetails.company}</p>
        <p className='card-text'>Position: {userDetails.position}</p>
      </div>
    </div>
  );
}

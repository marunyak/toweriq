/* eslint-disable react/prop-types */
import React from 'react';

function UserItem(props) {
  const {
    id, name, surname, desc
  // eslint-disable-next-line react/destructuring-assignment
  } = props.user;

  return (
    <div className="user-item" data-id={id}>
      <h1 className="name-surname">
        {name}
        {' '}
        {surname}
      </h1>
      <p className="text mb-6 text-break">{desc}</p>
    </div>
  );
}

export default UserItem;

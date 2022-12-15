import React from 'react';
import Modal from './Modal';

const Link = ({href, actions, children}) => {
  return (
    <a
      href={href}
      onClick = {event => {
        event.preventDefault();
        console.log(href);
        <Modal />
      }}
    >
      {children}
    </a>
  )
}

export default Link
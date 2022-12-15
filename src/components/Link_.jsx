import React from 'react';

const Link = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal=() => {
    setIsOpen(false);
  }

  return(
    <>
      {isOpen && (
        <div>
          <h1>Soy Modal</h1>
        </div>
      )}
      <button onClick={openModal}>Abrir modal</button>
      <button onClick={closeModal}>cerrar modal</button>
    </>
  )

}

export default Link;
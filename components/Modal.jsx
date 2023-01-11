import React from 'react';

function Modal({ isOpen, setModal }) {
  return (
    <>
      {isOpen && (
        <div className='bg-zinc-700 h-24 w-48 text-center absolute bottom-96 right-28'>
          <h2 className='flex justify-center pt-8'>
            Your Message has been sent!
          </h2>
          <button
            className='absolute p-1 px-2 rounded-md top-1 right-1 bg-yellow-800 opacity-80'
            onClick={() => {
              setModal(false);
            }}>
            X
          </button>
        </div>
      )}
    </>
  );
}

export default Modal;

import React, { useState } from 'react';
import TicketForm from './TicketForm/page';


export default function UploadTicket() {
  const [showTicketForm, setShowTicketForm] = useState(false);

  const handleButtonClick = () => {
    setShowTicketForm(true);
  };

  const handleClose = () => {
    setShowTicketForm(false);
  };

  const handleOutsideClick = (e) => {
    e.stopPropagation();
    setShowTicketForm(false);
  };

  return (
    <div className="flex justify-center mt-12 mb-8">
      <button
        type="button"
        className="ml-2 px-4 py-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-125"
        onClick={handleButtonClick}
      >
        Publicar un Ticket
      </button>

      {showTicketForm && (
        <div onClick={handleOutsideClick} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-4 rounded shadow-lg">
            {/* <button onClick={handleClose} className="text-sm font-semibold leading-6 text-gray-900 ">X</button> */}
            <TicketForm/>
          </div>
        </div>
      )}
    </div>
  );
}

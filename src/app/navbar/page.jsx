import React, { useState } from 'react';
import SignIn from '../signIn/page';

export default function Navbar() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = (e) => {
    e.stopPropagation();
    setShowSignIn(true);
  };

  const handleClose = () => {
    setShowSignIn(false);
  };

  const handleOutsideClick = (e) => {
    e.stopPropagation();
    setShowSignIn(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Ticket Swap
        </div>
        <div>
          <a href="#" onClick={handleSignInClick} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
        </div>
      </div>

      {showSignIn && (
        <div onClick={handleOutsideClick} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-4 rounded shadow-lg">
            <button onClick={handleClose}>Close</button>
            <SignIn />
          </div>
        </div>
      )}
    </nav>
  );
}
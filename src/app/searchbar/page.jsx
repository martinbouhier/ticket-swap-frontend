import React, { useState } from 'react';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_TICKET_SWAP_API_URL}/tickets/search/${inputValue}`);
        const tickets = await response.json();
        console.log(tickets);
    };

    return (
        <div className="flex items-center justify-center">
            <input
                type="text"
                placeholder="Encontra tu ticket..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                type="button"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleButtonClick}
            >
                Buscar
            </button>
        </div>
    );
};
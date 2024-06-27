import React, { useState } from 'react';
import Ticket from '../ticket/page';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const [tickets, setTickets] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_TICKET_SWAP_API_URL}/tickets/search/${inputValue}`);
        if (!response.ok) {
            console.error('Failed to fetch tickets');
            return;
        }
        const fetchedTickets = await response.json();
        setTickets(fetchedTickets);
    };

    return (
        <div className="flex flex-col items-center justify-center">
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
            {tickets && (
                <div className="mt-4">
                    {tickets.map((ticket) => (
                        <Ticket
                            key={ticket._id}
                            ticket={ticket}
                            open={ticket !== null}
                            setOpen={() => setTickets(null)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

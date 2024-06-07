import React from 'react';

export default function SearchBar() {
    return (
        <div className="flex items-center justify-center">
            <input
                type="text"
                placeholder="Encontra tu ticket..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
            <button
                type="button"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Buscar
            </button>
        </div>
    );
};
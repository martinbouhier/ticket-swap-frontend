import { useState, useEffect } from "react";
import Ticket from "../ticket/page";
import axios from "axios";


export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_TICKET_SWAP_API_URL}/tickets`);
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);



  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">tickets</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {tickets.map((ticket) => (
            <button key={ticket._id} onClick={() => handleTicketClick(ticket)}>
              <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={ticket.image_url}
                  alt={ticket.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{ticket.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${ticket.price}
              </p>
            </button>
          ))}
        </div>
      </div>
      {selectedTicket && (
        <Ticket
          ticket={selectedTicket}
          open={selectedTicket !== null}
          setOpen={setSelectedTicket}
        />
      )}
    </div>
  );
}

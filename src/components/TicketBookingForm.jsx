import React, { useState } from "react";

const TicketBookingForm = (props) => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [journeyTime, setJourneyTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User details:\n From Location: ${fromLocation}\n To Location: ${toLocation}\n Journey Data: ${journeyDate}\n Journey Time: ${journeyTime}`);
  };

  return (
    <div>
      {props.isLoggedIn && (
        <form onSubmit={handleSubmit} className="ticket-form">
          <h1>Ticket Booking Form</h1>
          <div>
            <label>
              From Location
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label>
              To Location
              <input
                type="text"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Journey Date
              <input
                type="date"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Journey Time
              <input
                type="time"
                value={journeyTime}
                onChange={(e) => setJourneyTime(e.target.value)}
                required
              />
            </label>
          </div>
          <input type="submit" value="Book Ticket" />
        </form>
      )}
    </div>
  );
};

export default TicketBookingForm;

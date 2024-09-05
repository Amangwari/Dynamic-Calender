import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  // Dynamic example data with price and category
  const dateData = {
    '2024-09-01': { event: 'Event 1', price: '$100', category: 'Package A' },
    '2024-09-02': { event: 'Event 2', price: '$150', category: 'Package B' },
    '2024-09-03': { event: 'Event 3', price: '$200', category: 'Package C' },
    // More dates with events and details
  };

  const formatDate = (date) => {
    // Format date to YYYY-MM-DD
    return date.toISOString().split('T')[0];
  };

  const isDateDisabled = (date) => {
    // Disable dates with no events
    return !dateData[formatDate(date)];
  };

  const renderDayContents = (day, date) => {
    const dateString = formatDate(date);
    const eventDetails = dateData[dateString];
    return (
      <div>
        <span>{day}</span>
        {eventDetails && (
          <div>
            <div className="event-text">{eventDetails.event}</div>
            <div className="event-details">
              {eventDetails.price} - {eventDetails.category}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        renderDayContents={renderDayContents}
        dayClassName={(date) =>
          isDateDisabled(date) ? 'react-datepicker__day--disabled' :
          dateData[formatDate(date)] ? 'react-datepicker__day--highlighted' :
          undefined
        }
        inline
      />
    </div>
  );
};

export default MyCalendar;

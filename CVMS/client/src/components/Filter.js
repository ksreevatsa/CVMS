import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const Filter = () => {
  const [items, setItems] = useState([
    { name: 'Ram', purpose: 'Meeting', time: '09:00 AM', dateofvisit: '2023-12-28', category: 'visitor' },
    { name: 'Shiva', purpose: 'Appointment', time: '10:30 AM', dateofvisit: '2023-12-28', category: 'visitor' },
    { name: 'Sampath', purpose: 'Checkup', time: '11:30 AM', dateofvisit: '2023-12-27', category: 'visitor' },
    { name: 'Naveen', purpose: 'outing', time: '01:00 PM', dateofvisit: '2023-12-27', category: 'Parents' },
    { name: 'Suresh', purpose: 'outing', time: '02:30 PM', dateofvisit: '2023-12-25', category: 'Parents' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedName, setSelectedName] = useState('');

  const filterItemsByCategory = (category) => {
    setSelectedCategory(category);
    setSelectedDate(null);
    setSelectedName('');
  };

  const filterItemsByDateAndName = (date) => {
    setSelectedCategory('');
    setSelectedDate(date);
    setSelectedName('');
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedDate(null);
    setSelectedName('');
  };

  const renderItems = items.filter((item) => {
    const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '';
    return (
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedDate || item.dateofvisit === formattedDate) &&
      (!selectedName || item.name.toLowerCase().includes(selectedName.toLowerCase()))
    );
  });

  const containerStyle = {
    display: 'flex',
  };

  const filterContainerStyle = {
    flex: '1',
    padding: '10px',
  };

  const cardContainerStyle = {
    flex: '2',
    display: 'flex',
    flexWrap: 'wrap',
  };

  const dropdownStyle = {
    margin: '5px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={filterContainerStyle}>
        <center>
          <select
            style={dropdownStyle}
            onChange={(e) => filterItemsByCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            <option value="visitor">Visitors</option>
            <option value="Parents">Parents</option>
          </select>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => filterItemsByDateAndName(date)}
            dateFormat="dd-MM-yyyy"
            placeholderText="Select Date"
          />
          <input
            type="text"
            placeholder="Enter Name"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
          />
          <button style={dropdownStyle} onClick={clearFilters}>
            Clear Filters
          </button>
        </center>
      </div>
      <div style={cardContainerStyle}>
        {renderItems.length === 0 ? (
          <p>No appointments</p>
        ) : (
          renderItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: '3px solid green',
                padding: '10px',
                margin: '10px',
                width: '200px',
                backgroundColor: '#ADD8E6',
              }}
            >
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Purpose: {item.purpose}</p>
              <p>Time: {item.time}</p>
              <p>Date of Visit: {item.dateofvisit}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Filter;
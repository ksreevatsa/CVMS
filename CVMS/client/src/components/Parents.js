import React from 'react';

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
  border: '1px solid #ddd', // Added border to the table
  backgroundColor: 'grey',
  
};

const thTdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  fontWeight: 'bold'
};

const ParentDetails = () => {
  return (
    <div >
      <h3 style={{ color: 'blue' }}>Parent Details</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Age</th>
            <th style={thTdStyle}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>K.Ravi</td>
            <td style={thTdStyle}>30</td>
            <td style={thTdStyle}>Engineer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParentDetails;

import React from 'react';

const tableStyle = {
  width: '70%', // Set your preferred width
  borderCollapse: 'collapse',
  marginTop: '20px',
  border: '1px solid #ddd', // Added border to the table
  backgroundColor: 'skyblue',
};

const thTdStyle = {
  border: '1px solid #ddd',
  padding: '12px', // Increase padding for better spacing
  color:'Darkblack',
  fontWeight: 'bold',
  textAlign: 'left',
};

const Visitor = (props) => {
  return (
    <div align="center" >
      <h1>Visitor Details</h1>
      <table style={tableStyle}>
        <thead >
          <tr >
            <th style={thTdStyle}>Attribute</th>
            <th style={thTdStyle}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>Name</td>
            <td style={thTdStyle}>{props.name}</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Phone</td>
            <td style={thTdStyle}>{props.phone}</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Relation</td>
            <td style={thTdStyle}>{props.relation}</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Time</td>
            <td style={thTdStyle}>{props.time}</td>
          </tr>
          <tr>
            <td style={thTdStyle}>ID</td>
            <td style={thTdStyle}>{props.id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Visitor;

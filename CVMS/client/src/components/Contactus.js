import { Card } from '@mui/material';
import React from 'react';

const Contactus = () => {
  const users = [
    { user: 'KSV', phno: 9555434333, email: 'msd@gmail.com'},
    { user: 'Dattu', phno: 44332222, email: 'kapaul@gmail.com' },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <br></br>
      <h1>Contact us:</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        {users.map((user, index) => (
          <Card key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px', margin: '10px',backgroundColor:'grey' }} elevation={10}>
            <h3>{user.user}</h3>
            <p>Phone: {user.phno}</p>
            <p>Email: {user.email}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Contactus;
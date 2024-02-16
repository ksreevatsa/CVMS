import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Gitapi = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      let response;
      if (username) {
        response = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: 'Bearer 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',
          },
        });
        setData([response.data]); // Wrap single user data in an array for consistent rendering
      } else {
        response = await axios.get('https://api.github.com/users', {
          headers: {
            Authorization: 'Bearer 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',
          },
        });
        setData(response.data);
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  useEffect(() => {
    // Fetch data for all users initially
    fetchUserData();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <form onSubmit={handleSubmit} style={{ position: 'absolute', top: '0', right: '0' }}>
        <TextField
          label="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" variant="contained" style={{ marginLeft: '8px' }}>
          Search
        </Button>
      </form>
      <div style={{ marginTop: '80px' }}>
        {error && <p>Error: {error.message}</p>}
        {data && Array.isArray(data) ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {data.map((userData) => (
              <Card key={userData.id} style={{ width: 300, height: 'auto', margin: '16px' }}>
                <CardMedia
                  component="img"
                  alt="GitHub Profile"
                  height="200"
                  image={userData.avatar_url}
                />
                <CardContent>
                    <br></br>
                  <Typography variant="h5" component="div">
                    {userData.name || 'No Name'}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Username: {userData.login || 'No Username'} <br />
                    Email: {userData.email || 'Not available'}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Gitapi;

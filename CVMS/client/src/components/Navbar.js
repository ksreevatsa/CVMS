import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import klulogo from './klulogo.jpg';

const styles = {
  navbar: {
    backgroundColor: '#AA0000', 
  },
  logo: {
    height: '60px', 
    marginRight: '10px',
  },
  logoText: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    fontSize: '16px',
    marginLeft: '10px',
  },
  spacer: {
    flexGrow: 1,
  },
};

export default function Navbar() {
  return (
    <AppBar position="static" style={styles.navbar}>
      <Toolbar>
        <div style={styles.logoText}>
          <img src={klulogo} alt="Your Alt Text" style={styles.logo} />
          
          <Typography variant="h4">CVMS</Typography>
        </div>
        <div style={styles.spacer} />
        <Button color="inherit" component={Link} to="/login" style={styles.button}>
          Login
        </Button>
        <Button color="inherit" component={Link} to="/counsellor" style={styles.button}>
          Councellors
        </Button>
        <Button color="inherit" component={Link} to="/student" style={styles.button}>
          Students
        </Button>
        <Button color="inherit" component={Link} to="/parent" style={styles.button}>
          Parents
        </Button>
        <Button color="inherit" component={Link} to="/gitapi" style={styles.button}>
          Gitapi
        </Button>
        <Button color="inherit" component={Link} to="/appointment" style={styles.button}>
          Appointment
        </Button>
        <Button color="inherit" component={Link} to="/contactus" style={styles.button}>
          Contactus
        </Button>
        <Button color="inherit" component={Link} to="/reports" style={styles.button}>
          Report
        </Button>
        <Button color="inherit" component={Link} to="/visitor" style={styles.button}>
          Visitors
        </Button>
        <Button color="inherit" component={Link} to="/filter" style={styles.button}>
          Filter
        </Button>
        <Button color="inherit" component={Link} to="/view" style={styles.button}>
          View
        </Button>
        <Button color="inherit" component={Link} to="/logout" style={styles.button}>
          Logout
        </Button>

      </Toolbar>
    </AppBar>
  );
}
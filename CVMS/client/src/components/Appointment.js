import React, { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Paper,
} from '@mui/material';

const Appointment = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    gender: '',
    age: '',
    mobileNo: '',
    email: '',
    studentId: '',
    studentName: '',
    purpose: '',
    date: '',
    time: '',
    proofFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, proofFile: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submission logic here
    console.log('Form submitted:', formData);
    // Add logic to send data to the server or perform any other actions
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <img src="https://img.freepik.com/premium-vector/appointment-icon-calendar-with-spesific-date-bussiness-concept-reminder-planner-organizer-vector-isolated-white-background-eps-10_399089-1245.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1703203200&semt=ais"  width="200px" height="200px" align="center" />
      <Typography variant="h4" gutterBottom>
        Appointment Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Parent Name"
              variant="outlined"
              fullWidth
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile No"
              variant="outlined"
              fullWidth
              name="mobileNo"
              type="tel"
              value={formData.mobileNo}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Student ID"
              variant="outlined"
              fullWidth
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Student Name"
              variant="outlined"
              fullWidth
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Purpose of Visit"
              variant="outlined"
              fullWidth
              name="purpose"
              multiline
              rows={4}
              value={formData.purpose}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Preferable Date"
              variant="outlined"
              fullWidth
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Time of Visit" 
              variant="outlined"
              fullWidth
              name="time"
              type="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>File Upload of Proof</InputLabel><br/><br/>
              <Input
                type="file"
                name="proofFile"
                onChange={handleFileChange}
                accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
              />
              <FormHelperText>Upload a file (PDF, Word, Image)</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Appointment;

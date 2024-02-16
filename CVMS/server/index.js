const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;
require('./config/db'); 

app.use(cors());

const studentsData = [
  { name: 'Student1', cgpa: 3.5, course: 'Computer Science' },
  { name: 'Student2', cgpa: 3.8, course: 'Engineering' },
  { name: 'Student3', cgpa: 3.2, course: 'Mathematics' },
  {name: 'Murali', cgpa:10.0 , course: 'MSWD'},
];

const counsellorsData = [
  { empid: 'C001', name: 'Counsellor1', designation: 'Psychologist' },
  { empid: 'C002', name: 'Counsellor2', designation: 'Career Advisor' },
];

app.get('/students', (req, res) => {
  res.json(studentsData);
});

app.get('/counsellors', (req, res) => {
  res.json(counsellorsData);
});

app.get('/visitors', (req, res) => {
  const currentDateTime = new Date().toLocaleString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const visitorsData = [
    { visitorid: 'V001', name: 'Visitor1', date: currentDateTime, timeZone },
    { visitorid: 'V002', name: 'Visitor2', date: currentDateTime, timeZone },
  ];
  res.json(visitorsData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

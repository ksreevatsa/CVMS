import { Card } from '@mui/material';
import React from 'react';

const Councellors = () => {
    const employees = [
        { empid: 1, name: 'ravi', phno: 9555434333, students: 20, email: 'john.doe@example.com' },
        { empid: 2, name: 'murali', phno: 44332222, students: 15, email: 'jane.smith@example.com' },
        { empid: 3, name: 'gopi', phno: 9876543210, students: 18, email: 'bob.johnson@example.com' },
        { empid: 4, name: 'mahesh', phno: 1234567890, students: 25, email: 'alice.williams@example.com' },
        { empid: 5, name: 'lokesh', phno: 5555555555, students: 22, email: 'chris.brown@example.com' },
    ];
    const cardColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];
    return (
        <div style={{ textAlign: 'center' }}>
            <br></br>
            <h1>Counselors:</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                {employees.map((employee, index) => (
                    <Card
                        key={index}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            width: '200px',
                            margin: '10px',
                            backgroundColor: cardColors[index],
                            color: 'white',
                            transition: 'transform 0.3s', // Transition effect on hover
                            cursor: 'pointer', // Change cursor on hover
                        }}
                        elevation={10}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.4)'; // Increase size on hover
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)'; // Restore size on hover out
                        }}
                    >
                        <h3>{employee.name}</h3>
                        <p>Employee ID: {employee.empid}</p>
                        <p>Phone: {employee.phno}</p>
                        <p>No. of Students: {employee.students}</p>
                        <p>Email: {employee.email}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Councellors;

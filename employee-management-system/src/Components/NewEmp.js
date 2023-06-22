import React, { useState } from 'react';
import "./NewEmp.css";
const NewEmp = () => {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [phone, setPhone] = useState(''); 


    const [employees, setEmployees] = useState([]);

    const handleClearAll = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
    };

    const handleAddEmployee = () => {
        
        const newEmployee = {
            firstName,
            lastName,
            email,
            phone,
        };

        setEmployees([...employees, newEmployee]);

        handleClearAll();
    };

    const handleDeleteEmployee = (index) => {
        const updatedEmployees = [...employees];
        updatedEmployees.splice(index, 1);
        setEmployees(updatedEmployees);
    };

    return (
        <div>
            <div className="form-container">
            <div>
                <h2>New Employee</h2>
                <div className="input-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <button id='clr' onClick={handleClearAll}>Clear All</button>
                    <button id='add' onClick={handleAddEmployee}>ADD</button>
                </div>
            </div>
</div>
            


            <div className="current-employees">
                <h2>Current Employees</h2>
                {employees.map((employee, index) => (
                    <div key={index} className="employee-item">
                        <span>{`${employee.firstName} ${employee.lastName}`}</span>
                        <button id='cross' onClick={() => handleDeleteEmployee(index)}>x</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default NewEmp;


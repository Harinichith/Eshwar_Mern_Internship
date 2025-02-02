import React, { useState } from 'react';
import axios from 'axios';

const Emp = () => {
    const [empid, setEmpid] = useState('');
    const [empname, setEmpname] = useState('');
    const [salary, setSalary] = useState(0);
    const[contact,setContact]=useState(0);

    const Submit = (e) => {
        e.preventDefault();
        console.log(empid, empname, salary,contact);
        axios.post("http://localhost:3002/emp", { empid, empname, salary,contact })
            .then((response) => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div id="emp">
            <h1>Create User</h1>
            <form className='w-50 bg-white' onSubmit={Submit}>
            <label htmlFor="id">EmployeeID:</label>
            <input type="number" id="id" name="empid" onChange={(e) => setEmpid(e.target.value)} />
            <label htmlFor="name">EmployeeName:</label>
            <input type="text" id="name" name="empname" onChange={(e) => setEmpname(e.target.value)} />
            <label htmlFor="salary">Salary:</label>
            <input type="number" id="salary" name="salary" onChange={(e) => setSalary(e.target.value)} />
            <label htmlFor="contact">Contact:</label>
            <input type="tel" id="contact" name="contact" onChange={(e) => setContact(e.target.value)} />
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
            <div>
                <p>EmployeeID: {empid}</p>
                <p>EmployeeName: {empname}</p>
                <p>salary: {salary}</p>
                <p>Contact:{contact}</p>
            </div>
        </div>
    );
}

export default Emp;
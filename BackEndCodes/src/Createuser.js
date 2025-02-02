import React, { useState } from 'react';
import axios from 'axios';

const Createuser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    const Submit = (e) => {
        e.preventDefault();
        console.log(name, age, email);
        axios.post("http://localhost:3002/Createuser", { name, email, age })
            .then((response) => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div id="createuser">
            <h1>Create User</h1>
            <form className='w-50 bg-white' onSubmit={Submit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" name="age" onChange={(e) => setAge(e.target.value)} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
}

export default Createuser;
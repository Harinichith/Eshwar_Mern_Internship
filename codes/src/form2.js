import {useState,useEffect} from 'react';

function Login(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[contact,setContact]=useState('');
    const[address,setAddress]=useState('');
    const handleChange =(e) =>{
        setName(e.target.value);
    };
    const handleChange1 =(e)=>{
        setEmail(e.target.value);
    };
    const handleChange2 =(e)=>{
        setPassword(e.target.value);
    };
    const handleChange3 =(e)=>{
        setContact(e.target.value);
    };
    const handleChange4 =(e)=>{
        setAddress(e.target.value);
    };
    const checkvalidate =(e)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    return(
        <div>
            <form>
                <h1>Login</h1>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                     <br />
                    Email:
                    <input type="text" value={email} onChange={handleChange1} />
                    <br />
                    Password:
                    <input type="text" value={password} onChange={handleChange2} />
                    <br />
                    contact:
                    <input type="text" value={contact} onChange={handleChange3} />
                    <br />
                    Address:
                    <input type="text" value={address} onChange={handleChange4} />
                   <br />

                </label>
            </form>
            <p>Your name is :{name}</p>
            <p>your email:{email}</p>
            <p>your password:{password}</p>
            <p>your contact:{contact}</p>
            <p>your address:{address}</p>
        </div>
    );
}
export default Login;
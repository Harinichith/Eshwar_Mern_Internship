import React, { useState } from "react";
import homeimg from './homeimg.jpeg';
import { useDispatch } from "react-redux";
import { addUser } from './slices/userslice';

const Home = () => {
    const dispatch = useDispatch();
    const [formdata, setformdata] = useState({
        number1: "",
        number2: "",
    });

    function handlechange(event) {
        const { name, value } = event.target;
        setformdata((curr) => {
            return {
                ...curr,
                [name]: value,
            };
        });
        console.log(name, value);
    }

    const add = (event) => {
        event.preventDefault();
        const sum = Number(formdata.number1) + Number(formdata.number2);
        dispatch(addUser({ number1: formdata.number1, number2: formdata.number2, result: sum }));
    };

    const multiply = (event) => {
        event.preventDefault();
        const product = Number(formdata.number1) * Number(formdata.number2);
        dispatch(addUser({ number1: formdata.number1, number2: formdata.number2, result: product }));
    };

    return (
        <div>
            <center>
                <h1>Home</h1>
                <img src={homeimg} width="500" alt="Home" /><br />
                <form>
                    <label htmlFor="number1">Number1</label>
                    <input
                        name="number1"
                        type="number"
                        value={formdata.number1}
                        onChange={handlechange}
                        placeholder="Enter your First Number1:"
                    /><br />
                    <label htmlFor="number2">Number2</label>
                    <input
                        name="number2"
                        type="number"
                        value={formdata.number2}
                        onChange={handlechange}
                        placeholder="Enter your Second Number2:"
                    /><br />
                    <button onClick={add}>Add</button>
                    <button onClick={multiply}>Multiply</button>
                </form>
            </center>
        </div>
    );
};

export default Home;

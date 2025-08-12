import React,{useState} from "react";
import axios from "axios";
import "./Temperature.css";

function Temperature(){
    const [value,setValue] = useState(0);
    const [fromUnit,setFromUnit] = useState("celsius");
    const [toUnit,setToUnit] = useState("celsius");

    const [resultDiv,setResultDiv] = useState(null);

    function handleReset(e){
        setResultDiv(null);
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.get(`http://localhost:5000/api/temperature/convert?value=${value}&fromUnit=${fromUnit}&toUnit=${toUnit}`)
            .then((res)=>{
                console.log(res);
                setResultDiv(
                    <div id="resultDiv">
                        <h3>Result of your calculation: </h3>
                        <h2>{res.data.fromValue} {res.data.fromUnit} = {res.data.toValue.toFixed(4)} {res.data.toUnit}</h2>
                        <button onClick={handleReset} id="resetBtn">Reset</button>
                    </div>
                );
                
            }).catch((err)=>{
                setResultDiv(
                    <div id="resultDiv">
                        <h2>Error!!!</h2>
                        <button onClick={handleReset} id="resetBtn">Reset</button>
                    </div>
                );
                console.log(err);
            });
    }

    return(
        <>
            <div className="Temperature">
                {
                    resultDiv??
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="value">Enter the temperature to convert: </label> <br />
                        <input type="number" id="value" name="value" value={value} onChange={(e)=>setValue(e.target.value)} required/> <br />
                        <label htmlFor="fromUnit">Unit to Convert from: </label> <br />
                        <select id="fromUnit" name="fromUnit" value={fromUnit} onChange={(e)=> setFromUnit(e.target.value)} required>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                        <br />
                        <label htmlFor="toUnit">Unit to Convert to: </label> <br />                    
                        <select id="toUnit" name="toUnit" value={toUnit} onChange={(e)=> setToUnit(e.target.value)} required>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                        <br />
                        <input type="submit" value="Convert" id="submitBtn"/>
                    </form>
                }
            </div>
        </>
    );
}

export default Temperature;
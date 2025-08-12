import React,{useState} from "react";
import axios from "axios";
import "./Length.css";

function Length(){

    const [value,setValue] = useState(0);
    const [fromUnit,setFromUnit] = useState("meter");
    const [toUnit,setToUnit] = useState("meter");

    const [resultDiv,setResultDiv] = useState(null);

    function handleReset(e){
        setResultDiv(null);
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.get(`http://localhost:5000/api/convert?value=${value}&fromUnit=${fromUnit}&toUnit=${toUnit}`)
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
            <div className="Length">
                {
                    resultDiv??
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="value">Enter the length to convert: </label> <br />
                        <input type="number" id="value" name="value" value={value} onChange={(e)=>setValue(e.target.value)} required/> <br />
                        <label htmlFor="fromUnit">Unit to Convert from: </label> <br />
                        <select id="fromUnit" name="fromUnit" value={fromUnit} onChange={(e)=> setFromUnit(e.target.value)} required>
                            <option value="millimeter">Millimeter</option>
                            <option value="centimeter">Centimeter</option>
                            <option value="meter">Meter</option>
                            <option value="kilometer">Kilometer</option>
                            <option value="inch">Inch</option>
                            <option value="foot">Foot</option>
                            <option value="yard">Yard</option>
                            <option value="mile">Mile</option>
                        </select>
                        <br />
                        <label htmlFor="toUnit">Unit to Convert to: </label> <br />                    
                        <select id="toUnit" name="toUnit" value={toUnit} onChange={(e)=> setToUnit(e.target.value)} required>
                            <option value="millimeter">Millimeter</option>
                            <option value="centimeter">Centimeter</option>
                            <option value="meter">Meter</option>
                            <option value="kilometer">Kilometer</option>
                            <option value="inch">Inch</option>
                            <option value="foot">Foot</option>
                            <option value="yard">Yard</option>
                            <option value="mile">Mile</option>
                        </select>
                        <br />
                        <input type="submit" value="Convert" id="submitBtn"/>
                    </form>
                }
                
            </div>
        </>
    );
}

export default Length;
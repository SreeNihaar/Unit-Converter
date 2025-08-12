import React,{useState} from "react";
import axios from "axios";
import "./Weight.css";

function Weight(){

    const [value,setValue] = useState(0);
    const [fromUnit,setFromUnit] = useState("gram");
    const [toUnit,setToUnit] = useState("gram");

    const [resultDiv,setResultDiv] = useState(null);

    function handleReset(e){
        setResultDiv(null);
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.get(`http://localhost:5000/api/weight/convert?value=${value}&fromUnit=${fromUnit}&toUnit=${toUnit}`)
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
            <div className="Weight">
                {
                    resultDiv??
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="value">Enter the weight to convert: </label> <br />
                        <input type="number" id="value" name="value" value={value} onChange={(e)=>setValue(e.target.value)} required/> <br />
                        <label htmlFor="fromUnit">Unit to Convert from: </label> <br />
                        <select id="fromUnit" name="fromUnit" value={fromUnit} onChange={(e)=> setFromUnit(e.target.value)} required>
                            <option value="milligram">Milligram</option>
                            <option value="gram">Gram</option>
                            <option value="kilogram">Kilogram</option>
                            <option value="ounce">Ounce</option>
                            <option value="pound">Pound</option>
                        </select>
                        <br />
                        <label htmlFor="toUnit">Unit to Convert to: </label> <br />                    
                        <select id="toUnit" name="toUnit" value={toUnit} onChange={(e)=> setToUnit(e.target.value)} required>
                            <option value="milligram">Milligram</option>
                            <option value="gram">Gram</option>
                            <option value="kilogram">Kilogram</option>
                            <option value="ounce">Ounce</option>
                            <option value="pound">Pound</option>
                        </select>
                        <br />
                        <input type="submit" value="Convert" id="submitBtn"/>
                    </form>
                }
            </div>
        </>
    );
}

export default Weight;
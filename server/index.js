import express from "express";
import {dirname,join} from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import cors from "cors";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());

app.use(express.urlencoded({extended: false}));

const PORT = 5000;

const length_metrics={
    meter: 1,
    centimeter: 0.01,
    millimeter: 0.001,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34
};

const length_sym={
    meter: "m",
    centimeter: "cm",
    millimeter: "mm",
    kilometer: "km",
    inch: "in",
    foot: "ft",
    yard: "yd",
    mile: "mi"
}

const weight_metrics={
    gram: 1,
    milligram: 0.001,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592
};

const weight_sym={
    gram: "g",
    milligram: "mg",
    kilogram: "kg",
    ounce: "oz",
    pound: "lb"
}

const temperature_sym={
    celsius: "°C",
    fahrenheit: "°F",
    kelvin: "K"
};

app.get("/api/convert",(req,res)=>{
    //Length
    const value = Number(req.query.value);
    const finalResult = value*(length_metrics[req.query.fromUnit]/length_metrics[req.query.toUnit]);

    return res.json({
        "fromValue": value,
        "toValue": finalResult,
        "fromUnit": length_sym[req.query.fromUnit],
        "toUnit": length_sym[req.query.toUnit]
    });
});


app.get("/api/weight/convert",(req,res)=>{
    //Weight
    const value = Number(req.query.value);
    const finalResult = value*(weight_metrics[req.query.fromUnit]/weight_metrics[req.query.toUnit]);

    return res.json({
        "fromValue": value,
        "toValue": finalResult,
        "fromUnit": weight_sym[req.query.fromUnit],
        "toUnit": weight_sym[req.query.toUnit]
    });
});

app.get("/api/temperature/convert",(req,res)=>{
    //Temperature
    const value = Number(req.query.value);
    let finalResult=value;
    switch(req.query.fromUnit){
        case "celsius":
            if(req.query.toUnit==="celsius"){
                finalResult=value;
            }
            else if(req.query.toUnit==="fahrenheit"){
                finalResult=value*1.8 + 32;
            }
            else{
                finalResult=value+273.15;
            }
            break;
        case "fahrenheit":
            if(req.query.toUnit==="celsius"){
                finalResult=(value-32)*5/9;
            }
            else if(req.query.toUnit==="fahrenheit"){
                finalResult=value;
            }
            else{
                finalResult=((value-32)*5/9)+273.15;
            }
            break;
        case "kelvin":
            if(req.query.toUnit==="celsius"){
                finalResult=value-273.15;
            }
            else if(req.query.toUnit==="fahrenheit"){
                finalResult=((value-273.15)*9/5)+32;
            }
            else{
                finalResult=value;
            }
            break;
        default:
            console.log("From Unit Error!!!");
            break;
    }

    return res.json({
        "fromValue":value,
        "toValue": finalResult,
        "fromUnit": temperature_sym[req.query.fromUnit],
        "toUnit": temperature_sym[req.query.toUnit]
    });
});


app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
});
import "./App.css";
import Weight from "./Components/Weight.js";
import Length from "./Components/Length.js";
import Temperature from "./Components/Temperature.js";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="container">
          <div id="heading">Unit Converter</div>
          <div id="list">
            <NavLink className="listitems" to="/" id="lengthBtn">Length</NavLink>
            <NavLink className="listitems" to="/weight" id="weightBtn">Weight</NavLink>
            <NavLink className="listitems" to="/temperature" id="temperatureBtn">Temperature</NavLink>
          </div>
          <Routes>
            <Route path="/" element={<Length />}/>
            <Route path="/weight" element={<Weight />} />
            <Route path="/temperature" element={<Temperature />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

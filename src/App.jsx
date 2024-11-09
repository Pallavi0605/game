import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Form from "./pages/form";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Form4 from "./pages/form4";
import Form5 from "./pages/form5";
function App() {
  return (
    <Router>
      <div className=" overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form4" element={<Form4 />} />
          <Route path="/form5" element={<Form5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

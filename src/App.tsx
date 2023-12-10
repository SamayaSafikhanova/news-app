import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnotherPage from "./pages/AnotherPage"; 
import "App.css";
const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="anotherpage" element={<AnotherPage/>} />
    </Routes>
  </div>
);

export default App;
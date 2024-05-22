import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Reports from "./components/pages/Reports"
import Navbar from "./components/Navbar";
import Testreports from "./components/pages/Testreports"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/reports" element={<Reports/>} />
      <Route path="/testreports" element={<Testreports/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

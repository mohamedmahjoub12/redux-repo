import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import About from "./Pages/About";
import AddTask from "./Components/AddTask/AddTask";
import ListTask from "./Components/listTask/ListTask";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Index from "./components/Index";
import GlobalStyle from "./globalstyles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Appointment from "./pages/Pop-up/Appointment";
import Billing from "./pages/Pop-up/Billing";
import Congratulations from "./pages/Pop-up/Congratulations";
// import Dashboard from "./pages/Dashboard";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        {/* <Route exact path="/" element={<Dashboard />}></Route> */}
        <Route path="/Support" element={<Appointment />}></Route>
        <Route path="/Billing" element={<Billing />}></Route>
        <Route path="/Congrats" element={<Congratulations />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

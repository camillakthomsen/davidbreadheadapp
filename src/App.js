// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Coffee from "./components/Coffee";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import Location from "./components/Location";
import Running from "./components/Running";
import Surdejskursus from "./components/Surdejskursus";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Router>
      {/* Navigationen (kan senere laves til burger-menu) */}
      <NavBar />

      {/* Selve siderne */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/running" element={<Running />} />
        <Route path="/surdejskursus" element={<Surdejskursus />} />
      </Routes>
    </Router>
  );
}
